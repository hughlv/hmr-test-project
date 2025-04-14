"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";

export function VolumeControl() {
  const [volume, setVolume] = useState<number[]>([50]);

  const handleVolumeChange = (newValue: number[]) => {
    setVolume(newValue);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-medium">Volume Control</h3>
        <span className="text-sm text-muted-foreground">{volume[0]}%</span>
      </div>
      <Slider
        value={volume}
        onValueChange={handleVolumeChange}
        max={100}
        step={1}
      />
      <p className="text-xs text-muted-foreground">
        This is a client component with state to test HMR with the Slider.
      </p>
    </div>
  );
}
