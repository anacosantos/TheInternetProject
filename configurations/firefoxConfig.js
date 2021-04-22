const configCreator = require('../utils/configCreator')

module.exports.config = configCreator({
  capabilities: {
    browserName: 'firefox',
    'moz:firefoxOptions': {
      args: ['--headless']
    }
  }
})

// var path = require('path');
// const downloadsPath = path.resolve(__dirname, '../downloads');

// var q = require("q");
// var FirefoxProfile = require("firefox-profile");

// var makeFirefoxProfile = function(preferenceMap, specs) {
//     var deferred = q.defer();
//     var firefoxProfile = new FirefoxProfile();

//     for (var key in preferenceMap) {
//         firefoxProfile.setPreference(key, preferenceMap[key]);
//     }

//     firefoxProfile.encoded(function (encodedProfile) {
//         var capabilities = {
//             browserName: "firefox",
//             firefox_profile: encodedProfile,
//             specs: specs
//           };

//         deferred.resolve(capabilities);
//     });
//     return deferred.promise;
// };

// module.exports.config = configCreator ({
//   getMultiCapabilities: function() {
//       return q.all([
//           makeFirefoxProfile(
//               {
//                   "browser.download.folderList": 2,
//                   "browser.download.dir": downloadsPath,
//                   'services.sync.prefs.sync.browser.download.useDownloadDir' : true,
//                   'browser.download.useDownloadDir' : true,
//                   "browser.helperApps.neverAsk.saveToDisk": "application/txt"
//               },
//             ['../specs/*/file-downloader.spec.js'],
//           )
//        ]);
//   },
// })

// https://stackoverflow.com/questions/31526120/download-file-on-firefox-with-protractor
