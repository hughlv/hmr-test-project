"use client";

import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";

export function ColorPicker() {
  const [red, setRed] = useState<number[]>([128]);
  const [green, setGreen] = useState<number[]>([128]);
  const [blue, setBlue] = useState<number[]>([128]);
  const [color, setColor] = useState<string>("#808080");

  useEffect(() => {
    const hexColor = `#${red[0].toString(16).padStart(2, "0")}${green[0]
      .toString(16)
      .padStart(2, "0")}${blue[0].toString(16).padStart(2, "0")}`;
    setColor(hexColor);
  }, [red, green, blue]);

  return (
    <div className="space-y-6">
      <h3 className="text-sm font-medium">Color Picker</h3>

      <div
        className="w-full h-20 rounded-md"
        style={{ backgroundColor: color }}
      ></div>

      <div className="space-y-5">
        <div className="space-y-2">
          <div className="flex justify-between">
            <label className="text-xs font-medium text-red-500">Red</label>
            <span className="text-xs text-muted-foreground">{red[0]}</span>
          </div>
          <Slider
            value={red}
            onValueChange={setRed}
            max={255}
            step={1}
            className="data-[orientation=horizontal]:h-4"
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <label className="text-xs font-medium text-green-500">Green</label>
            <span className="text-xs text-muted-foreground">{green[0]}</span>
          </div>
          <Slider
            value={green}
            onValueChange={setGreen}
            max={255}
            step={1}
            className="data-[orientation=horizontal]:h-4"
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <label className="text-xs font-medium text-blue-500">Blue</label>
            <span className="text-xs text-muted-foreground">{blue[0]}</span>
          </div>
          <Slider
            value={blue}
            onValueChange={setBlue}
            max={255}
            step={1}
            className="data-[orientation=horizontal]:h-4"
          />
        </div>
      </div>

      <div className="text-xs text-muted-foreground">Color: {color}</div>
    </div>
  );
}
