import { Link, NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { BrandLogo } from "./brand-logo";
import { PartnerPlatform } from "../lib/types";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

const LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/mods", label: "Mods", end: true },
  { to: "/dupersunited", label: "DupersUnited", end: true },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4 md:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <img
            src="/assets/favicon.png"
            alt="DupersUnited"
            className="size-9 rounded-lg border object-cover dark:invert"
          />
          <span className="font-mono text-sm font-bold tracking-widest">
            DUPERS<span className="text-primary">UNITED</span>
          </span>
        </Link>

        <nav className="ml-4 hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <Button key={l.to} variant="ghost" size="sm" asChild>
              <NavLink
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  cn(isActive && "bg-muted text-foreground")
                }
              >
                {l.label}
              </NavLink>
            </Button>
          ))}
          <Button variant="ghost" size="sm" asChild>
            <a
              href="https://dupedb.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              DupeDB
            </a>
          </Button>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex">
            <a
              href="https://discord.gg/dupes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BrandLogo platform={PartnerPlatform.DISCORD} />
              Join the Discord
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </div>

      {/* mobile nav row */}
      <nav className="flex items-center gap-1 overflow-x-auto border-t px-4 py-2 md:hidden">
        {LINKS.map((l) => (
          <Button key={l.to} variant="ghost" size="sm" asChild>
            <NavLink
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                cn(isActive && "bg-muted text-foreground")
              }
            >
              {l.label}
            </NavLink>
          </Button>
        ))}
        <Button variant="ghost" size="sm" asChild>
          <a href="https://dupedb.net" target="_blank" rel="noopener noreferrer">
            DupeDB
          </a>
        </Button>
      </nav>
    </header>
  );
}
