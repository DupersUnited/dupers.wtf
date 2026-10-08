import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { LegalMarkdown } from "@/components/legal-markdown";
import terms from "@/content/terms.md?raw";
import privacy from "@/content/privacy.md?raw";
import { useSEO } from "@/lib/seo";

function LegalLayout({
  source,
  other,
}: {
  source: string;
  other: { to: string; label: string };
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="mx-auto max-w-3xl px-4 pt-14 md:px-8 md:pt-20">
        <article className="flex flex-col gap-4">
          <LegalMarkdown source={source} />
        </article>
        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <Button variant="outline" asChild>
            <Link to="/">
              <ArrowLeft data-icon="inline-start" />
              Back to home
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to={other.to}>
              {other.label}
              <ArrowRight data-icon="inline-end" />
            </Link>
          </Button>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export function TermsPage() {
  useSEO("DupersUnited Mod Terms of Service", "DupersUnited Terms of Service.", "/terms");
  return (
    <LegalLayout source={terms} other={{ to: "/privacy", label: "Privacy Policy" }} />
  );
}

export function PrivacyPage() {
  useSEO("DupersUnited Mod Privacy Policy", "DupersUnited Privacy Policy.", "/privacy");
  return (
    <LegalLayout source={privacy} other={{ to: "/terms", label: "Terms of Service" }} />
  );
}
