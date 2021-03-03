module.exports = provideConfig => {
  const defaultConfig = {
    baseUrl: 'https://the-internet.herokuapp.com/',
    // specs: ['../specs/*/*.spec.js'],
    specs: ['../specs/add-del-elements/*.spec.js'],
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
