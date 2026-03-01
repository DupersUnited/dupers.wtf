import { Card, CardContent } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { LinkSquare01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { DUText } from "@/components/du-text";
import { PARTNERS } from "@/lib/data";
import { BrandLogo } from "@/components/brand-logo";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-5xl mx-auto px-8 py-24">
        <header className="text-center mb-16">
          <DUText />

          <p className="text-xl text-muted-foreground mb-3">
            We break the economy to fix the game.
          </p>
          <p className="text-lg text-muted-foreground/80 mb-16">
            Taking a stand against predatory P2W gambling.
          </p>

          <Navbar />
        </header>

        <section className="border-t border-border pt-16">
          <h2 className="uppercase font-mono text-muted-foreground text-center mb-8">
            Partners
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {PARTNERS.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="bg-card border-border hover:bg-accent transition-colors cursor-pointer">
                  <CardContent className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={partner.iconUrl}
                        alt={partner.name}
                        className="size-16 rounded-lg object-cover border border-border"
                      />
                      <div className="text-left">
                        <h3 className="font-medium text-card-foreground">
                          {partner.name}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {partner.tag}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <BrandLogo platform={partner.type} size={32} />
                      <HugeiconsIcon icon={LinkSquare01Icon} />
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
