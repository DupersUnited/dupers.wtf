import { Link } from "react-router-dom";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { DUText } from "@/components/du-text";
import { Reveal } from "@/components/reveal";
import { MODS } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useSEO } from "@/lib/seo";

export default function ModsPage() {
  useSEO(
    "DupersUnited Essential mods",
    "Everything you need to start dupe hunting in Minecraft: DupersUnited, Fabric API, and the essential client mods.",
    "/mods"
  );
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <section className="flex flex-col items-center gap-8 py-16 md:py-20">
          <Reveal>
            <DUText
              title="Essential mods."
              description="Everything you need to start dupe hunting in Minecraft."
            />
          </Reveal>
          <Reveal delay={120}>
            <Button size="lg" asChild>
              <Link to="/dupersunited">
                <Download data-icon="inline-start" />
                Get DupersUnited
              </Link>
            </Button>
          </Reveal>
        </section>

        <Separator />

        <section className="mx-auto max-w-3xl py-6">
          {MODS.map((mod, i) => (
            <Reveal key={mod.name} delay={Math.min(i, 3) * 60}>
              {i > 0 && <Separator />}
              <div className="flex gap-4 py-5">
                <img
                  src={mod.iconUrl}
                  alt={mod.name}
                  className={cn(
                    "size-12 shrink-0 rounded-lg border object-cover",
                    mod.official && "dark:invert"
                  )}
                />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-sm font-medium">{mod.name}</h2>
                    {mod.official && <Badge>Official</Badge>}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {mod.description}
                  </p>
                  <div className="mt-3 flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      asChild={!mod.disabled}
                      disabled={mod.disabled}
                    >
                      {mod.downloadUrl.startsWith("/") ? (
                        <Link to={mod.downloadUrl}>Download</Link>
                      ) : (
                        <a
                          href={mod.disabled ? undefined : mod.downloadUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Download
                        </a>
                      )}
                    </Button>
                    {mod.sourceUrl && (
                      <Button
                        size="sm"
                        variant="ghost"
                        asChild={!mod.disabled}
                        disabled={mod.disabled}
                      >
                        <a
                          href={mod.disabled ? undefined : mod.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Source
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </section>

        <Footer />
      </div>
    </div>
  );
}
