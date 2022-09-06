// eslint-disable-next-line @typescript-eslint/no-var-requires
const {alias, configPaths, aliasJest} = require('react-app-rewire-alias');

const aliasMap = configPaths('./tsconfig.paths.json');

// eslint-disable-next-line no-undef
module.exports = alias(aliasMap);

// eslint-disable-next-line no-undef
module.exports.jest = aliasJest(aliasMap);