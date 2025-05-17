// tailwind.config.js
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
  extend: {
    colors: {
      gold: {
        400: '#FFD700',
        500: '#FFC300',
      },
    },
  },
}
,
  plugins: [],
};
