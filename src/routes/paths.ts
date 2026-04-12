// src/routes/paths.ts
export const PATHS = {
  HOME: '/',
  EXPLODING_MENU: '/exploding-menu',
  SCAN_LINE_LOADER: '/scan_line_loader_page',
  RESEARCH: '/research',
  ABOUT: '/about',
} as const;

export const NAV_LINKS = [
  { name: 'Home', path: PATHS.HOME },
  { name: 'The Exploding Menu', path: PATHS.EXPLODING_MENU },
  { name: 'Scan Lines', path: PATHS.SCAN_LINE_LOADER },
] as const;