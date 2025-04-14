"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function ToastDemo() {
  const showDefaultToast = () => {
    toast("Event has been created", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
    });
  };

  const showSuccessToast = () => {
    toast.success("Success!", {
      description: "Your changes have been saved.",
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    });
  };

  const showDestructiveToast = () => {
    toast.error("Error!", {
      description: "Your changes could not be saved.",
    });
  };

  const showPromiseToast = () => {
    toast.promise(new Promise((resolve) => setTimeout(resolve, 2000)), {
      loading: "Loading...",
      success: "Success!",
      error: "Error!",
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Button onClick={showDefaultToast} variant="outline">
          Show Toast
        </Button>
        <Button onClick={showSuccessToast} variant="default">
          Success
        </Button>
        <Button onClick={showDestructiveToast} variant="destructive">
          Error
        </Button>
        <Button onClick={showPromiseToast} variant="secondary">
          Promise
        </Button>
      </div>
    </div>
  );
}
