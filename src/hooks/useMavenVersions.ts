import { useEffect, useState } from "react";
import {
  METADATA_URL,
  type VersionInfo,
  parseMetadata,
  buildVersionInfo,
} from "@/lib/maven";

export interface UseMavenVersionsResult {
  versions: VersionInfo[];
  latest: string;
  release: string;
  loading: boolean;
  error: string;
}

export function useMavenVersions(): UseMavenVersionsResult {
  const [versions, setVersions] = useState<VersionInfo[]>([]);
  const [latest, setLatest] = useState<string>("");
  const [release, setRelease] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(METADATA_URL);
        if (!res.ok) throw new Error(`Failed to load (${res.status})`);
        const xml = await res.text();
        if (cancelled) return;
        const meta = parseMetadata(xml);
        setLatest(meta.latest);
        setRelease(meta.release);
        setVersions(buildVersionInfo(meta.versions));
      } catch (e) {
        if (!cancelled) setError(String(e instanceof Error ? e.message : e));
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return { versions, latest, release, loading, error };
}
