import { LoaderCircle } from "lucide-react";

interface LoadingStateProps {
  isLoading: boolean;
  error: string;
  hasVersions: boolean;
}

export function LoadingState({ isLoading, error, hasVersions }: LoadingStateProps) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center gap-2 py-12 text-sm text-muted-foreground">
        <LoaderCircle className="animate-spin" data-icon="inline-start" />
        Pulling builds from the Maven repo…
      </div>
    );
  }

  if (error) {
    return (
      <p className="py-12 text-center text-sm text-muted-foreground">
        Could not load versions from the repository. {error}
      </p>
    );
  }

  if (!hasVersions) {
    return (
      <p className="py-12 text-center text-sm text-muted-foreground">
        No versions available yet.
      </p>
    );
  }

  return null;
}
