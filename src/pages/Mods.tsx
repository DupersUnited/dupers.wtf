import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { FaGithub } from "react-icons/fa";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { DUText } from "@/components/du-text";
import { Badge } from "@/components/ui/badge";
import { MODS } from "@/lib/data";
import { ExternalLink } from "lucide-react";

export default function ModsPage() {
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
            Essential Mods
          </p>

          <p className="text-base text-muted-foreground mb-12 max-w-md mx-auto">
            Everything you need to start dupe hunting in Minecraft.
          </p>

          <Navbar />
        </header>

        <section className="border-t border-border pt-16">
          <h2 className="uppercase font-mono text-xs tracking-widest text-muted-foreground text-center mb-12">
            Mods
          </h2>

          <div className="grid grid-cols-1 gap-4">
            {MODS.map((mod) => (
              <Card
                key={mod.name}
                className={`bg-card border-border hover:border-foreground/20 transition-colors ${
                  mod.official ? "ring-2 ring-yellow-400" : ""
                }`}
              >
                <CardContent className="flex gap-4 p-4">
                  <img
                    src={mod.iconUrl}
                    alt={mod.name}
                    className="size-16 rounded-lg object-cover border border-border shrink-0"
                  />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3
                        className={`font-medium text-sm ${
                          mod.disabled
                            ? "text-muted-foreground"
                            : "text-card-foreground"
                        }`}
                      >
                        {mod.name}
                      </h3>
                      {mod.official && (
                        <Badge className="font-mono text-xs">Official</Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground text-xs mb-3 line-clamp-2">
                      {mod.description}
                    </p>

                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        asChild={!mod.disabled}
                        disabled={mod.disabled}
                      >
                        <a
                          href={mod.disabled ? "#" : mod.downloadUrl}
                          target={
                            mod.downloadUrl.startsWith("/")
                              ? "_self"
                              : "_blank"
                          }
                          rel="noopener noreferrer"
                        >
                          Download
                        </a>
                      </Button>

                      {mod.sourceUrl && (
                        <Button
                          size="sm"
                          variant="outline"
                          asChild={!mod.disabled}
                          disabled={mod.disabled}
                        >
                          <a
                            href={mod.disabled ? "#" : mod.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1"
                          >
                            <FaGithub />
                            Source
                            <ExternalLink />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
