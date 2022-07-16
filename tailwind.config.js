module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF480E",
        secondary: "#d0d0d0",
        tertiary: "#757575",
        salmon: "#FFD3C7",
      },
      borderRadius: {
        lg: "10px",
      },
      fontSize: {
        xxs: "13px", //p
        xs: "14px", //p
        sm: "16px", //h5
        lg: "18px", //h4
        xl: "22px", //h3
        "2xl": "34px", //h2
        "3xl": "42px",
      },
      fontWeight: {
        semibold: 600,
        medium: 500,
      },
    },
  },
  plugins: [],
};
