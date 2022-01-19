
module.exports = {
    prefix: 'tw-',
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                electric: '#db00ff',
                ribbon: '#0047ff',
                // Create defult color
                primary: {
                    'light-blue': '#009DDE',
                    'dark-blue': '#26285E',
                    'ptt-blue': '#007EB5',
                    blue: '#3DAEE3',
                    red: '#F43F5E',
                    green: '#14B8A6',
                    yellow: '#FCD34D',
                    gray: '#6B7280',
                    black: '#111827',
                    glass: 'rgba(255,255,255,0.1)'
                },

                // Second: {
                //     'black':
                // }

                highlight: {
                    blue: '#F0F9FF',
                    red: '#FFF1F2',
                    green: '#F0FDFA',
                    yellow: '#F59E0B',
                },

                hover: {
                    blue: '#0369A1',
                    red: '#BE123C',
                    green: '#0F766E',
                    yellow: '#F59E0B',
                    gray: '#4B5563',
                    glass: 'rgba(255,255,255,0.4)'
                }
            },
        boxShadow: { 
            base: '0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.04)',
            'card-hover':'0px 0px 8px #3DAEE3',
        }
        },
},
  plugins: [],
}
