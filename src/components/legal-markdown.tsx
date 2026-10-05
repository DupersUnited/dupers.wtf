import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";

const components: Components = {
  h1: ({ children }) => (
    <h1 className="text-3xl font-bold md:text-4xl">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="pt-8 text-xl font-semibold">{children}</h2>
  ),
  p: ({ children }) => (
    <p className="text-sm leading-7 text-muted-foreground">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc space-y-2 pl-6 text-sm leading-7 text-muted-foreground marker:text-muted-foreground">
      {children}
    </ul>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),
  code: ({ children }) => (
    <code className="rounded border bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">
      {children}
    </code>
  ),
  a: ({ children, href }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-foreground underline underline-offset-4"
    >
      {children}
    </a>
  ),
  // realistically, we should probably add more components here for like future proofing but this is good enough for now as rushing to release.
};

export function LegalMarkdown({ source }: { source: string }) {
  return <ReactMarkdown components={components}>{source}</ReactMarkdown>;
}
