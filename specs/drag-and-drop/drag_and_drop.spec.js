const dnd = require('html-dnd').code
const { browser } = require('protractor')
const DragAndDrop = require('../../page-objects/drag-and-drop')

describe('Give me the Drag and Drop page', () => {
  const dragDrop = new DragAndDrop()

  beforeEach(() => {
    dragDrop.visit()
  })

  it('Check if Drag and Drop title exists', () => {
    expect(dragDrop.title.getText()).toBe('Drag and Drop')
  })

  it('Check if boxes A and B exist', () => {
    expect(dragDrop.boxA.getText()).toBe('A')
    expect(dragDrop.boxB.getText()).toBe('B')
  })

  it('Check if box A change to box B', async () => {
    browser.executeScript(dnd, dragDrop.boxA.getWebElement(), dragDrop.boxB.getWebElement())
    browser.sleep(5000)
    expect(dragDrop.boxA.getText()).toBe('B')
    expect(dragDrop.boxB.getText()).toBe('A')
  })
})
