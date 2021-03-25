const dnd = require('html-dnd').code
const { browser } = require('protractor')
const DragAndDrop = require('../../page-objects/drag-and-drop')

describe('Give me the Drag and Drop page', () => {
  const dragDrop = new DragAndDrop()

  beforeEach(() => {
    dragDrop.visit()
  })

  it('Check if Drag and Drop title exists', () => {
    expect(dragDrop.title.getText()).toBe(dragDrop.getDragAndDropTitle())
  })

  it('Check if boxes A and B exist', () => {
    expect(dragDrop.boxA.getText()).toBe(dragDrop.getTitleA())
    expect(dragDrop.boxB.getText()).toBe(dragDrop.getTitleB())
  })

  it('Check if box A change to box B', () => {
    // I used dnd beacuse the protractor way doesn't work
    browser.executeScript(dnd, dragDrop.boxA.getWebElement(), dragDrop.boxB.getWebElement())
    expect(dragDrop.boxA.getText()).toBe(dragDrop.getTitleB())
    expect(dragDrop.boxB.getText()).toBe(dragDrop.getTitleA())
  })
})
