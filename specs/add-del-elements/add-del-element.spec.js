
const AddDelElement = require('../../page-objects/add-del-element')
let i

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
    for (i = 0; i < totalElements; i++) {
      addDel.addElementButton.click()
    }
    expect(addDel.allDelButtons.count()).toBe(totalElements)
  })

  it('Verify if elements are being deleted', () => {
    const totalElements = 10
    // doing for to add elements
    for (i = 0; i < totalElements; i++) {
      addDel.addElementButton.click()
    }
    // doing .each() to delete each element
    addDel.allDelButtons.each(function (element) {
      element.click()
    })
    expect(addDel.allDelButtons.count()).toBe(0)
    // expect(true).toBe(true)
  })

  it('Verify if page refreshed delete all elements on the screen', () => {
    const totalElements = 10
    // doing for to add elements
    for (i = 0; i < totalElements; i++) {
      addDel.addElementButton.click()
    }
    browser.navigate().refresh()
    expect(expect(addDel.allDelButtons.count()).toBe(0))
  })
})
