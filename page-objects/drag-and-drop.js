const { browser } = require('protractor')

class DragAndDrop {
  constructor () {
    this.title = element(by.xpath("//h3[.='" + this.getDragAndDropTitle() + "']"))
    this.boxesId = element.all(by.id('columns'))
    this.boxA = element(by.id('column-a'))
    this.boxB = element(by.id('column-b'))
  }

  visit() {
    browser.get('drag_and_drop')
  }

  getTitleA() {
    return 'A'
  }

  getTitleB() {
    return 'B'
  }

  getDragAndDropTitle() {
    return 'Drag and Drop'
  }
}

module.exports = DragAndDrop
