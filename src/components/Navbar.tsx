import { FaDiscord } from "react-icons/fa";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <Button variant="outline" asChild size="lg">
        <a href="https://dupedb.net" target="_blank" rel="noopener noreferrer">
          DupeDB
        </a>
      </Button>
      <Button variant="outline" asChild size="lg">
        <a href="https://dupe.today" target="_blank" rel="noopener noreferrer">
          Docs
        </a>
      </Button>
      <Button variant="outline" asChild size="lg">
        <a
          href="https://discord.gg/dupes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDiscord className="text-[#5865f2]" />
          Discord
        </a>
      </Button>
      <Button asChild size="lg">
        <Link to="/mods">Mods</Link>
      </Button>
    </div>
  );
}
