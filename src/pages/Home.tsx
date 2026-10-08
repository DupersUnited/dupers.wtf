import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { DUText } from "@/components/du-text";
import { Reveal } from "@/components/reveal";
import { PARTNERS } from "@/lib/data";
import { BrandLogo } from "@/components/brand-logo";
import { useSEO } from "@/lib/seo";

export default function HomePage() {
  useSEO(
    "DupersUnited",
    "DupersUnited is a Discord community standing against pay-to-win gambling servers. Get the free Fabric dupe-hunting mod and join the Discord.",
    "/"
  );
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <section className="flex flex-col items-center gap-8 py-16 md:py-24">
          <Reveal>
            <DUText
              title="We break the economy to fix the game."
              description="Taking a stand against predatory P2W gambling."
            />
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <a
                  href="https://discord.gg/dupes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join the Discord
                  <ArrowRight data-icon="inline-end" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/dupersunited">Get the mod</Link>
              </Button>
            </div>
          </Reveal>
        </section>

        <Separator />

        <section className="py-14">
          <p className="mb-8 text-center font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Partners
          </p>
          <Reveal className="mx-auto max-w-3xl">
            {PARTNERS.map((partner, i) => (
              <div key={partner.name}>
                {i > 0 && <Separator />}
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 py-4"
                >
                  <img
                    src={partner.iconUrl}
                    alt={partner.name}
                    className="size-11 rounded-lg border object-cover"
                  />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium group-hover:underline group-hover:underline-offset-4">
                      {partner.name}
                    </span>
                    <span className="block font-mono text-xs text-muted-foreground">
                      {partner.tag}
                    </span>
                  </span>
                  <BrandLogo
                    platform={partner.type}
                    size={18}
                    className="shrink-0 text-muted-foreground"
                  />
                  <ArrowUpRight
                    data-icon="inline-end"
                    className="size-4 shrink-0 text-muted-foreground"
                  />
                </a>
              </div>
            ))}
          </Reveal>
        </section>

        <Footer />
      </div>
    </div>
  );
}
