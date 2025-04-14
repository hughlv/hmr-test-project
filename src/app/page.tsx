import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { VolumeControl } from "@/components/VolumeControl";
import { ColorPicker } from "@/components/ColorPicker";
import { SelectDemo } from "@/components/SelectDemo";

export default function RootPage() {
  redirect("/en");
}
