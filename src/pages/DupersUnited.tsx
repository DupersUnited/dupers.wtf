import { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/theme-toggle";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { DUText } from "@/components/du-text";
import { LatestVersionCard } from "@/components/dupersunited/latest-version-card";
import { VersionCard } from "@/components/dupersunited/version-card";
import { McVersionSelector } from "@/components/dupersunited/mc-version-selector";
import { LoadingState } from "@/components/dupersunited/loading-state";
import { useMavenVersions } from "@/hooks/useMavenVersions";
import {
  extractMcVersion,
  extractUniqueMcVersions,
  MAVEN_BASE,
} from "@/lib/maven";

export default function DupersUnitedPage() {
  const { versions, latest, release, loading, error } = useMavenVersions();
  const [selectedMc, setSelectedMc] = useState<string>("all");

  const mcVersion = useMemo(() => extractMcVersion(latest), [latest]);

  const mcVersions = useMemo(
    () => extractUniqueMcVersions(versions),
    [versions]
  );

  useEffect(() => {
    setSelectedMc("all");
  }, [mcVersions]);

  const visibleVersions = useMemo(() => {
    if (selectedMc === "all") return versions;
    return versions.filter((v) => v.version.endsWith(`+${selectedMc}`));
  }, [versions, selectedMc]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <Link
          to="/"
          className="text-muted-foreground hover:text-foreground text-xs mb-10 inline-block uppercase font-mono tracking-widest"
        >
          ← Back
        </Link>

        <header className="text-center mb-20">
          <DUText />

          <p className="text-xs uppercase font-mono tracking-widest text-muted-foreground mb-3">
            DupersUnited Mod
          </p>

          <p className="text-base text-muted-foreground mb-12 max-w-md mx-auto">
            Pick a version and start dupe hunting.
          </p>

          <Navbar />
        </header>

        <section className="border-t border-border pt-16">
          <h2 className="uppercase font-mono text-xs tracking-widest text-muted-foreground text-center mb-12">
            Downloads
          </h2>

          <LoadingState
            isLoading={loading}
            error={error}
            hasVersions={versions.length > 0}
          />

          {latest && (
            <LatestVersionCard
              version={latest}
              mcVersion={mcVersion}
              jarUrl={`${MAVEN_BASE}/${encodeURIComponent(latest)}/dupersunited-${encodeURIComponent(latest)}.jar`}
            />
          )}

          <McVersionSelector
            versions={mcVersions}
            selectedVersion={selectedMc}
            onVersionChange={setSelectedMc}
          />

          <div className="grid grid-cols-1 gap-4">
            {visibleVersions.map((v) => {
              const mc = extractMcVersion(v.version);
              return (
                <VersionCard
                  key={v.version}
                  versionInfo={v}
                  mcVersion={mc}
                  isRelease={v.version === release}
                />
              );
            })}
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
