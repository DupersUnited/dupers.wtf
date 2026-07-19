import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { VersionInfo } from "@/lib/maven";
import { Box, Download, ExternalLink } from "lucide-react";

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
    <Card className="bg-card border-border hover:border-foreground/20 transition-colors">
      <CardContent className="flex flex-col sm:flex-row sm:items-center gap-4 p-4">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/40">
          <Box />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-medium text-card-foreground">
              {versionInfo.version}
            </h3>
            {isRelease && (
              <Badge variant="secondary" className="font-mono text-xs">
                Release
              </Badge>
            )}
          </div>
          <p className="text-muted-foreground text-sm">
            {mcVersion && <>Minecraft {mcVersion}</>}
          </p>
        </div>
        <div className="flex gap-2">
          <Button size="sm" asChild>
            <a
              href={versionInfo.jarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              <Download />
              Download
            </a>
          </Button>
          <Button size="sm" variant="outline" asChild>
            <a
              href={versionInfo.pomUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              .pom
              <ExternalLink />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
