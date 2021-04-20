const configCreator = require('../utils/configCreator')
var path = require('path');
const downloadsPath = path.resolve(__dirname, '../downloads');

module.exports.config = configCreator({
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--headless'],
      prefs: {
        download: {
          'prompt_for_download': false,
          'directory_upgrade': true,
          'default_directory':  downloadsPath
        }
      }  
    }
  }
})
