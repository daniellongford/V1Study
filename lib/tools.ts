// lib/tools.ts
// Registry of pilot tools. `free` tools are open to anyone; the rest need an active subscription.

export type Tool = {
  slug: string
  name: string
  short: string        // one line, shown in lists
  free: boolean
}

export const TOOLS: Tool[] = [
  // Free
  { slug: 'crosswind', name: 'Crosswind calculator', short: 'Headwind and crosswind components for any runway and wind.', free: true },
  { slug: 'density-altitude', name: 'Density altitude', short: 'Pressure altitude and density altitude from elevation, QNH and temperature.', free: true },
  { slug: 'minimum-fuel', name: 'Minimum fuel', short: 'Trip fuel, fixed reserve and total for a Part 91 flight.', free: true },
  { slug: 'converter', name: 'Unit converter', short: 'Pressure, temperature, mass, fuel, distance, altitude and speed.', free: true },
  // Members
  { slug: 'wind-triangle', name: 'Wind triangle', short: 'Heading, groundspeed and drift from TAS, track and wind.', free: false },
  { slug: 'one-in-sixty', name: '1 in 60', short: 'Track error, closing angle and heading change.', free: false },
  { slug: 'pnr-etp', name: 'PNR and ETP', short: 'Point of no return and equi-time point for a leg.', free: false },
  { slug: 'top-of-descent', name: 'Top of descent', short: 'Distance to start descent and rate of descent for a chosen profile.', free: false },
  { slug: 'tas', name: 'TAS from IAS', short: 'True airspeed from indicated airspeed, pressure altitude and temperature.', free: false },
]

export function getTool(slug: string): Tool | undefined {
  return TOOLS.find(t => t.slug === slug)
}
