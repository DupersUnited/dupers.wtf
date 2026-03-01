import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { BrandLogo } from "./brand-logo";
import { Book02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function Navbar() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
      <Button variant="outline" asChild size="lg">
        <a href="https://dupedb.net" target="_blank" rel="noopener noreferrer">
          DupeDB
        </a>
      </Button>
      <Button variant="outline" asChild size="lg">
        <a href="https://dupe.today" target="_blank" rel="noopener noreferrer">
          <HugeiconsIcon icon={Book02Icon} />
          Docs
        </a>
      </Button>
      <Button variant="outline" asChild size="lg">
        <a
          href="https://discord.gg/dupes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BrandLogo platform="DISCORD" />
          Discord
        </a>
      </Button>
      <Button asChild size="lg">
        <Link to="/mods">
          Mods
        </Link>
      </Button>
    </div>
  );
}
