const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, '../../tsconfig.base.json'), [
  /* mapped paths to share */
]);

module.exports = {
  output: {
    uniqueName: 'mfe',
    publicPath: "auto"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      // For remotes (please adjust)
      name: 'mfe',
      filename: 'remoteEntry.js',
      exposes: {
        './Module': './libs/deal-configurator-mfe/feature-dealcard/src/index.ts',
      },
      shared: {
        "@angular/core": { singleton: true, strictVersion: true, requiredVersion: "^12.0.0" },
        "@angular/common": { singleton: true, strictVersion: true, requiredVersion: "^12.0.0" },
        "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: "^12.0.0" },
        "@angular/router": { singleton: true, strictVersion: true, requiredVersion: "^12.0.0" },

        ...sharedMappings.getDescriptors(),
      },
    }),
    sharedMappings.getPlugin(),
  ],
};
