import { LoaderCircle } from "lucide-react";

interface LoadingStateProps {
  isLoading: boolean;
  error: string;
  hasVersions: boolean;
}

export function LoadingState({ isLoading, error, hasVersions }: LoadingStateProps) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center gap-2 text-muted-foreground py-16">
        <LoaderCircle className="animate-spin" />
        Loading versions…
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-center text-muted-foreground py-16">
        Could not load versions from the repository. {error}
      </p>
    );
  }

  if (!hasVersions) {
    return (
      <p className="text-center text-muted-foreground py-16">
        No versions available yet.
      </p>
    );
  }

  return null;
}
