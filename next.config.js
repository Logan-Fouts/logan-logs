const isProd = process.env.NODE_ENV === "production";

module.exports = {
  assetPrefix: isProd ? "/logan-logs/" : "",
  basePath: isProd ? "/logan-logs" : "",
  trailingSlash: true,
};
