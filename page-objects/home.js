class Home {
    constructor () {
        this.heading = element(by.xpath("//h1[@class='heading']"))
    }
    visit () {
      browser.get('https://the-internet.herokuapp.com/')
    }
  }
  
  module.exports = Home