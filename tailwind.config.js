/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
       "client": ["var(--client-font)"]
      },
      colors:{
        "primary":"var(--primary)",
        "primaryGradient":"var(--primary-gradient)",
        "slate": "var(--slate)",
      },
      backgroundImage: {
        "hero-assets": "url('/images/assets.png')",
        "herobg": "url('/images/bg.jpg')",
        'pricingcard': 'linear-gradient(to bottom, #F0F9FF, #FFFFFF)',
        'pricingBtn':'linear-gradient(to left, #73C3FF 0%, #007EDD 100%)'
    },
   
    boxShadow:{
      product:"0px 8px 32px 0px rgba(0, 126, 221, 0.25)",
      pricingBtn:"0px 10px 32px 0px rgba(0, 126, 221, 0.25)"
    },
    dropShadow: {
      shopking: "4px 4px 15px rgba(245, 81, 20, 0.40)",
      foodking: "4px 4px 15px rgba(221, 49, 144, 0.40)",
      foodbank: "4px 4px 15px rgba(230, 59, 95, 0.40)",
      shopperzz:"4px 4px 15px rgba(255, 101, 1, 0.40)",
      foodscan: "4px 4px 15px rgba(50, 121, 255, 0.40)",
      foodappi: "4px 4px 15px rgba(0, 138, 127, 0.40)",
      posking:"4px 4px 15px rgba(255, 27, 1, 0.40)",
      quickpass: "4px 4px 15px rgba(72, 71, 235, 0.40)",
      trusthospital:"4px 4px 15px rgba(106, 198, 199, 0.40)",
      ihostel: "4px 4px 15px rgba(14, 58, 255, 0.40)",
      schoolexpress: "4px 4px 15px rgba(108, 219, 123, 0.40)",
      itest: "4px 4px 15px rgba(92, 115, 249, 0.40)",
  }
    },
  },
  plugins: [],
}

