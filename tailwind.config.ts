import type { Config } from 'tailwindcss'
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      transitionProperty: {
        'max-height': 'max-height',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'bluePrimary': '#60C0B5',
        'sandSecondary': '#FCE09B',
        'redAccent': '#e8360e',
        'brownTertiary': '#463715',
        'lightBrown': '#816729',
        'expandedSection': '#186F6531'
    },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#463715",
              foreground: "#000000",
            },
            secondary: {
              DEFAULT: "#816729",
              foreground: "#000000",
            },
            success: {
              DEFAULT: "#186F6531",
              foreground: "#000000",
            },
            warning: {
              DEFAULT: "#60C0B5",
              foreground: "#000000",
            },
            danger: {
              DEFAULT: "#e8360e",
              foreground: "#000000",
            },
            focus: "#BEF264",
          },
        },
      },
    })
  ]
}
export default config
