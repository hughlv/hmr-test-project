"use client";

import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export function IconSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Track mount state to prevent hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center space-x-2">
        <div className="inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full" />
        <span className="text-sm font-medium">Loading...</span>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="theme-mode"
        checked={theme === "dark"}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
      />
      <label
        htmlFor="theme-mode"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {theme === "dark" ? (
          <div className="flex items-center gap-2">
            <Moon className="h-4 w-4" />
            <span>Dark Mode</span>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Sun className="h-4 w-4" />
            <span>Light Mode</span>
          </div>
        )}
      </label>
    </div>
  );
}
