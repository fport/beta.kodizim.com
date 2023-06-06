const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    const { webpack } = options;
    Object.assign(config.experiments, { topLevelAwait: true });
    if (!options.isServer) {
      config.plugins.push(
          new NextFederationPlugin({
            name: 'kodizimMentorAndMentee',
            filename: 'static/chunks/remoteEntry.js',
            exposes: {
              "./Mentor": "./src/components/Mentor",
              "./Mentee": "./src/components/Mentee",
            },
            shared: {},
          }),
      );
    }

    return config;
  },
};