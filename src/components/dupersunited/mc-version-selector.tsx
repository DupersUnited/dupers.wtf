import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GitCompareArrows } from "lucide-react";

interface McVersionSelectorProps {
  versions: string[];
  selectedVersion: string;
  onVersionChange: (version: string) => void;
}

export function McVersionSelector({
  versions,
  selectedVersion,
  onVersionChange,
}: McVersionSelectorProps) {
  if (versions.length === 0) return null;

  return (
    <div className="flex flex-col items-center gap-2 mb-8">
      <label
        htmlFor="mc-select"
        className="text-xs font-mono uppercase tracking-wider text-muted-foreground"
      >
        Filter by Minecraft version
      </label>
      <Select value={selectedVersion} onValueChange={onVersionChange}>
        <SelectTrigger
          id="mc-select"
          className="w-56 font-mono"
        >
          <GitCompareArrows />
          <SelectValue placeholder="Select version" />
        </SelectTrigger>
        <SelectContent>
          {versions.length > 1 && (
            <SelectItem value="all">All versions</SelectItem>
          )}
          {versions.map((mc) => (
            <SelectItem key={mc} value={mc}>
              {mc}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
