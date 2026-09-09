import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { VersionInfo } from "@/lib/maven";

interface VersionCardProps {
  versionInfo: VersionInfo;
  mcVersion: string;
  isRelease: boolean;
}

export function VersionCard({
  versionInfo,
  mcVersion,
  isRelease,
}: VersionCardProps) {
  return (
    <div className="flex flex-col gap-4 py-4 sm:flex-row sm:items-center">
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-sm break-all">
            {versionInfo.version}
          </span>
          {isRelease && <Badge variant="secondary">Release</Badge>}
          {mcVersion && (
            <Badge variant="outline" className="font-mono">
              MC {mcVersion}
            </Badge>
          )}
        </div>
      </div>
      <div className="flex shrink-0 gap-2">
        <Button size="sm" variant="outline" asChild>
          <a href={versionInfo.jarUrl} target="_blank" rel="noopener noreferrer">
            <Download data-icon="inline-start" />
            .jar
          </a>
        </Button>
        <Button size="sm" variant="ghost" asChild>
          <a href={versionInfo.pomUrl} target="_blank" rel="noopener noreferrer">
            .pom
          </a>
        </Button>
      </div>
    </div>
  );
}
