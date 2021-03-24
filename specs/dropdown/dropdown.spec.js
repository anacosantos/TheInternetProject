
const Dropdown = require('../../page-objects/dropdown')

describe('Give me Dropdown page', () => {
  const dropdown = new Dropdown()

  beforeEach(() => {
    dropdown.visit()
  })

  it('Check if Dropdown List title exists', () => {
    expect(dropdown.title.getText()).toBe('Dropdown List')
  })

  it('Check if select field there is "Please select an option" by default', () => {
    expect(dropdown.selector2.first().getText()).toBe('Please select an option')
  })

  it('Check if option 1 and 2 exist', () => {
    dropdown.selector2.getText().then((selected) => {
      expect(selected.join().search('Option 1,Option 2')).toBe(24)
    })
  })

  it('Check if click on option 1 the value is 1', () => {
    dropdown.option1.click()
    expect(dropdown.option1.getAttribute('selected')).toBe('true')
    expect(dropdown.option1.getAttribute('value')).toBe('1')
  })

  it('Check if click on option 2 the value is 2', () => {
    dropdown.option2.click()
    expect(dropdown.option2.getAttribute('selected')).toBe('true')
    expect(dropdown.option2.getAttribute('value')).toBe('2')
  })

  it('Check if all elements were selected', () => {
    dropdown.selector2.each((selected) => {
      selected.click()
      expect(selected.getAttribute('selected')).toBe('true')
    })
  })
})
