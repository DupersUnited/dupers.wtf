import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { Moon02Icon, SunIcon } from "@hugeicons/core-free-icons";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button variant="outline" size="icon" className="size-12" onClick={toggle}>
      {theme === "light" ? (
        <HugeiconsIcon icon={Moon02Icon} />
      ) : (
        <HugeiconsIcon icon={SunIcon} />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
