const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
    webpack(config, options) {
        if (!options.isServer) {
            config.plugins.push(
                new NextFederationPlugin({
                    name: 'composer',
                    filename: 'static/chunks/remoteEntry.js',
                    remotes: {
                        kodizimEvents: 'kodizimEvents@http://localhost:3001/_next/static/chunks/remoteEntry.js',
                        kodizimDigitalGarden: 'kodizimDigitalGarden@http://localhost:3002/_next/static/chunks/remoteEntry.js',
                        kodizimFreelance: 'kodizimFreelance@http://localhost:3003/_next/static/chunks/remoteEntry.js',
                        kodizimMentorAndMentee: 'kodizimMentorAndMentee@http://localhost:3004/_next/static/chunks/remoteEntry.js',
                    },
                    shared: {},
                }),
            );
        }

        return config;
    },
};


