const isProd = process.env.NODE_ENV === "production";

module.exports = {
  basePath: isProd ? "/logan-logs" : "",
  assetPrefix: isProd ? "/logan-logs" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/logan-logs" : "",
  },
};
