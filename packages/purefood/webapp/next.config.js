const { join } = require('path');

const workspace = join(__dirname, '..');

module.exports = {
  poweredByHeader: false,
  // https://lifesaver.codes/answer/cannot-import-typescript-files-from-outside-of-dir-directory-9474
  experimental: {
    externalDir: true,
  },
  webpack: (config, options) => {
    /** Allows import modules from packages in workspace. */
    config.module = {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.(js|jsx|ts|tsx)$/,
          include: [workspace],
          exclude: /node_modules/,
          use: options.defaultLoaders.babel,
        },
      ],
    };

    return config;
  },
};
