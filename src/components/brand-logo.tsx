import type { ComponentProps } from "react"
import type { IconType } from "react-icons"
import { PartnerPlatform } from "../lib/types";
import { partnerPlatformToLogoDataMap } from "../lib/utils";

type BrandLogoProps = {
  platform: PartnerPlatform
} & ComponentProps<IconType>

export function BrandLogo({ platform, ...iconProps }: BrandLogoProps) {
  const { icon: Icon, color } = partnerPlatformToLogoDataMap[platform]

  return <Icon color={color} {...iconProps} />
}