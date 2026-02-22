import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { FaDiscord, FaTwitch, FaYoutube } from "react-icons/fa"
import type { IconType } from "react-icons/lib"
import { PartnerPlatform } from "./types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const partnerPlatformToLogoDataMap: Record<PartnerPlatform, { icon: IconType, color: string }> = {
  [PartnerPlatform.YOUTUBE]: { icon: FaYoutube, color: "#FF0033" },
  [PartnerPlatform.TWITCH]: { icon: FaTwitch, color: "#9146FF" },
  [PartnerPlatform.DISCORD]: { icon: FaDiscord, color: "#5865f2" }
}