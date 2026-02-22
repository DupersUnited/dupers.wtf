import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Moon02Icon,
  Sun02Icon,
} from "@hugeicons/core-free-icons";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button variant="outline" size="icon" className="size-12" onClick={toggle}>
      <HugeiconsIcon icon={theme === "light" ? Moon02Icon : Sun02Icon} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
