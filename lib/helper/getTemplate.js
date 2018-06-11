const forgotPassword = require('../templates/forgotPassword');

module.exports = function(name, props) {
  switch (name) {
    case 'forgotPassword': return forgotPassword(props);
  }
}