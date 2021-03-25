const { browser } = require('protractor')

class DragAndDrop {
  titleA = 'A'
  titleB = 'B'
  dragAndDropTitle = 'Drag and Drop'

  constructor () {
    this.title = element(by.xpath("//h3[.='" + this.dragAndDropTitle + "']"))
    this.boxesId = element.all(by.id('columns'))
    this.boxA = element(by.id('column-a'))
    this.boxB = element(by.id('column-b'))
  }

  visit () {
    browser.get('drag_and_drop')
  }
}

module.exports = DragAndDrop
