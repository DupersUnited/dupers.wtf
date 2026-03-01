import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { DUText } from "@/components/du-text";
import type { Contributor } from "@/lib/types";

const REPO = "DupersUnited/du-public-addon";

export default function PublicAddonPage() {
  const [contributors, setContributors] = useState<Contributor[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const contribRes = await fetch(`https://api.github.com/repos/${REPO}/contributors`);

        if (contribRes.ok) {
          setContributors(await contribRes.json())
        }
      } catch (e) {}
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <Link to="/mods" className="text-muted-foreground hover:text-foreground text-sm mb-8 inline-block">
          ← Back to Mods
        </Link>

        <header className="text-center mb-16">
          <DUText />
          
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
            Public Addon
          </p>
          
          <p className="text-lg text-muted-foreground mb-12">
            Choose your version below and start exploiting.
          </p>

          <Navbar />
        </header>

        <Card className="bg-card border-border mb-8">
          <CardContent className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-bold">!</div>
              <p className="text-muted-foreground text-sm">Found a bug or have a feature request?</p>
            </div>
            <Button variant="outline" size="sm" asChild>
              <a href={"https://github.com/" + REPO + "/issues/new"} target="_blank" rel="noopener noreferrer">Open Issue</a>
            </Button>
          </CardContent>
        </Card>

        {contributors.length > 0 && (
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-xs uppercase tracking-wider text-muted-foreground">Contributors</span>
            <div className="flex gap-2">
              {contributors.map((contributor) => (
                <a
                  key={contributor.login}
                  href={contributor.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full overflow-hidden border border-border"
                  title={`${contributor.login} (${contributor.contributions} commits)`}
                >
                  <img src={contributor.avatar_url} alt={contributor.login} className="w-full h-full object-cover" />
                </a>
              ))}
            </div>
          </div>
        )}

        <section id="versions">
          <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground text-center mb-12">Available Versions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* {mcVersions.map((mcVersion) => (
              <Card key={mcVersion} className="bg-card border-border">
                <CardContent className="p-4">
                  <div className="inline-block px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs mb-4">
                    MC {mcVersion}
                  </div>

                  <h3 className="font-medium text-card-foreground mb-4">DupersUnited Addon</h3>
                  
                  <div className="flex gap-6 text-xs mb-6 text-muted-foreground">
                    <div>
                      <span className="block mb-1">Mod</span>
                      <span className="font-mono">{latestModVersion}</span>
                    </div>
                    <div>
                      <span className="block mb-1">MC</span>
                      <span className="font-mono">{mcVersion}</span>
                    </div>
                  </div>

                  <Button size="sm" asChild>
                    <a href={downloadUrls[mcVersion]} target="_blank" rel="noopener noreferrer">Download</a>
                  </Button>
                </CardContent>
              </Card>
            ))} */}
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
