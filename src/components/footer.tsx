import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <footer className="mt-24">
      <Separator />
      <div className="flex flex-col gap-8 py-10 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <img
              src="/assets/favicon.png"
              alt="DupersUnited"
              className="size-8 rounded-lg border object-cover dark:invert"
            />
            <span className="font-mono text-sm font-bold tracking-widest">
              Dupers<span className="text-primary">United</span>
            </span>
          </div>
        </div>

        <div className="flex gap-12 text-sm">
          <div className="flex flex-col gap-2.5">
            <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
              Site
            </span>
            <Link to="/" className="text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <Link
              to="/mods"
              className="text-muted-foreground hover:text-foreground"
            >
              Mods
            </Link>
            <Link
              to="/dupersunited"
              className="text-muted-foreground hover:text-foreground"
            >
              DupersUnited mod
            </Link>
          </div>
          <div className="flex flex-col gap-2.5">
            <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
              Elsewhere
            </span>
            <a
              href="https://discord.gg/dupes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              Discord
            </a>
            <a
              href="https://dupedb.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              DupeDB
            </a>
            <a
              href="https://github.com/DupersUnited"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <Separator />
      <div className="flex py-6 text-center font-mono text-xs text-muted-foreground justify-between">
        <p>
          © {new Date().getFullYear()} DupersUnited
        </p>
        <p>
          Not affiliated with Mojang or Microsoft
        </p>
      </div>
    </footer>
  );
}
