export interface AppSettings {
  theme?: 'light' | 'dark';
  language: string;
  currency: string;
}

export const defaults: AppSettings = {
  theme: 'light',
  language: 'en-GB',
  currency: 'GBP',
};
