import { useState } from "react";
import { Check, Copy, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(jarUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — user can still click Download
    }
  };

  return (
    <div className="mb-2 flex flex-col gap-4 py-5 sm:flex-row sm:items-center">
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-sm font-medium break-all">
            {version}
          </span>
          <Badge>Latest</Badge>
          {mcVersion && (
            <Badge variant="outline" className="font-mono">
              MC {mcVersion}
            </Badge>
          )}
        </div>
        <p className="mt-1 text-sm text-muted-foreground">
          Recommended download.
        </p>
      </div>
      <div className="flex shrink-0 gap-2">
        <Button size="sm" asChild>
          <a href={jarUrl} target="_blank" rel="noopener noreferrer">
            <Download data-icon="inline-start" />
            Download
          </a>
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={copyLink}
          aria-label="Copy download link"
        >
          {copied ? (
            <Check data-icon="inline-start" />
          ) : (
            <Copy data-icon="inline-start" />
          )}
          {copied ? "Copied" : "Copy link"}
        </Button>
      </div>
    </div>
  );
}
