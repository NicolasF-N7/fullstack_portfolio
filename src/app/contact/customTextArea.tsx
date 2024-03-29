// MyInput.tsx
import {extendVariants, Textarea} from "@nextui-org/react";

export const CustomBorderTextArea = extendVariants(Textarea, {
  variants: { // <- modify/add variants
    color: {
      stone: { // <- add a new color variant
        inputWrapper: [
          "bg-transparent",
          "transition-colors",
          "data-[hover=true]:bg-secondary/5",
          "group-data-[focus=true]:bg-secondary",
          "text-black",
          "border-medium",
          "border-default-400",
          "data-[hover=true]:border-default-600",
          "group-data-[focus=true]:border-default",
        ],
      },
    },
  },
  defaultVariants: {
    color: "stone",
    radius: "none",
    textSize: "base",
    removeLabel: "true",
    labelPlacement: "inside",
    disableAnimation: "false",
  },
});