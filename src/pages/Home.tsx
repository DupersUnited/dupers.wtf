import { Card, CardContent } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LinkSquare01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { FaYoutube } from "react-icons/fa";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { DUText } from "@/components/DUText";

const partners = [
  {
    name: "The Duper Trooper",
    tag: "@TheDuperTrooper",
    iconUrl:
      "https://yt3.googleusercontent.com/ytc/AIdro_kYrSpiQ8-QHVlr8EfRZXwAxkPqCoTmip7eQUDBDNJqkVc=s72-c-k-c0x00ffffff-no-rj",
    url: "https://youtube.com/@TheDuperTrooper"
  },
  {
    name: "TheMisterEpic",
    tag: "@TheMisterEpic",
    iconUrl:
      "https://yt3.googleusercontent.com/ytc/AIdro_moAuemmWPwA-vT4XgOnm_rfYuhM3cA8pvtZmcTJgCG6ck=s72-c-k-c0x00ffffff-no-rj",
    url: "https://youtube.com/@TheMisterEpic"
  },
  {
    name: "The Horizon",
    tag: "@The_Horizon",
    iconUrl:
      "https://yt3.googleusercontent.com/ytc/AIdro_kBEjUgFYQ0RVyh1z5R4XFnUnzF3rdj_M0H0PQgLXF_6w=s72-c-k-c0x00ffffff-no-rj",
    url: "https://youtube.com/@The_Horizon"
  },
  {
    name: "Dupers United",
    tag: "@dupersunited",
    iconUrl:
      "https://yt3.googleusercontent.com/hiHhWgJhjXp5opFqRLF5HpGZM18OI5-I0f3kFlm1Et7--KOovuPD4c39li4wZgywdLkQflhpJQ=s72-c-k-c0x00ffffff-no-rj",
    url: "https://youtube.com/@dupersunited"
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-5xl mx-auto px-8 py-24">
        <header className="text-center mb-24">
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
          <h2 className="text-sm uppercase font-mono text-muted-foreground text-center mb-16">
            Partners
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {partners.map((partner) => (
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
                      <FaYoutube size={32} className="text-red-500" />
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
