// src/routes/paths.ts
export const PATHS = {
  HOME: '/',
  EXPLODING_MENU: '/exploding-menu',
  RESEARCH: '/research',
  ABOUT: '/about',
} as const;

export const NAV_LINKS = [
  { name: 'Home', path: PATHS.HOME },
  { name: 'The Exploding Menu', path: PATHS.EXPLODING_MENU },
  { name: 'Research', path: PATHS.RESEARCH },
  { name: 'About', path: PATHS.ABOUT },
] as const;