module.exports = provideConfig => {
  const defaultConfig = {
    baseUrl: 'https://the-internet.herokuapp.com/',
    specs: ['../specs/*/file-downloader.spec.js'],
    // in the end of project I'll put all specs together, but to works spec by spec is easier now
    // specs: ['../specs/add-del-elements/*.spec.js'],
    onPrepare: () => {
      browser.waitForAngularEnabled(false)
      const AllureReporter = require('jasmine-allure-reporter')
      jasmine.getEnv().addReporter(new AllureReporter({
        resultsDir: 'allure-results'
      }))
    },
    jasmineNodeOpts: { random: true },
    directConnect: true
  }
  return Object.assign(
    {},
    defaultConfig,
    provideConfig
  )
}
