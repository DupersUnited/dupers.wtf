import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Box, Download, ExternalLink } from "lucide-react";

interface LatestVersionCardProps {
  version: string;
  mcVersion: string;
  jarUrl: string;
}

export function LatestVersionCard({
  version,
  mcVersion,
  jarUrl,
}: LatestVersionCardProps) {
  return (
    <Card className="bg-card border-border ring-2 ring-yellow-400 mb-4">
      <CardContent className="flex flex-col md:flex-row md:items-center gap-4 p-4">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-yellow-400/40 bg-yellow-400/10">
          <Box />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-medium text-card-foreground text-lg">
              {version}
            </h3>
            <Badge className="font-mono text-xs">Latest</Badge>
          </div>
          <p className="text-muted-foreground text-sm">
            {mcVersion
              ? `Minecraft ${mcVersion} · Recommended download`
              : "Recommended download"}
          </p>
        </div>
        <div className="flex gap-2">
          <Button size="sm" asChild>
            <a
              href={jarUrl}
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
              href="https://github.com/DupersUnited/dupersunited-mod"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              Source
              <ExternalLink />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
