import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";
import { FaGithub } from "react-icons/fa";
import { HugeiconsIcon } from "@hugeicons/react";
import { LinkSquare01Icon } from "@hugeicons/core-free-icons";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { DUText } from "@/components/DUText";
import type { Mod } from "@/lib/types";

const mods: Mod[] = [
  { name: "Fabric API", description: "Essential hooks for modding with Fabric.", iconUrl: "https://cdn.modrinth.com/data/P7dR8mSH/icon.png", downloadUrl: "https://modrinth.com/mod/fabric-api#download", sourceUrl: "https://github.com/FabricMC/fabric-api" },
  { name: "Meteor Client", description: "The base client for Minecraft utility mods. Required for the DupersUnited Addon.", iconUrl: "https://meteorclient.com/icon.png", downloadUrl: "https://meteorclient.com/", sourceUrl: "https://github.com/MeteorDevelopment/meteor-client" },
  { name: "UI Util", description: "Manipulate GUIs, close them without packets, save and load them, and more.", iconUrl: "https://ui-utils.com/content/ui-utils.png", downloadUrl: "https://www.curseforge.com/minecraft/mc-mods/uiutils", sourceUrl: "https://github.com/Coderx-Gamer/ui-utils" },
  { name: "DupersUnited Addon", description: "A Meteor addon with useful modules and commands for dupe hunting.", iconUrl: "/assets/logo.png", downloadUrl: "/public-addon", sourceUrl: "https://github.com/DupersUnited/du-public-addon", official: true, disabled: true },
  { name: "Pay Everyone Mod", description: "Useful for mass-paying players to distribute money.", iconUrl: "https://cdn.modrinth.com/data/EJO20Qp6/02887dbd66f1009ffaf3fb3acabf990c49ec6198_96.webp", downloadUrl: "https://modrinth.com/mod/payeveryone#download", sourceUrl: "https://github.com/aurickk/Pay-Everyone" },
  { name: "PathMind", description: "Used to automate tasks with a simple node system!", iconUrl: "https://cdn.modrinth.com/data/GX0d78rL/c059e4980c36c5f72dfa6c0832ba52d13b2d3304.png", downloadUrl: "https://modrinth.com/mod/pathmind#download", sourceUrl: "https://github.com/soymods/pathmind" },
];

export default function Mods() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-5xl mx-auto px-8 py-24">
        <Link to="/" className="text-muted-foreground hover:text-foreground text-sm mb-8 inline-block">
          ← Back to Home
        </Link>

        <header className="text-center mb-24">
          <DUText />
          
          <p className="text-sm uppercase font-mono text-muted-foreground mb-6">
            Mods for Duping
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-md mx-auto">
            Everything you need to start dupe hunting in Minecraft.
          </p>

          <Navbar />
        </header>

        <section>
          <h2 className="text-sm uppercase font-mono text-muted-foreground text-center mb-12">Essential Mods</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {mods.map((mod) => (
              <Card key={mod.name} className={`bg-card border-border ${mod.official ? "border-primary" : ""}`}>
                <CardContent className="flex gap-4 p-4">
                  <img src={mod.iconUrl} alt={mod.name} className="size-16 rounded-lg object-cover border border-border shrink-0" />
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className={`font-medium ${mod.disabled ? 'text-muted-foreground' : 'text-card-foreground'}`}>{mod.name}</h3>
                      {mod.official && (
                        <span className="text-[10px] uppercase tracking-wider bg-primary/10 text-primary px-2 py-0.5 rounded-full font-mono">
                          Official
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{mod.description}</p>
                    
                    <div className="flex gap-2">
                      <Button size="sm" asChild={!mod.disabled} disabled={mod.disabled}>
                        <a href={mod.disabled ? "#" : mod.downloadUrl} target={mod.downloadUrl.startsWith("/") ? "_self" : "_blank"} rel="noopener noreferrer">Download</a>
                      </Button>
                      
                      {mod.sourceUrl && (
                        <Button size="sm" variant="outline" asChild={!mod.disabled} disabled={mod.disabled}>
                          <a href={mod.disabled ? "#" : mod.sourceUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                            <FaGithub />
                            Source
                            <HugeiconsIcon icon={LinkSquare01Icon} />
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
