// MyInput.tsx
import {extendVariants, Select} from "@nextui-org/react";

export const CustomBorderSelect = extendVariants(Select, {
  variants: { // <- modify/add variants
    color: {
      stone: { // <- add a new color variant
        trigger: [
          "bg-transparent",
          "transition-colors",
          "data-[hover=true]:bg-secondary/5",
          "group-data-[focus=true]:bg-secondary",
          "border-medium",
          "text-black",
          "border-default-400",
          "data-[hover=true]:border-default-600",
          "data-[focus=true]:border-default",
          "data-[open=true]:border-default",
        ],
        listboxWrapper: [
          "bg-transparent",
        ],
        popoverContent: [
          "bg-default",
          "rounded-none",
          "first-rounded-none",
          "text-white",
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