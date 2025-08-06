/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
  	screens: {
  		mobile: '375px',
  		xlmobile: '480px',
  		tablet: '640px',
  		xltablet: '768px',
  		laptop: '1024px',
  		desktop: '1440px'
  	},
  	extend: {
  		fontFamily: {
  			satoshi: [
  				'Satoshi',
  				'sans-serif'
  			],
  			inter: [
  				'Inter',
  				'sans-serif'
  			]
  		},
  		fontSize: {
  			heroMobile: [],
  			heroTab: [],
  			heroDesktop: [
  				'52px',
  				'52px'
  			]
  		},
  		colors: {
  			deepBlue1: '#001968',
  			deepblue100: '#0029AC',
  			deepBlue2: '#2656F0',
  			deepBlue3: '#698DFF',
  			deepBlue4: '#A9BDFF',
  			deepBlue5: '#E9EEFF',
  			mintGreen2: '#2B4840',
  			mintGreen3: '#66998C',
  			mintGreen4: '#87C2B3',
  			mintGreen100: '#ABEBDA',
  			mintGreen5: '#F1F8F6',
  			slateGray100: '#3C4142',
  			slateGray2: '#5E6364',
  			slateGray3: '#A6A8A8',
  			slateGray4: '#CACACA',
  			slateGray5: '#ECECEC',
  			slateGray500: '#667085',
  			slateGray50: '#F9FAFB',
  			lightGray2: '#4B4343',
  			lightGray3: '#6D6464',
  			lightGray4: '#8F8787',
  			lightGray5: '#B1ACAC',
  			lightGray100: '#D3D3D3',
  			lightGray6: '#F5F5F5',
  			softOrange2: '#61482F',
  			softOrange3: '#94704E',
  			softOrange4: '#C79B71',
  			softOrange100: '#FAC898',
  			softOrange5: '#FFE3C8',
  			softOrange6: '#FFFAF5',
  			brandWhite: '#F4F7FF',
  			brandBlack: '#212121',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		rotate: {
  			'11': '11deg'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	},
  	keyframes: {
  		slide: {
  			from: {
  				transform: 'translateX(0)'
  			},
  			to: {
  				transform: 'translateX(-100%)'
  			}
  		}
  	},
  	animation: {
  		'hero-slide': 'slide 80s linear infinite'
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
