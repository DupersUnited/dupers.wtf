export const MAVEN_BASE = "https://maven.dupers.wtf/releases/wtf/dupers/dupersunited";
export const METADATA_URL = `${MAVEN_BASE}/maven-metadata.xml`;

export interface VersionInfo {
  version: string;
  jarUrl: string;
  pomUrl: string;
}

export interface MetadataInfo {
  latest: string;
  release: string;
  versions: string[];
}

export function parseMetadata(xml: string): MetadataInfo {
  const text = (tag: string) => {
    const match = xml.match(new RegExp(`<${tag}>([^<]*)</${tag}>`));
    return match ? match[1] : "";
  };
  const versions = Array.from(
    xml.matchAll(/<version>([^<]*)<\/version>/g)
  ).map((m) => m[1]);
  return {
    latest: text("latest"),
    release: text("release"),
    versions,
  };
}

export function buildVersionInfo(versions: string[]): VersionInfo[] {
  return versions
    .slice()
    .reverse()
    .map((version) => ({
      version,
      jarUrl: `${MAVEN_BASE}/${encodeURIComponent(version)}/dupersunited-${encodeURIComponent(version)}.jar`,
      pomUrl: `${MAVEN_BASE}/${encodeURIComponent(version)}/dupersunited-${encodeURIComponent(version)}.pom`,
    }));
}

export function extractMcVersion(version: string): string {
  const plus = version.indexOf("+");
  return plus === -1 ? "" : version.slice(plus + 1);
}

export function extractUniqueMcVersions(versions: VersionInfo[]): string[] {
  const set = new Set<string>();
  for (const v of versions) {
    const mc = extractMcVersion(v.version);
    if (mc) set.add(mc);
  }
  return Array.from(set).sort((a, b) => b.localeCompare(a, undefined, { numeric: true }));
}
