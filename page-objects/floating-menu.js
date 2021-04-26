const { browser } = require("protractor");

class FloatingMenu {
     constructor () {
        this.title = element(by.css('.example h3'))
        this.menuID = element(by.id('menu'))
        
    }

    visit () {
        browser.get('floating_menu')
    }
}

module.exports = FloatingMenu