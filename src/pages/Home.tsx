import { Card, CardContent } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { DUText } from "@/components/du-text";
import { PARTNERS } from "@/lib/data";
import { BrandLogo } from "@/components/brand-logo";
import { ExternalLink } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <header className="text-center mb-20">
          <DUText />

          <p className="text-xl text-muted-foreground mb-3">
            We break the economy to fix the game.
          </p>
          <p className="text-base text-muted-foreground/70 mb-12 max-w-2xl mx-auto">
            Taking a stand against predatory P2W gambling.
          </p>

          <Navbar />
        </header>

        <section className="border-t border-border pt-16">
          <h2 className="uppercase font-mono text-xs tracking-widest text-muted-foreground text-center mb-12">
            Partners
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {PARTNERS.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <Card className="bg-card border-border hover:border-foreground/20 hover:bg-accent/30 transition-all cursor-pointer">
                  <CardContent className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-4 min-w-0">
                      <img
                        src={partner.iconUrl}
                        alt={partner.name}
                        className="size-14 rounded-lg object-cover border border-border shrink-0"
                      />
                      <div className="text-left min-w-0">
                        <h3 className="font-medium text-card-foreground text-sm">
                          {partner.name}
                        </h3>
                        <p className="text-muted-foreground text-xs">
                          {partner.tag}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground shrink-0">
                      <BrandLogo platform={partner.type} size={24} />
                      <ExternalLink />
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
