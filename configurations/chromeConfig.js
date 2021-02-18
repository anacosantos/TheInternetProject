const configCreator = require('../utils/configCreator')

module.exports.config = configCreator({
  capabilities: {
    browserName: 'chrome',
    chromeOpitions: {
      args: ['--headless']
    }
  }
})
