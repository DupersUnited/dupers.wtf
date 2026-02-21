export interface Mod {
  name: string;
  description: string
  iconUrl: string;
  downloadUrl: string;
  sourceUrl: string;
  official?: boolean;
  disabled?: boolean;
}

export interface Contributor {
  login: string;
  html_url: string;
  avatar_url: string;
  contributions: number;
}