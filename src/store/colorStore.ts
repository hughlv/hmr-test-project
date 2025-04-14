import { create } from "zustand";
import { persist } from "zustand/middleware";
import { z } from "zod";

// Define the color schema using Zod
const ColorSchema = z.object({
  red: z.number().min(0).max(255),
  green: z.number().min(0).max(255),
  blue: z.number().min(0).max(255),
});

type ColorState = z.infer<typeof ColorSchema>;

interface ColorStore extends ColorState {
  setColor: (color: Partial<ColorState>) => void;
}

// Create the store
export const useColorStore = create<ColorStore>()(
  persist(
    (set) => ({
      red: 128,
      green: 128,
      blue: 128,
      setColor: (color) => {
        const validatedColor = ColorSchema.partial().parse(color);
        set((state) => ({ ...state, ...validatedColor }));
      },
    }),
    {
      name: "color-storage", // unique name for localStorage key
      version: 1, // version number for potential future migrations
    }
  )
);
