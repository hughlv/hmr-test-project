"use client";

import { useMediaQuery } from "react-responsive";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

export function ResponsiveDemo() {
  const [count, setCount] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Button onClick={increment}>Increment</Button>
        <span className="text-sm font-medium">Count: {count}</span>
      </div>

      <div
        className="grid gap-4"
        style={{
          gridTemplateColumns: isMobile
            ? "1fr"
            : isTablet
            ? "repeat(2, 1fr)"
            : "repeat(3, 1fr)",
        }}
      >
        <Card>
          <CardContent className="p-4">
            <h3 className="font-medium mb-2">Device Type</h3>
            <p className="text-sm text-muted-foreground">
              {isMobile ? "Mobile" : isTablet ? "Tablet" : "Desktop"}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h3 className="font-medium mb-2">Screen Width</h3>
            <p className="text-sm text-muted-foreground">
              {isMobile ? "< 768px" : isTablet ? "768px - 1023px" : "> 1024px"}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h3 className="font-medium mb-2">Layout</h3>
            <p className="text-sm text-muted-foreground">
              {isMobile
                ? "Single Column"
                : isTablet
                ? "Two Columns"
                : "Three Columns"}
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="text-sm text-muted-foreground">
        <p>Try resizing your browser window to see the layout change.</p>
        <p>The count state should persist during HMR updates.</p>
      </div>
    </div>
  );
}
