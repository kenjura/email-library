const semver = require('semver');

const REQUIRED_VERSION = '>=8.0.0';

module.exports = function() {
  if (!semver.satisfies(process.version, REQUIRED_VERSION)) {
    console.error(`ERROR: this library requires a node runtime of ${REQUIRED_VERSION} or higher.`);
    process.exit();
  } else {
    console.log(`Required version ${REQUIRED_VERSION} is satisfied by current version ${process.version}.`);

  }
}