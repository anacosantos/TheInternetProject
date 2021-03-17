class ContextMenu {
    constructor () {
        this.title = element(by.xpath("//h3[.='Context Menu']"))
        this.insideBox = element(by.id('hot-spot'))
    }

    visit() {
        browser.get('context_menu')
    } 
}

module.exports = ContextMenu