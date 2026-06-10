/**
 * Site toggles — edit here before deploy.
 *
 * devMode: show dev-only UI (banner with current flags).
 * features.webPortfolio: landing page → Interactive Web Portfolio (/portfolio).
 */
export const siteConfig = {
  devMode: false,

  features: {
    webPortfolio: false,
  },
} as const;

export type SiteConfig = typeof siteConfig;
