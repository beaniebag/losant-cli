const { experience } = require('../../lib/constants');

module.exports = (program) => {
  return require('../utils/status')(program, 'dataTables', experience);
};
