'use client'
import { useEffect, useState, use } from 'react'
import type { ReactElement, ReactNode } from 'react'
import { supabase } from '../../../lib/supabase'
import { getTool, TOOLS } from '../../../lib/tools'
import { isAdmin as checkAdmin, hasFreeAccess as checkFreeAccess } from '../../../lib/access'

// ── Design tokens ─────────────────────────────────────────────────────────────
const F = "'Barlow', system-ui, -apple-system, sans-serif"
const FD = "'Barlow Semi Condensed', 'Barlow', system-ui, sans-serif"
const C = { ground: '#eef1f5', paper: '#ffffff', ink: '#0a1628', rule: '#dde3ea', muted: '#5f6c7b', faint: '#98a4b3', blue: '#22629b' }

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 820)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])
  return isMobile
}

// ── Maths helpers ─────────────────────────────────────────────────────────────
const rad = (d: number) => d * Math.PI / 180
const deg = (r: number) => r * 180 / Math.PI
const norm360 = (d: number) => ((d % 360) + 360) % 360
const n = (v: string) => { const x = parseFloat(v); return isNaN(x) ? null : x }
const fmt = (x: number, dp = 0) => x.toLocaleString('en-AU', { minimumFractionDigits: dp, maximumFractionDigits: dp })
function hm(hours: number): string {
  const total = Math.round(hours * 60)
  const h = Math.floor(total / 60)
  const m = total % 60
  return h === 0 ? `${m} min` : `${h} h ${String(m).padStart(2, '0')} min`
}

// ── Shared form pieces ────────────────────────────────────────────────────────
function Field({ label, value, onChange, unit, placeholder, step }: { label: string; value: string; onChange: (v: string) => void; unit?: string; placeholder?: string; step?: string }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: '6px', minWidth: 0 }}>
      <span style={{ fontSize: '14px', fontWeight: 600, color: C.ink }}>{label}</span>
      <span style={{ display: 'flex', alignItems: 'center', border: `1px solid ${C.rule}`, borderRadius: '6px', background: C.paper, overflow: 'hidden' }}>
        <input type="number" inputMode="decimal" step={step || 'any'} value={value} placeholder={placeholder || ''} onChange={e => onChange(e.target.value)} style={{ flex: 1, minWidth: 0, border: 0, outline: 'none', padding: '11px 12px', fontSize: '16px', fontFamily: F, color: C.ink, background: 'transparent' }} />
        {unit && <span style={{ padding: '0 12px', fontSize: '13px', color: C.muted, whiteSpace: 'nowrap', borderLeft: `1px solid ${C.rule}`, alignSelf: 'stretch', display: 'inline-flex', alignItems: 'center' }}>{unit}</span>}
      </span>
    </label>
  )
}

function Choice({ label, value, options, onChange }: { label: string; value: string; options: { v: string; l: string }[]; onChange: (v: string) => void }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <span style={{ fontSize: '14px', fontWeight: 600, color: C.ink }}>{label}</span>
      <div role="group" aria-label={label} style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
        {options.map(o => (
          <button key={o.v} onClick={() => onChange(o.v)} aria-pressed={value === o.v} style={{ background: 'none', border: 0, padding: '8px 0 4px', fontSize: '15px', fontWeight: 600, color: value === o.v ? C.ink : C.faint, cursor: 'pointer', borderBottom: `2px solid ${value === o.v ? C.blue : 'transparent'}`, minHeight: '40px', fontFamily: F }}>{o.l}</button>
        ))}
      </div>
    </div>
  )
}

