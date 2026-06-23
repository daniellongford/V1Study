// ============================================================
// V1 STUDY — ACCESS CONTROL
// Single source of truth for admin and complimentary access.
// Edit the lists here; the dashboard, quiz and signup all import them.
// ============================================================

// Admin accounts — full access to everything including unreleased
// (coming soon) licences. For testing and platform owner use.
export const ADMIN_EMAILS: string[] = [
  'daniel.longford1@gmail.com',
]

// Complimentary access — full access to released content, free, no
// subscription required. These users skip checkout at signup and are
// never charged. They still create an account with this exact email.
export const FREE_ACCESS_EMAILS: string[] = [
  'lachlanholmes@icloud.com',
]

// Licences not yet released — shown but locked with a "Coming soon" state.
export const COMING_SOON_LICENCES: string[] = ['ATPL']

// Which subjects each plan unlocks.
export const PLAN_ACCESS: Record<string, string[]> = {
  PPL: ['PPL Theory'],
  CPL: ['PPL Theory', 'Human Factors', 'Aerodynamics', 'Aircraft General Knowledge', 'Meteorology', 'Navigation', 'Operations Performance Planning', 'Flight Rules and Air Law'],
  ATPL: ['PPL Theory', 'Human Factors', 'Aerodynamics', 'Aircraft General Knowledge', 'Meteorology', 'Navigation', 'Operations Performance Planning', 'Flight Rules and Air Law', 'Aerodynamics and Systems', 'Performance and Loading', 'Flight Planning', 'Air Law'],
  IREX: ['Instrument Rating'],
  FULL: ['PPL Theory', 'Human Factors', 'Aerodynamics', 'Aircraft General Knowledge', 'Meteorology', 'Navigation', 'Operations Performance Planning', 'Flight Rules and Air Law', 'Aerodynamics and Systems', 'Performance and Loading', 'Flight Planning', 'Air Law', 'Instrument Rating'],
}

export function isAdmin(email?: string | null): boolean {
  return email ? ADMIN_EMAILS.includes(email) : false
}

export function hasFreeAccess(email?: string | null): boolean {
  return email ? FREE_ACCESS_EMAILS.includes(email) : false
}
