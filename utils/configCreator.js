module.exports = provideConfig => {
  const defaultConfig = {
    baseUrl: 'https://the-internet.herokuapp.com/',
    specs: ['../specs/*.spec.js'],
    onPrepare: () => {
      browser.waitForAngularEnabled(false)
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
