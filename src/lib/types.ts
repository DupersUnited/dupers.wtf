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

export interface Partner {
  name: string;
  type: PartnerPlatform;
  tag: string;
  iconUrl: string;
  url: string;
}

export const PartnerPlatform = {
  YOUTUBE: "YOUTUBE",
  TWITCH: "TWITCH",
  DISCORD: "DISCORD"
} as const;

export type PartnerPlatform = typeof PartnerPlatform[keyof typeof PartnerPlatform];