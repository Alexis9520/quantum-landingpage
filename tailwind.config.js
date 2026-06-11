/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(40px, 8vw, 80.0052px)', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '400' }],
        'h2': ['clamp(36px, 4.5vw, 64px)', { lineHeight: '1.08', letterSpacing: '-0.02em', fontWeight: '400' }],
        'h3': ['28px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '400' }],
        'body': ['19.0921px', { lineHeight: '1.6', fontWeight: '400' }],
        'label': ['11px', { lineHeight: '1.4', letterSpacing: '0.08em', fontWeight: '400' }],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        q: {
          bg: '#0B0B0B',
          surface: '#151515',
          'surface-light': '#1E1E1E',
          purple: '#8A2BE2',
          'purple-dark': '#6A0DAD',
          'purple-light': '#A855F7',
          fuchsia: '#EC4899',
          'fuchsia-dark': '#BE185D',
          'fuchsia-light': '#F472B6',
          gold: '#F59E0B',
          'gold-dark': '#D97706',
          'gold-light': '#FCD34D',
          text: '#FFFFFF',
          'text-secondary': '#A1A1AA',
          'text-tertiary': '#71717A',
          border: '#2A1F3D',
          'border-light': '#3D2F5A',
          'btn-light': '#F5F5F5',
          'btn-dark': '#1E1E1E',
        },
      },
      borderRadius: {
        'card': '12px',
        'button': '8px',
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        'card': '0 4px 24px rgba(0,0,0,0.5)',
        'card-hover': '0 8px 32px rgba(138,43,226,0.15), 0 0 0 1px rgba(138,43,226,0.1)',
        'glow-purple': '0 0 60px rgba(138,43,226,0.4)',
        'glow-fuchsia': '0 0 40px rgba(236,72,153,0.3)',
        'glow-gold': '0 0 40px rgba(245,158,11,0.3)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "blob-rotate": {
          "0%": { transform: "rotate(0deg) scale(1)" },
          "50%": { transform: "rotate(180deg) scale(1.05)" },
          "100%": { transform: "rotate(360deg) scale(1)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.7" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "blob-rotate": "blob-rotate 20s linear infinite",
        "float": "float 4s ease-in-out infinite",
        "shimmer": "shimmer 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
