import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface McVersionSelectorProps {
  versions: string[];
  selectedVersion: string;
  onVersionChange: (version: string) => void;
  total: number;
}

export function McVersionSelector({
  versions,
  selectedVersion,
  onVersionChange,
  total,
}: McVersionSelectorProps) {
  if (versions.length === 0) return null;

  return (
    <div className="mb-2 flex items-center justify-between gap-3">
      <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
        {total} {total === 1 ? "build" : "builds"}
      </p>
      <div className="flex items-center gap-2">
        <label
          htmlFor="mc-select"
          className="sr-only text-sm text-muted-foreground sm:not-sr-only sm:block"
        >
          Minecraft
        </label>
        <Select value={selectedVersion} onValueChange={onVersionChange}>
          <SelectTrigger id="mc-select" className="w-40 font-mono">
            <SelectValue placeholder="Select version" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {versions.length > 1 && (
                <SelectItem value="all">All versions</SelectItem>
              )}
              {versions.map((mc) => (
                <SelectItem key={mc} value={mc}>
                  {mc}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
