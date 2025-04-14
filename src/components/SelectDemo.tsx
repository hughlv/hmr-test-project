"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

const FRAMEWORKS = [
  { value: "next", label: "Next.js" },
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "svelte", label: "Svelte" },
  { value: "angular", label: "Angular" },
];

export function SelectDemo() {
  const [selectedFramework, setSelectedFramework] = useState<string>("");

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Select value={selectedFramework} onValueChange={setSelectedFramework}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a framework" />
          </SelectTrigger>
          <SelectContent>
            {FRAMEWORKS.map((framework) => (
              <SelectItem key={framework.value} value={framework.value}>
                {framework.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <span className="text-sm font-medium">
          Selected: {selectedFramework || "None"}
        </span>
      </div>

      <Card>
        <CardContent className="p-4">
          <h3 className="font-medium mb-2">Framework Details</h3>
          <p className="text-sm text-muted-foreground">
            {selectedFramework
              ? `You selected ${
                  FRAMEWORKS.find((f) => f.value === selectedFramework)?.label
                }`
              : "Please select a framework to see details"}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
