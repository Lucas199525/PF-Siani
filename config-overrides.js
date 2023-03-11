// eslint-disable-next-line @typescript-eslint/no-var-requires
const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@Components': 'src/components/index.ts',
    '@Store': 'src/store/store.ts',
    '@Pages': 'src/page/index.ts',
  })(config);
  return config;
};
