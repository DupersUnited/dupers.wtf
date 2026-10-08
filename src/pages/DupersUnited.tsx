import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { DUText } from "@/components/du-text";
import { Reveal } from "@/components/reveal";
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
import { useSEO } from "@/lib/seo";

const PAGE_SIZE = 8;

const INSTALL_STEPS = [
  {
    title: "Match your game version",
    body: "Use the Minecraft version filter below so you only see builds made for your game. When in doubt, update the game and take the latest build.",
  },
  {
    title: "Install Fabric first",
    body: "You need Fabric Loader plus Fabric API before this mod will load.",
    link: { to: "/mods", label: "Get Fabric API on the Mods page" },
  },
  {
    title: "Drop the .jar in your mods folder",
    body: "Windows: %appdata%/.minecraft/mods · macOS: ~/Library/Application Support/minecraft/mods · Linux: ~/.minecraft/mods — then launch the Fabric profile.",
  },
];

export default function DupersUnitedPage() {
  useSEO(
    "DupersUnited Mod",
    "Download the free DupersUnited Fabric mod. Pick a build for your Minecraft version and install in 3 steps.",
    "/dupersunited"
  );
  const { versions, latest, release, loading, error } = useMavenVersions();
  // null = user hasn't picked yet → default to newest MC version once loaded
  const [selectedMc, setSelectedMc] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const mcVersion = useMemo(() => extractMcVersion(latest), [latest]);

  const mcVersions = useMemo(
    () => extractUniqueMcVersions(versions),
    [versions]
  );

  const effectiveMc = selectedMc ?? mcVersions[0] ?? "all";

  const handleMcChange = (v: string) => {
    setSelectedMc(v);
    setShowAll(false);
  };

  const visibleVersions = useMemo(() => {
    if (effectiveMc === "all") return versions;
    return versions.filter((v) => v.version.endsWith(`+${effectiveMc}`));
  }, [versions, effectiveMc]);

  const shownVersions = showAll
    ? visibleVersions
    : visibleVersions.slice(0, PAGE_SIZE);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <section className="flex flex-col items-center gap-8 py-16 md:py-20">
          <Reveal>
            <DUText title="Pick a version and start dupe hunting." />
          </Reveal>
          {latest && (
            <Reveal delay={120}>
              <div className="flex flex-col items-center gap-3 sm:flex-row">
                <Button size="lg" asChild>
                  <a
                    href={`${MAVEN_BASE}/${encodeURIComponent(latest)}/dupersunited-${encodeURIComponent(latest)}.jar`}
                  >
                    <Download data-icon="inline-end" />
                    Download latest
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a
                    href="https://github.com/DupersUnited/dupersunited-mod"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source
                  </a>
                </Button>
              </div>
            </Reveal>
          )}
        </section>

        <Separator />

        <section className="mx-auto max-w-3xl py-14">
          <Reveal>
            <p className="mb-8 text-center font-mono text-xs tracking-widest text-muted-foreground uppercase">
              Downloads
            </p>
          </Reveal>

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
            selectedVersion={effectiveMc}
            onVersionChange={handleMcChange}
            total={visibleVersions.length}
          />

          <div>
            {shownVersions.map((v, i) => (
              <div key={v.version}>
                {i > 0 && <Separator />}
                <VersionCard
                  versionInfo={v}
                  mcVersion={extractMcVersion(v.version)}
                  isRelease={v.version === release}
                />
              </div>
            ))}
          </div>

          {!loading && !error && visibleVersions.length > PAGE_SIZE && (
            <div className="flex justify-center pt-6">
              <Button
                variant="ghost"
                onClick={() => setShowAll((s) => !s)}
              >
                {showAll
                  ? "Show fewer builds"
                  : `Show all ${visibleVersions.length} builds`}
              </Button>
            </div>
          )}

          {!loading && !error && visibleVersions.length === 0 && (
            <p className="py-12 text-center text-sm text-muted-foreground">
              No builds for that Minecraft version yet — try “All versions” or{" "}
              <Link to="/mods" className="underline underline-offset-4">
                browse the rest of the kit
              </Link>
              .
            </p>
          )}
        </section>

        <Separator />

        <section className="mx-auto max-w-3xl py-14">
          <p className="mb-8 text-center font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Install in 3 steps
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {INSTALL_STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-xs text-muted-foreground">
                    0{i + 1}
                  </span>
                  <h2 className="font-medium">{s.title}</h2>
                  <p className="text-sm text-muted-foreground">{s.body}</p>
                  {s.link && (
                    <Link
                      to={s.link.to}
                      className="text-sm underline underline-offset-4"
                    >
                      {s.link.label}
                    </Link>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
