module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["randomuser.me"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    });

    return config;
  },
};
