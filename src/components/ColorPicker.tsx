"use client";

import { Slider } from "@/components/ui/slider";
import { useColorStore } from "@/store/colorStore";

export function ColorPicker() {
  const { red, green, blue, setColor } = useColorStore();

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-sm font-medium">Red</span>
          <span className="text-sm text-muted-foreground">{red}</span>
        </div>
        <Slider
          value={[red]}
          max={255}
          step={1}
          onValueChange={([value]) => setColor({ red: value })}
        />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-sm font-medium">Green</span>
          <span className="text-sm text-muted-foreground">{green}</span>
        </div>
        <Slider
          value={[green]}
          max={255}
          step={1}
          onValueChange={([value]) => setColor({ green: value })}
        />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-sm font-medium">Blue</span>
          <span className="text-sm text-muted-foreground">{blue}</span>
        </div>
        <Slider
          value={[blue]}
          max={255}
          step={1}
          onValueChange={([value]) => setColor({ blue: value })}
        />
      </div>
      <div
        className="h-12 w-full rounded-md border"
        style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}
      />
    </div>
  );
}
