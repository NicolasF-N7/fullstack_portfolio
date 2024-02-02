import type { Config } from 'tailwindcss'
import {nextui} from "@nextui-org/react";

// Dark blue: #008799
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
        'pageBackground': '#fff9cb',
        'lightBrown': '#fde18a',# TO DELETE
        'expandedSection': '#A1C18171', # ALSO
        'charcoal': '#233D4D',
        'pumpkin': '#FE7F2D',
        'sunglow': '#FCCA46',
        'softSunglow': '#fff9cb',
        'sunglowBgSection': '#fde18a',
        'olivine': '#A1C181',
        'zomp': '#619B8A',

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
            default: {
              DEFAULT: "#FE7F2D",
            },
            primary: {
              DEFAULT: "#233D4D",
              foreground: "#000000",
            },
            secondary: {
              DEFAULT: "#186F6531",
              foreground: "#000000",
            },
            success: {
              DEFAULT: "#186F6531",
              foreground: "#000000",
            },
            warning: {
              DEFAULT: "#FCCA46",
              foreground: "#000000",
            },
            danger: {
              DEFAULT: "#ff9759",
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
