import { Button } from "@/components/ui/button";
import { useTheme } from "./theme-provider";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button variant="outline" size="icon" onClick={toggle}>
      {theme === "light" ? (<Moon />) : (<Sun />)}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
