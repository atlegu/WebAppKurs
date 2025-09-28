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
				success: {
					DEFAULT: 'hsl(var(--success))',
					foreground: 'hsl(var(--success-foreground))'
				},
				warning: {
					DEFAULT: 'hsl(var(--warning))',
					foreground: 'hsl(var(--warning-foreground))'
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Financial Education Theme Colors
				financial: {
					blue: 'hsl(var(--financial-blue))',
					teal: 'hsl(var(--sustainable-teal))',
					green: 'hsl(var(--growth-green))',
					amber: 'hsl(var(--professional-amber))',
					charcoal: 'hsl(var(--warm-charcoal))'
				},
				// ESG Theme Colors
				esg: {
					environmental: 'hsl(var(--esg-environmental))',
					social: 'hsl(var(--esg-social))',
					governance: 'hsl(var(--esg-governance))'
				},
				// Module-specific color scales
				module: {
					1: {
						50: 'hsl(210 100% 95%)',
						100: 'hsl(210 100% 85%)',
						200: 'hsl(210 100% 75%)',
						500: 'hsl(210 100% 50%)',
						600: 'hsl(210 100% 40%)',
						700: 'hsl(210 100% 30%)',
						900: 'hsl(210 100% 15%)'
					},
					2: {
						50: 'hsl(140 60% 95%)',
						100: 'hsl(140 60% 85%)',
						200: 'hsl(140 60% 75%)',
						500: 'hsl(140 60% 50%)',
						600: 'hsl(140 60% 40%)',
						700: 'hsl(140 60% 30%)',
						900: 'hsl(140 60% 15%)'
					},
					3: {
						50: 'hsl(35 85% 95%)',
						100: 'hsl(35 85% 85%)',
						200: 'hsl(35 85% 75%)',
						500: 'hsl(35 85% 50%)',
						600: 'hsl(35 85% 40%)',
						700: 'hsl(35 85% 30%)',
						900: 'hsl(35 85% 15%)'
					},
					4: {
						50: 'hsl(260 60% 95%)',
						100: 'hsl(260 60% 85%)',
						200: 'hsl(260 60% 75%)',
						500: 'hsl(260 60% 50%)',
						600: 'hsl(260 60% 40%)',
						700: 'hsl(260 60% 30%)',
						900: 'hsl(260 60% 15%)'
					},
					5: {
						50: 'hsl(340 60% 95%)',
						100: 'hsl(340 60% 85%)',
						200: 'hsl(340 60% 75%)',
						500: 'hsl(340 60% 50%)',
						600: 'hsl(340 60% 40%)',
						700: 'hsl(340 60% 30%)',
						900: 'hsl(340 60% 15%)'
					},
					6: {
						50: 'hsl(180 50% 95%)',
						100: 'hsl(180 50% 85%)',
						200: 'hsl(180 50% 75%)',
						500: 'hsl(180 50% 50%)',
						600: 'hsl(180 50% 40%)',
						700: 'hsl(180 50% 35%)',
						900: 'hsl(180 50% 15%)'
					}
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
