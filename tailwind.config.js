module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-black": "#333333",
        "theme-black-2": "#555555",
        "theme-gray": "#9d9d9c",
        "theme-gray-2": "#666666",
        "theme-gray-3": "#C3C3C3",
        "theme-gray-4": "#6C757D",
        "theme-gray-5": "#f1f2f3",
        "theme-yellow": "#f9b000",
        "theme-yellow-2": "#fbb900",
        "theme-blue": "#0067B8"
      },
      backgroundColor: {
        "theme-gray": "#9d9d9c",
        "theme-gray-2": "#666666",
        "theme-gray-3": "#333333",
        "theme-gray-4": "#F1F2F3",
        "theme-gray-5": "#C3C3C3",
        "theme-gray-6": "#555555",
        "theme-gray-7": "#F9F9F9",
        "theme-gray-8": "#DFDFDF",
        "theme-gray-9": "#E9EAEC",
        "theme-gray-10": "#6C757D",
        "theme-yellow": "#f9b000",
        "theme-yellow-2": "#fbb900",
        "theme-yellow-3": "#FFD765",
        "theme-green": "#00CE00",
        "theme-blue": "#0067B8",
        "user-input": "#f5f5f5",
        "farbe-beige": "#CBA863",
        "farbe-blue": "#285EC9",
        "farbe-green": "#1E9411",
        "farbe-orange": "#FF5700",
        "farbe-red": "#FF1414",
        "farbe-golden": "#E5A000",
        "farbe-brown": "#734614",
        "farbe-silver": "#F3F3F3",
        "farbe-yellow": "#FFEE00",
        "farbe-bronze": "#EBB957",
        "farbe-violet": "#991DCC",
        "farbe-gray": "#BCBCBC",
      },
      width: {
        49: "49%",
        55: "55%",
        300: '300px',
        200: '200px',
        224: '224px',
        250: '250px',
        280: '280px'
      },
      maxWidth: {
        'ag-container': '1140px'
      },
      fontSize: {
        15: '15px',
        8: '8px',
        9: '9px',
        10: '10px',
        11: '11px',
        13: '13px',
        14: '14px',
        22: '22px',
        40: '40px',
        50: '50px',
        100: '100px',
      },
      lineHeight: {
        50: '50px',
        100: '122px'
      },
      borderColor: {
        "theme-gray": "#808080",
        "theme-gray-2": "#C3C3C3",
        "theme-gray-3": "#555555",
        "theme-gray-4": "#F1F2F3",
        "theme-gray-5": "#707070",
        "theme-slate": "#cccccc",
        "footer-border": "#ffffffb3",
        "farbe-beige": "#CBA863",
        "farbe-blue": "#285EC9",
        "farbe-green": "#1E9411",
        "farbe-orange": "#FF5700",
        "farbe-red": "#FF1414",
        "farbe-golden": "#E5A000",
        "farbe-brown": "#734614",
        "farbe-silver": "#F3F3F3",
        "farbe-yellow": "#FFEE00",
        "farbe-bronze": "#EBB957",
        "farbe-violet": "#991DCC",
        "farbe-gray": "#BCBCBC",
      },
      fill: {
        "theme-yellow": "#f9b000",
        "theme-yellow-2": "#fbb900",
      },
      borderRadius: {
        10: '10px',
        20: '20px'
      },
      opacity: {
        15: '.15',
        3: '.03'
      },
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }
        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }
        xl0: { max: "1100px" },
        // => @media (max-width: 1279px) { ... }
        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }
        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }
        sm: { max: "539px" },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [
    require("tailwindcss-scoped-groups")({
      groups: ["one", "two"],
  }),
  ],
};
