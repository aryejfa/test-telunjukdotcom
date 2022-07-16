module.exports = {
  i18n: {
    // providing the locales supported by your application
    locales: ["default", "en"],
    //  default locale used when the non-locale paths are visited
    defaultLocale: "default",
    localeDetection: false,
  },
  trailingSlash: true,
  env: {
    dns_v1: process.env.API_WEB,
    api_v1: process.env.API_V1,
    api_ext_v1: process.env.API_EXT,
  },
  images: {
    domains: ["testnet123.com"],
  },
};