function Grid({ children, cols = 2 }: { children: ReactNode; cols?: number }) {
  return <div className="v1-grid" style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`, gap: '14px 18px' }}>{children}</div>
}

function Results({ rows, note }: { rows: { label: string; value: string; big?: boolean }[]; note?: string }) {
  return (
    <div style={{ marginTop: '1.5rem', borderTop: `1px solid ${C.ink}` }}>
      {rows.map((r, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '1rem', padding: '12px 0', borderBottom: `1px solid ${C.rule}` }}>
          <span style={{ fontSize: '15px', color: C.muted }}>{r.label}</span>
          <span style={{ fontFamily: FD, fontWeight: 600, fontSize: r.big ? '30px' : '22px', lineHeight: 1, color: C.ink, fontVariantNumeric: 'tabular-nums', textAlign: 'right' }}>{r.value}</span>
        </div>
      ))}
      {note && <p style={{ fontSize: '13px', color: C.muted, lineHeight: 1.6, margin: '12px 0 0' }}>{note}</p>}
    </div>
  )
}

function Empty({ text }: { text: string }) {
  return <p style={{ marginTop: '1.5rem', fontSize: '14px', color: C.faint }}>{text}</p>
}


// ── Diagrams ──────────────────────────────────────────────────────────────────
// SVG compass: up is north; a bearing θ (clockwise from north) maps to (sin θ, −cos θ).
const px = (bearing: number, r: number, cx = 150, cy = 150) => ({ x: cx + r * Math.sin(rad(bearing)), y: cy - r * Math.cos(rad(bearing)) })

function Rose({ children, caption }: { children: ReactNode; caption?: ReactNode }) {
  const ticks = []
  for (let b = 0; b < 360; b += 10) {
    const major = b % 90 === 0
    const o = px(b, 128), i = px(b, major ? 112 : b % 30 === 0 ? 117 : 122)
    ticks.push(<line key={b} x1={o.x} y1={o.y} x2={i.x} y2={i.y} stroke={major ? C.ink : C.rule} strokeWidth={major ? 2 : 1} />)
  }
  const label = (b: number, t: string) => { const q = px(b, 143); return <text key={t} x={q.x} y={q.y + 5} textAnchor="middle" fontSize="14" fontWeight="600" fill={C.ink} fontFamily={F}>{t}</text> }
  return (
    <figure style={{ margin: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
      <svg viewBox="0 0 300 300" role="img" aria-label="Compass diagram" style={{ width: '100%', maxWidth: '300px', height: 'auto', display: 'block' }}>
        <circle cx="150" cy="150" r="128" fill={C.paper} stroke={C.rule} strokeWidth="1" />
        {ticks}
        {label(0, 'N')}{label(90, 'E')}{label(180, 'S')}{label(270, 'W')}
        {children}
      </svg>
      {caption && <figcaption style={{ fontSize: '13px', color: C.muted, textAlign: 'center', lineHeight: 1.6 }}>{caption}</figcaption>}
    </figure>
  )
}

function Arrow({ from, to, color, width = 2.5, dashed = false }: { from: { x: number; y: number }; to: { x: number; y: number }; color: string; width?: number; dashed?: boolean }) {
  const ang = Math.atan2(to.y - from.y, to.x - from.x)
  const h = 9
  const p1 = { x: to.x - h * Math.cos(ang - 0.45), y: to.y - h * Math.sin(ang - 0.45) }
  const p2 = { x: to.x - h * Math.cos(ang + 0.45), y: to.y - h * Math.sin(ang + 0.45) }
  return (
    <g>
      <line x1={from.x} y1={from.y} x2={to.x} y2={to.y} stroke={color} strokeWidth={width} strokeDasharray={dashed ? '5 4' : undefined} strokeLinecap="round" />
      <polygon points={`${to.x},${to.y} ${p1.x},${p1.y} ${p2.x},${p2.y}`} fill={color} />
    </g>
  )
}

function CrosswindDiagram({ rh, wdir, wspd, head, cross }: { rh: number | null; wdir: number | null; wspd: number | null; head: number | null; cross: number | null }) {
  const cx = 150, cy = 150
  const rwyNum = (b: number) => String(Math.round(norm360(b) / 10) || 36).padStart(2, '0')
  const caption = rh === null ? 'Enter a runway to draw it' : wdir === null || wspd === null ? 'Enter the wind to draw it' : `Wind ${String(Math.round(wdir)).padStart(3, '0')}/${Math.round(wspd)} on runway ${rwyNum(rh)}`
  // decomposition lines from the arrow tail: along-runway (head) and across (cross), scaled to the arrow length
  const scale = wspd ? 70 / Math.max(wspd, 1) : 0
  const tail = wdir !== null ? px(wdir, 95) : null
  const tip = wdir !== null ? px(wdir, 95 - (wspd ? Math.min(70, 70) : 0)) : null
  const along = tail && rh !== null && head !== null ? px(rh + (head >= 0 ? 180 : 0), Math.abs(head) * scale, tail.x, tail.y) : null
  return (
    <Rose caption={caption}>
      {rh !== null && (
        <g>
          <g transform={`rotate(${rh} ${cx} ${cy})`}>
            <rect x={cx - 12} y={cy - 78} width="24" height="156" rx="2" fill={C.ink} />
            <line x1={cx} y1={cy - 56} x2={cx} y2={cy + 56} stroke="rgba(255,255,255,0.55)" strokeWidth="2" strokeDasharray="8 7" />
          </g>
          <text x={px(rh + 180, 66).x} y={px(rh + 180, 66).y + 4} textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff" fontFamily={F}>{rwyNum(rh)}</text>
          <text x={px(rh, 66).x} y={px(rh, 66).y + 4} textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff" fontFamily={F}>{rwyNum(rh + 180)}</text>
        </g>
      )}
      {tail && tip && (
        <g>
          <Arrow from={tail} to={tip} color={C.blue} width={3} />
          <text x={px(wdir!, 112).x} y={px(wdir!, 112).y + 4} textAnchor="middle" fontSize="12" fontWeight="600" fill={C.blue} fontFamily={F}>{Math.round(wspd!)} kt</text>
        </g>
      )}
      {tail && along && rh !== null && head !== null && cross !== null && (
        <g>
          <Arrow from={tail} to={along} color="#15803d" width={2} dashed />
          <Arrow from={along} to={tip!} color="#b45309" width={2} dashed />
        </g>
      )}
    </Rose>
  )
}

function WindTriangleDiagram({ trk, hdg, wdir, tas, wspd, gs }: { trk: number; hdg: number; wdir: number; tas: number; wspd: number; gs: number }) {
  const scale = 76 / Math.max(tas, gs, 1)
  const O = { x: 150, y: 150 }
  const A = px(hdg, tas * scale)           // air vector: heading, TAS
  const G = px(trk, gs * scale)            // ground vector: track, GS
  const d3 = (b: number) => String(Math.round(norm360(b))).padStart(3, '0')
  const sw = (color: string, dashed = false) => <span aria-hidden="true" style={{ display: 'inline-block', width: '18px', height: 0, borderTop: `3px ${dashed ? 'dashed' : 'solid'} ${color}`, verticalAlign: 'middle', marginRight: '6px' }} />
  const legend = (
    <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: '2px' }}>
      <span>{sw(C.ink)}Track {d3(trk)}°, groundspeed {Math.round(gs)} kt</span>
      <span>{sw(C.blue, true)}Heading {d3(hdg)}°, TAS {Math.round(tas)} kt</span>
      <span>{sw('#b45309')}Wind {d3(wdir)}° at {Math.round(wspd)} kt</span>
    </span>
  )
  return (
    <Rose caption={legend}>
      <Arrow from={O} to={G} color={C.ink} width={3} />
      <Arrow from={O} to={A} color={C.blue} width={2.5} dashed />
      <Arrow from={A} to={G} color="#b45309" width={2.5} />
    </Rose>
  )
}

// ── 1. Crosswind ──────────────────────────────────────────────────────────────
function Crosswind() {
  const [rwy, setRwy] = useState('')
  const [wdir, setWdir] = useState('')
  const [wspd, setWspd] = useState('')
  const r = n(rwy), d = n(wdir), s = n(wspd)
  const rh = r === null ? null : (r <= 36 ? r * 10 : r)
  let out = null
  if (rh !== null && d !== null && s !== null) {
    const a = rad(norm360(d - rh))
    const head = s * Math.cos(a)
    const cross = s * Math.sin(a)
    out = { head, cross, rh }
  }
  return (
    <>
      <Grid cols={3}>
        <Field label="Runway" value={rwy} onChange={setRwy} placeholder="e.g. 27" unit="number or °" />
        <Field label="Wind direction" value={wdir} onChange={setWdir} placeholder="e.g. 240" unit="°" />
        <Field label="Wind speed" value={wspd} onChange={setWspd} placeholder="e.g. 18" unit="kt" />
      </Grid>
      <div className="v1-side" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 300px', gap: '1.5rem 2.5rem', alignItems: 'start', marginTop: '0.5rem' }}>
        <div>
          {out ? (
            <Results rows={[
              { label: out.head >= 0 ? 'Headwind' : 'Tailwind', value: `${fmt(Math.abs(out.head))} kt`, big: true },
              { label: `Crosswind from the ${out.cross >= 0 ? 'right' : 'left'}`, value: `${fmt(Math.abs(out.cross))} kt`, big: true },
              { label: 'Wind angle off runway', value: `${fmt(Math.min(norm360(d! - out.rh), 360 - norm360(d! - out.rh)))}°` },
            ]} note="Runway heading taken as the runway number × 10. Enter a full heading in degrees if you have it. Wind direction as reported: degrees magnetic from an ATIS or AWIS, degrees true from a TAF or METAR. In the diagram, blue is the wind, green its along-runway part, amber its across-runway part." />
          ) : <Empty text="Enter the runway, wind direction and wind speed." />}
        </div>
        <CrosswindDiagram rh={rh} wdir={d} wspd={s} head={out ? out.head : null} cross={out ? out.cross : null} />
      </div>
    </>
  )
}

// ── 2. Density altitude ───────────────────────────────────────────────────────
function DensityAltitude() {
  const [elev, setElev] = useState('')
  const [qnh, setQnh] = useState('')
  const [oat, setOat] = useState('')
  const e = n(elev), q = n(qnh), t = n(oat)
  let out = null
  if (e !== null && q !== null && t !== null) {
    const pa = e + (1013.25 - q) * 30
    const isa = 15 - 2 * (pa / 1000)
    const da = pa + 120 * (t - isa)
    out = { pa, isa, da }
  }
  return (
    <>
      <Grid cols={3}>
        <Field label="Elevation" value={elev} onChange={setElev} placeholder="e.g. 1250" unit="ft" />
        <Field label="QNH" value={qnh} onChange={setQnh} placeholder="e.g. 1008" unit="hPa" />
        <Field label="Temperature" value={oat} onChange={setOat} placeholder="e.g. 32" unit="°C" />
      </Grid>
      {out ? (
        <Results rows={[
          { label: 'Pressure altitude', value: `${fmt(out.pa)} ft` },
          { label: 'ISA temperature at that level', value: `${fmt(out.isa, 1)} °C` },
          { label: 'Density altitude', value: `${fmt(out.da)} ft`, big: true },
        ]} note="Uses the exam rules of thumb: 30 ft per hPa from 1013.25, ISA lapse of 2 °C per 1,000 ft, and 120 ft of density altitude per degree from ISA." />
      ) : <Empty text="Enter elevation, QNH and temperature." />}
    </>
  )
}

// ── 3. Minimum fuel (Part 91) ─────────────────────────────────────────────────
function MinimumFuel() {
  const [engine, setEngine] = useState('piston')
  const [unit, setUnit] = useState('L')
  const [burn, setBurn] = useState('')
  const [tripH, setTripH] = useState('')
  const [tripM, setTripM] = useState('')
  const [altM, setAltM] = useState('')
  const [holdM, setHoldM] = useState('')
  const [taxi, setTaxi] = useState('')
  const [cont, setCont] = useState('')
  const b = n(burn), th = n(tripH) ?? 0, tm = n(tripM) ?? 0
  const reserveMin = engine === 'piston' ? 45 : 30
  let out = null
  if (b !== null && (th > 0 || tm > 0)) {
    const tripHrs = th + tm / 60
    const trip = b * tripHrs
    const fixed = b * reserveMin / 60
    const alt = b * ((n(altM) ?? 0) / 60)
    const hold = b * ((n(holdM) ?? 0) / 60)
    const tx = n(taxi) ?? 0
    const contingency = trip * ((n(cont) ?? 0) / 100)
    const total = trip + fixed + alt + hold + tx + contingency
    out = { trip, fixed, alt, hold, tx, contingency, total, tripHrs }
  }
  const u = unit
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
        <Grid cols={2}>
          <Choice label="Engine" value={engine} onChange={setEngine} options={[{ v: 'piston', l: 'Piston (45 min reserve)' }, { v: 'turbine', l: 'Turbine (30 min reserve)' }]} />
          <Choice label="Fuel unit" value={unit} onChange={setUnit} options={[{ v: 'L', l: 'Litres' }, { v: 'kg', l: 'Kilograms' }]} />
        </Grid>
        <Grid cols={3}>
          <Field label="Cruise burn" value={burn} onChange={setBurn} placeholder="e.g. 36" unit={`${u}/h`} />
          <Field label="Trip time, hours" value={tripH} onChange={setTripH} placeholder="2" unit="h" />
          <Field label="Trip time, minutes" value={tripM} onChange={setTripM} placeholder="15" unit="min" />
        </Grid>
        <Grid cols={4}>
          <Field label="Alternate" value={altM} onChange={setAltM} placeholder="0" unit="min" />
          <Field label="Holding" value={holdM} onChange={setHoldM} placeholder="0" unit="min" />
          <Field label="Taxi" value={taxi} onChange={setTaxi} placeholder="0" unit={u} />
          <Field label="Contingency" value={cont} onChange={setCont} placeholder="0" unit="% of trip" />
        </Grid>
      </div>
      {out ? (
        <Results rows={[
          { label: `Trip fuel (${hm(out.tripHrs)})`, value: `${fmt(out.trip, 1)} ${u}` },
          { label: `Fixed reserve (${reserveMin} min)`, value: `${fmt(out.fixed, 1)} ${u}` },
          ...(out.alt > 0 ? [{ label: 'Alternate', value: `${fmt(out.alt, 1)} ${u}` }] : []),
          ...(out.hold > 0 ? [{ label: 'Holding', value: `${fmt(out.hold, 1)} ${u}` }] : []),
          ...(out.contingency > 0 ? [{ label: 'Contingency', value: `${fmt(out.contingency, 1)} ${u}` }] : []),
          ...(out.tx > 0 ? [{ label: 'Taxi', value: `${fmt(out.tx, 1)} ${u}` }] : []),
          { label: 'Minimum fuel required', value: `${fmt(out.total, 1)} ${u}`, big: true },
        ]} note="Fixed reserve per CASR Part 91 MOS Chapter 19: 45 minutes at cruise rate for piston aeroplanes, 30 minutes for turbine. Alternate, holding, taxi and contingency are included only when you enter them. Check the current MOS and your operator's requirements before flight." />
      ) : <Empty text="Enter a cruise burn and a trip time." />}
    </>
  )
}

// ── 4. Unit converter ─────────────────────────────────────────────────────────
function Converter() {
  const [hpa, setHpa] = useState('')
  const [c, setC] = useState('')
  const [kg, setKg] = useState('')
  const [fuelL, setFuelL] = useState('')
  const [fuelType, setFuelType] = useState('avgas')
  const [nm, setNm] = useState('')
  const [ft, setFt] = useState('')
  const [kt, setKt] = useState('')
  const sg = fuelType === 'avgas' ? 0.72 : 0.80
  const H = n(hpa), T = n(c), K = n(kg), FL = n(fuelL), NM = n(nm), FT = n(ft), KT = n(kt)
  const line = (label: string, value: string) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', padding: '10px 0', borderBottom: `1px solid ${C.rule}`, fontSize: '15px' }}>
      <span style={{ color: C.muted }}>{label}</span><span style={{ fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>{value}</span>
    </div>
  )
  const block = (title: string, field: ReactNode, lines: ReactNode) => (
    <div style={{ background: C.paper, border: `1px solid ${C.rule}`, borderRadius: '8px', padding: '1.25rem' }}>
      <div style={{ fontFamily: FD, fontWeight: 600, fontSize: '20px', margin: '0 0 12px' }}>{title}</div>
      {field}
      <div style={{ marginTop: '10px' }}>{lines}</div>
    </div>
  )
  return (
    <div className="v1-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '18px' }}>
      {block('Pressure', <Field label="Pressure" value={hpa} onChange={setHpa} placeholder="1013.25" unit="hPa" />, <>{line('inHg', H === null ? '–' : fmt(H * 0.02953, 2))}{line('mb', H === null ? '–' : fmt(H, 1))}</>)}
      {block('Temperature', <Field label="Temperature" value={c} onChange={setC} placeholder="15" unit="°C" />, <>{line('°F', T === null ? '–' : fmt(T * 9 / 5 + 32, 1))}{line('Kelvin', T === null ? '–' : fmt(T + 273.15, 1))}</>)}
      {block('Mass', <Field label="Mass" value={kg} onChange={setKg} placeholder="100" unit="kg" />, <>{line('lb', K === null ? '–' : fmt(K * 2.20462, 1))}</>)}
      {block('Fuel volume to mass', <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}><Choice label="Fuel" value={fuelType} onChange={setFuelType} options={[{ v: 'avgas', l: 'Avgas (SG 0.72)' }, { v: 'jet', l: 'Jet A-1 (SG 0.80)' }]} /><Field label="Volume" value={fuelL} onChange={setFuelL} placeholder="200" unit="L" /></div>, <>{line('kg', FL === null ? '–' : fmt(FL * sg, 1))}{line('lb', FL === null ? '–' : fmt(FL * sg * 2.20462, 1))}{line('US gal', FL === null ? '–' : fmt(FL * 0.264172, 1))}</>)}
      {block('Distance', <Field label="Distance" value={nm} onChange={setNm} placeholder="100" unit="nm" />, <>{line('km', NM === null ? '–' : fmt(NM * 1.852, 1))}{line('statute miles', NM === null ? '–' : fmt(NM * 1.15078, 1))}</>)}
      {block('Altitude', <Field label="Altitude" value={ft} onChange={setFt} placeholder="5000" unit="ft" />, <>{line('metres', FT === null ? '–' : fmt(FT * 0.3048, 0))}</>)}
      {block('Speed', <Field label="Speed" value={kt} onChange={setKt} placeholder="120" unit="kt" />, <>{line('km/h', KT === null ? '–' : fmt(KT * 1.852, 1))}{line('m/s', KT === null ? '–' : fmt(KT * 0.514444, 1))}{line('mph', KT === null ? '–' : fmt(KT * 1.15078, 1))}</>)}
    </div>
  )
}

// ── 5. Wind triangle ──────────────────────────────────────────────────────────
function WindTriangle() {
  const [tas, setTas] = useState('')
  const [trk, setTrk] = useState('')
  const [wdir, setWdir] = useState('')
  const [wspd, setWspd] = useState('')
  const T = n(tas), K = n(trk), D = n(wdir), S = n(wspd)
  let out = null
  if (T !== null && K !== null && D !== null && S !== null && T > 0) {
    const rel = rad(norm360(D - K))
    const xw = S * Math.sin(rel)          // positive = from the right
    const hw = S * Math.cos(rel)          // positive = headwind
    const ratio = xw / T
    if (Math.abs(ratio) <= 1) {
      const wca = deg(Math.asin(ratio))
      const hdg = norm360(K + wca)
      const gs = T * Math.cos(rad(wca)) - hw
      out = { wca, hdg, gs, xw, hw }
    }
  }
  return (
    <>
      <Grid cols={4}>
        <Field label="TAS" value={tas} onChange={setTas} placeholder="120" unit="kt" />
        <Field label="Track" value={trk} onChange={setTrk} placeholder="090" unit="°" />
        <Field label="Wind from" value={wdir} onChange={setWdir} placeholder="040" unit="°" />
        <Field label="Wind speed" value={wspd} onChange={setWspd} placeholder="25" unit="kt" />
      </Grid>
      <div className="v1-side" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 300px', gap: '1.5rem 2.5rem', alignItems: 'start', marginTop: '0.5rem' }}>
        <div>
          {out ? (
            <Results rows={[
              { label: 'Heading to steer', value: `${String(Math.round(out.hdg)).padStart(3, '0')}°`, big: true },
              { label: 'Groundspeed', value: `${fmt(out.gs)} kt`, big: true },
              { label: `Drift (${out.wca >= 0 ? 'wind from the right, lay off right' : 'wind from the left, lay off left'})`, value: `${fmt(Math.abs(out.wca))}°` },
              { label: out.hw >= 0 ? 'Headwind component' : 'Tailwind component', value: `${fmt(Math.abs(out.hw))} kt` },
            ]} note="Use the same reference for track and wind: both true, or both magnetic. Forecast winds from a GAF or GPWT are true; apply variation if your track is magnetic. In the diagram, the dashed blue line is where the nose points (heading and TAS), amber is the wind, and the solid line is what you make good (track and groundspeed)." />
          ) : <Empty text="Enter TAS, track, wind direction and wind speed." />}
        </div>
        {out ? (
          <WindTriangleDiagram trk={K!} hdg={out.hdg} wdir={D!} tas={T!} wspd={S!} gs={out.gs} />
        ) : (
          <Rose caption="The triangle draws once all four values are in">{null}</Rose>
        )}
      </div>
    </>
  )
}

// ── 6. 1 in 60 ────────────────────────────────────────────────────────────────
function OneInSixty() {
  const [flown, setFlown] = useState('')
  const [off, setOff] = useState('')
  const [togo, setTogo] = useState('')
  const Fd = n(flown), O = n(off), G = n(togo)
  let out = null
  if (Fd !== null && O !== null && Fd > 0) {
    const te = 60 * O / Fd
    const ca = G !== null && G > 0 ? 60 * O / G : null
    out = { te, ca, total: ca !== null ? te + ca : null }
  }
  return (
    <>
      <Grid cols={3}>
        <Field label="Distance flown" value={flown} onChange={setFlown} placeholder="30" unit="nm" />
        <Field label="Distance off track" value={off} onChange={setOff} placeholder="3" unit="nm" />
        <Field label="Distance to go" value={togo} onChange={setTogo} placeholder="45" unit="nm" />
      </Grid>
      {out ? (
        <Results rows={[
          { label: 'Track error', value: `${fmt(out.te, 1)}°` },
          { label: 'Closing angle', value: out.ca === null ? '–' : `${fmt(out.ca, 1)}°` },
          { label: 'Heading change to reach destination', value: out.total === null ? '–' : `${fmt(out.total, 1)}°`, big: true },
        ]} note="Track error = 60 × off-track ÷ distance flown. Closing angle = 60 × off-track ÷ distance to go. Turn by the sum, towards the track. Leave 'distance to go' blank to regain track parallel instead." />
      ) : <Empty text="Enter distance flown and distance off track." />}
    </>
  )
}

// ── 7. PNR and ETP ────────────────────────────────────────────────────────────
function PnrEtp() {
  const [dist, setDist] = useState('')
  const [gsOut, setGsOut] = useState('')
  const [gsHome, setGsHome] = useState('')
  const [endur, setEndur] = useState('')
  const D = n(dist), Go = n(gsOut), Gh = n(gsHome), E = n(endur)
  let pnr = null, etp = null
  if (Go !== null && Gh !== null && Go > 0 && Gh > 0) {
    if (E !== null && E > 0) {
      const t = E * Gh / (Go + Gh)
      pnr = { time: t, dist: t * Go }
    }
    if (D !== null && D > 0) {
      const d = D * Gh / (Go + Gh)
      etp = { dist: d, time: d / Go }
    }
  }
  return (
    <>
      <Grid cols={4}>
        <Field label="Leg distance" value={dist} onChange={setDist} placeholder="320" unit="nm" />
        <Field label="Groundspeed out" value={gsOut} onChange={setGsOut} placeholder="130" unit="kt" />
        <Field label="Groundspeed home" value={gsHome} onChange={setGsHome} placeholder="110" unit="kt" />
        <Field label="Safe endurance" value={endur} onChange={setEndur} placeholder="4.5" unit="h" step="0.1" />
      </Grid>
      {pnr || etp ? (
        <Results rows={[
          ...(pnr ? [{ label: 'PNR distance from departure', value: `${fmt(pnr.dist)} nm`, big: true }, { label: 'Time to PNR', value: hm(pnr.time) }] : []),
          ...(etp ? [{ label: 'ETP distance from departure', value: `${fmt(etp.dist)} nm`, big: true }, { label: 'Time to ETP', value: hm(etp.time) }] : []),
        ]} note="PNR: time out = endurance × GS home ÷ (GS out + GS home), with safe endurance excluding fixed reserve. ETP: distance = leg distance × GS home ÷ (GS out + GS home). For an engine-out or depressurised ETP, enter the reduced groundspeeds." />
      ) : <Empty text="Enter groundspeed out and home, then endurance for PNR or leg distance for ETP." />}
    </>
  )
}

// ── 8. Top of descent ─────────────────────────────────────────────────────────
function TopOfDescent() {
  const [cruise, setCruise] = useState('')
  const [target, setTarget] = useState('')
  const [gs, setGs] = useState('')
  const [angle, setAngle] = useState('3')
  const Cr = n(cruise), Tg = n(target), G = n(gs), A = n(angle)
  let out = null
  if (Cr !== null && Tg !== null && G !== null && A !== null && Cr > Tg && G > 0 && A > 0) {
    const lose = Cr - Tg
    const distNm = lose / (Math.tan(rad(A)) * 6076.12)
    const rod = G * 101.269 * Math.tan(rad(A))
    const mins = distNm / G * 60
    out = { lose, distNm, rod, mins, rot3: lose / 1000 * 3, rod3: G * 5 }
  }
  return (
    <>
      <Grid cols={4}>
        <Field label="Cruise altitude" value={cruise} onChange={setCruise} placeholder="8500" unit="ft" />
        <Field label="Target altitude" value={target} onChange={setTarget} placeholder="1500" unit="ft" />
        <Field label="Groundspeed" value={gs} onChange={setGs} placeholder="140" unit="kt" />
        <Field label="Descent angle" value={angle} onChange={setAngle} placeholder="3" unit="°" step="0.5" />
      </Grid>
      {out ? (
        <Results rows={[
          { label: 'Altitude to lose', value: `${fmt(out.lose)} ft` },
          { label: 'Start descent', value: `${fmt(out.distNm, 1)} nm out`, big: true },
          { label: 'Rate of descent', value: `${fmt(out.rod)} ft/min`, big: true },
          { label: 'Time in descent', value: hm(out.mins / 60) },
        ]} note={`Rule of thumb for a 3° profile: 3 nm per 1,000 ft (${fmt(out.rot3, 1)} nm here) and rate of descent = groundspeed × 5 (${fmt(out.rod3)} ft/min).`} />
      ) : <Empty text="Enter cruise and target altitude, groundspeed and the descent angle." />}
    </>
  )
}

// ── 9. TAS from IAS ───────────────────────────────────────────────────────────
function TasFromIas() {
  const [ias, setIas] = useState('')
  const [pa, setPa] = useState('')
  const [oat, setOat] = useState('')
  const I = n(ias), P = n(pa), T = n(oat)
  let out = null
  if (I !== null && P !== null && T !== null && I > 0) {
    const delta = Math.pow(1 - 6.8756e-6 * P, 5.2559)
    const theta = (T + 273.15) / 288.15
    const sigma = delta / theta
    const tas = I / Math.sqrt(sigma)
    const isa = 15 - 2 * (P / 1000)
    const da = P + 120 * (T - isa)
    const rot = I * (1 + 0.02 * (P / 1000))
    out = { tas, rot, da }
  }
  return (
    <>
      <Grid cols={3}>
        <Field label="IAS (as CAS)" value={ias} onChange={setIas} placeholder="110" unit="kt" />
        <Field label="Pressure altitude" value={pa} onChange={setPa} placeholder="7500" unit="ft" />
        <Field label="Temperature" value={oat} onChange={setOat} placeholder="5" unit="°C" />
      </Grid>
      {out ? (
        <Results rows={[
          { label: 'True airspeed', value: `${fmt(out.tas)} kt`, big: true },
          { label: 'Density altitude', value: `${fmt(out.da)} ft` },
          { label: 'Rule of thumb (2% per 1,000 ft at ISA)', value: `${fmt(out.rot)} kt` },
        ]} note="Calculated from the ISA pressure ratio and the actual temperature. Instrument and position error are ignored; enter CAS if you have it." />
      ) : <Empty text="Enter IAS, pressure altitude and temperature." />}
    </>
  )
}

const COMPONENTS: Record<string, () => ReactElement> = {
  'crosswind': Crosswind,
  'density-altitude': DensityAltitude,
  'minimum-fuel': MinimumFuel,
  'converter': Converter,
  'wind-triangle': WindTriangle,
  'one-in-sixty': OneInSixty,
  'pnr-etp': PnrEtp,
  'top-of-descent': TopOfDescent,
  'tas': TasFromIas,
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const tool = getTool(slug)
  const isMobile = useIsMobile()
  const [user, setUser] = useState<any>(null)
  const [checked, setChecked] = useState(false)
  const [member, setMember] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    async function check() {
      const { data } = await supabase.auth.getUser()
      const u = data.user ?? null
      setUser(u)
      if (u && (checkAdmin(u.email) || checkFreeAccess(u.email))) { setMember(true); setChecked(true); return }
      if (u) {
        const { data: sub } = await supabase.from('subscriptions').select('status').eq('user_id', u.id).in('status', ['active', 'cancelling']).single()
        setMember(!!sub)
      }
      setChecked(true)
    }
    check()
  }, [])

  async function handleSignOut() {
    await supabase.auth.signOut()
    window.location.href = '/'
  }

  const navLink = (href: string, label: string, active = false) => (
    <a href={href} style={{ color: active ? C.ink : C.muted, fontWeight: active ? 600 : 400, textDecoration: 'none', fontSize: '15px', minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}>{label}</a>
  )

  const Body = tool ? COMPONENTS[tool.slug] : null
  const allowed = tool ? (tool.free || member) : false
  const others = TOOLS.filter(t => t.slug !== slug)

  return (
    <main style={{ minHeight: '100vh', background: C.ground, fontFamily: F, color: C.ink, WebkitFontSmoothing: 'antialiased' }}>
      <style>{`
        .v1-link:hover { text-decoration: underline; text-underline-offset: 3px; }
        :focus-visible { outline: 2px solid ${C.blue}; outline-offset: 2px; }
        input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
        input[type=number] { -moz-appearance: textfield; }
        @media (max-width: 820px) { .v1-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; } .v1-side { grid-template-columns: 1fr !important; } }
        @media (max-width: 520px) { .v1-grid { grid-template-columns: 1fr !important; } }
      `}</style>

      {/* NAV */}
      <nav style={{ background: C.paper, borderBottom: `1px solid ${C.rule}`, height: '64px', padding: isMobile ? '0 1rem' : '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative' }}>
        <a href={user ? '/dashboard' : '/'} style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '9px', color: C.ink }}>
          <img src="/v1-mark-navy.png" alt="V1" style={{ height: '30px', width: 'auto', display: 'block' }} />
          <span style={{ fontFamily: FD, fontWeight: 600, fontSize: '24px', letterSpacing: '0.01em', lineHeight: 1 }}>Study</span>
        </a>
        {!user ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
            {navLink('/tools', 'Tools')}
            {navLink('/login', 'Log in')}
            <a href="/signup" className="v1-link" style={{ color: C.blue, fontWeight: 600, textDecoration: 'none', fontSize: '15px', minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}>Start free trial</a>
          </div>
        ) : isMobile ? (
          <>
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu" style={{ background: 'none', border: `1px solid ${C.rule}`, borderRadius: '4px', padding: '0 12px', cursor: 'pointer', fontSize: '15px', fontWeight: 600, color: C.ink, minWidth: '44px', minHeight: '40px', fontFamily: F }}>
              {menuOpen ? 'Close' : 'Menu'}
            </button>
            {menuOpen && (
              <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: C.paper, borderBottom: `1px solid ${C.rule}`, padding: '0.5rem 1rem 1rem', display: 'flex', flexDirection: 'column', zIndex: 100 }}>
                <a href="/dashboard" style={{ color: C.ink, textDecoration: 'none', padding: '12px 0', fontSize: '16px', borderBottom: `1px solid ${C.rule}` }}>Study</a>
                <a href="/progress" style={{ color: C.ink, textDecoration: 'none', padding: '12px 0', fontSize: '16px', borderBottom: `1px solid ${C.rule}` }}>Progress</a>
                <a href="/tools" style={{ color: C.ink, fontWeight: 600, textDecoration: 'none', padding: '12px 0', fontSize: '16px', borderBottom: `1px solid ${C.rule}` }}>Tools</a>
                <a href="/pricing" style={{ color: C.ink, textDecoration: 'none', padding: '12px 0', fontSize: '16px', borderBottom: `1px solid ${C.rule}` }}>Upgrade</a>
                <div style={{ padding: '12px 0 6px', fontSize: '14px', color: C.faint }}>{user?.email}</div>
                <button onClick={handleSignOut} style={{ background: 'none', border: 'none', padding: '8px 0', fontSize: '16px', cursor: 'pointer', color: C.muted, textAlign: 'left', fontFamily: F }}>Sign out</button>
              </div>
            )}
          </>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
            {navLink('/dashboard', 'Study')}
            {navLink('/progress', 'Progress')}
            {navLink('/tools', 'Tools', true)}
            {navLink('/pricing', 'Upgrade')}
            <span style={{ fontSize: '14px', color: C.faint }}>{user?.email}</span>
            <button onClick={handleSignOut} style={{ background: 'none', border: `1px solid ${C.rule}`, borderRadius: '4px', padding: '7px 12px', fontSize: '14px', cursor: 'pointer', color: C.muted, fontFamily: F }}>Sign out</button>
          </div>
        )}
      </nav>

      <div style={{ maxWidth: '1040px', margin: '0 auto', padding: isMobile ? '1.75rem 1rem 3rem' : '3rem 2rem 4rem' }}>
        <a href="/tools" className="v1-link" style={{ fontSize: '14px', color: C.muted, textDecoration: 'none' }}>All tools</a>

        {!tool ? (
          <>
            <h1 style={{ fontFamily: FD, fontWeight: 600, fontSize: isMobile ? '34px' : '44px', lineHeight: 1, margin: '12px 0 12px' }}>Tool not found</h1>
            <p style={{ fontSize: '16px', color: C.muted }}>That tool doesn&apos;t exist. <a href="/tools" className="v1-link" style={{ color: C.ink, fontWeight: 600, textDecoration: 'none' }}>See all tools</a></p>
          </>
        ) : (
          <>
            <h1 style={{ fontFamily: FD, fontWeight: 600, fontSize: isMobile ? '34px' : '44px', lineHeight: 1, letterSpacing: '-0.005em', margin: '12px 0 10px' }}>{tool.name}</h1>
            <p style={{ fontSize: '16px', lineHeight: 1.55, color: C.muted, margin: '0 0 2rem', maxWidth: '620px' }}>{tool.short}</p>

            {allowed && Body ? (
              <div style={{ background: tool.slug === 'converter' ? 'transparent' : C.paper, border: tool.slug === 'converter' ? 'none' : `1px solid ${C.rule}`, borderRadius: '8px', padding: tool.slug === 'converter' ? 0 : (isMobile ? '1.25rem 1rem' : '1.75rem') }}>
                <Body />
              </div>
            ) : !checked ? (
              <p style={{ color: C.muted }}>Loading</p>
            ) : (
              <div style={{ background: C.paper, border: `1px solid ${C.rule}`, borderRadius: '8px', padding: isMobile ? '1.5rem 1rem' : '2rem', maxWidth: '560px' }}>
                <div style={{ fontSize: '17px', fontWeight: 600, marginBottom: '6px' }}>This tool is part of V1 Study membership.</div>
                <p style={{ fontSize: '15px', color: C.muted, lineHeight: 1.6, margin: '0 0 1.25rem' }}>Every plan includes the member tools alongside the question banks and timed exams. Seven days free, cancel anytime.</p>
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                  <a href="/signup" style={{ display: 'inline-block', background: C.paper, color: C.ink, border: `1px solid ${C.ink}`, borderRadius: '4px', padding: '13px 28px', fontWeight: 600, fontSize: '15px', textDecoration: 'none' }}>Start your 7-day free trial</a>
                  {!user && <a href="/login" className="v1-link" style={{ fontSize: '15px', color: C.ink, fontWeight: 600, textDecoration: 'none' }}>Log in</a>}
                </div>
              </div>
            )}

            <div style={{ marginTop: '3rem' }}>
              <div style={{ fontSize: '14px', color: C.muted, marginBottom: '8px' }}>Other tools</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 24px' }}>
                {others.map(t => (
                  <a key={t.slug} href={'/tools/' + t.slug} className="v1-link" style={{ fontSize: '15px', fontWeight: 600, color: C.ink, textDecoration: 'none', minHeight: '36px', display: 'inline-flex', alignItems: 'center' }}>{t.name}{!t.free && !member ? <span style={{ fontSize: '12px', fontWeight: 400, color: C.faint, marginLeft: '6px' }}>members</span> : null}</a>
                ))}
              </div>
            </div>
          </>
        )}

        <p style={{ marginTop: '2.5rem', fontSize: '13px', color: C.faint, lineHeight: 1.6, maxWidth: '620px' }}>
          These tools use the standard formulas and rules of thumb taught for the CASA theory exams. They are for study and planning practice. Verify any figure against your aircraft&apos;s flight manual and current CASA documents before you fly.
        </p>

        <div style={{ marginTop: '3rem', paddingTop: '1.25rem', borderTop: `1px solid ${C.rule}`, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', fontSize: '13px', color: C.faint }}>
          <span>© V1 Study. Built for Australian pilots.</span>
          <a href="/terms" style={{ color: C.faint, textDecoration: 'none' }}>Terms and conditions</a>
        </div>
      </div>
    </main>
  )
}
