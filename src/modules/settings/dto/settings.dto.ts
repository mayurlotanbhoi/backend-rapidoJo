export interface SettingsDto {
  general?: {
    siteName?: string;
    tagline?: string;
    supportEmail?: string;
  };
  seo?: {
    title?: string;
    description?: string;
    keywords?: string;
  };
  payment?: {
    gateway?: string;
    currency?: string;
    taxRate?: string;
  };
  smtp?: {
    host?: string;
    port?: string;
    username?: string;
    password?: string;
    useSsl?: boolean;
  };
}
