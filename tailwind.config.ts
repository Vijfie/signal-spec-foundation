import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				
				/* BEURSADVIES NIEUWE KLEURENPALET */
				/* Volgens nieuwe developer briefing - exact implementatie */
				
				// Primary colors - hoofdkleuren voor merk
				'primary-navy': {
					DEFAULT: 'hsl(var(--primary-navy))',
					foreground: 'hsl(var(--primary-white))'
				},
				'primary-gold': {
					DEFAULT: 'hsl(var(--primary-gold))',
					foreground: 'hsl(var(--primary-white))'
				},
				'primary-white': {
					DEFAULT: 'hsl(var(--primary-white))',
					foreground: 'hsl(var(--text-dark))'
				},
				
				// Supporting colors - ondersteunende kleuren
				'growth-green': {
					DEFAULT: 'hsl(var(--growth-green))',
					foreground: 'hsl(var(--primary-white))'
				},
				'tech-blue': {
					DEFAULT: 'hsl(var(--tech-blue))',
					foreground: 'hsl(var(--primary-white))'
				},
				'text-dark': 'hsl(var(--text-dark))',
				'text-light': 'hsl(var(--text-light))',
				'border-light': 'hsl(var(--border-light))',
				'bg-cool-gray': 'hsl(var(--bg-cool-gray))',
				
				// Status colors - feedback kleuren
				'positive-green': 'hsl(var(--positive-green))',
				'warning-red': 'hsl(var(--warning-red))',
				
				// Hover states - voor interactie feedback
				'gold-hover': 'hsl(var(--gold-hover))',
				'navy-hover': 'hsl(var(--navy-hover))',
				
				// Compatibility - voor bestaande componenten
				navy: {
					DEFAULT: 'hsl(var(--navy))',
					foreground: 'hsl(var(--navy-foreground))'
				},
				success: {
					DEFAULT: 'hsl(var(--success))',
					foreground: 'hsl(var(--success-foreground))'
				},
				warning: {
					DEFAULT: 'hsl(var(--warning))',
					foreground: 'hsl(var(--warning-foreground))'
				},
				
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			boxShadow: {
				'cta': 'var(--shadow-cta)',
				'cta-hover': 'var(--shadow-cta-hover)',
				'card': 'var(--shadow-card)',
				'hover': 'var(--shadow-hover)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;