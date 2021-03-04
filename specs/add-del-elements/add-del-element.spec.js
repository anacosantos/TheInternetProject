
const AddDelElement = require('../../page-objects/add-del-element')

describe('Given the add and delete element page', () => {
  let addDel

  beforeAll(() => {
    addDel = new AddDelElement()
  })

  beforeEach(() => {
    addDel.visit()
  })

  it('Check if element is add', () => {
    addDel.addElementButton.click()
    expect(addDel.addElementButton.getText()).toBe('Add Element')
  })

  it('Add element button works', () => {
    addDel.addElementButton.click()
    expect(addDel.delElementButton.getText()).toBe('Delete')
  })

  it('Delete element', () => {
    addDel.addElementButton.click()
    addDel.delElementButton.click()
    expect(addDel.delElementButton.isPresent()).toBe(false)
  })

  it('Verify multiples elements are being showed on the screen', () => {
    const totalElements = 10
    for (let index = 0; index < totalElements; index++) {
      addDel.addElementButton.click()
    }
    expect(addDel.allDelButtons.count()).toBe(totalElements)
  })

  it('Verify if elements are being deleted', () => {
    const totalElements = 10
    // doing for to add elements
    for (let index = 0; index < totalElements; index++) {
      addDel.addElementButton.click()
    }
    // doing .each() to delete each element
    addDel.allDelButtons.each(function (element) {
      element.click()
    })
    expect(addDel.allDelButtons.count()).toBe(0)
  })

  it('Verify if page refreshed delete all elements on the screen', () => {
    const totalElements = 10
    // doing for to add elements
    for (let index = 0; index < totalElements; index++) {
      addDel.addElementButton.click()
    }
    browser.navigate().refresh()
    expect(expect(addDel.allDelButtons.count()).toBe(0))
  })
})
