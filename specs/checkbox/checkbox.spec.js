
const Checkbox = require('../../page-objects/checkbox')

describe('Give me Checkbox page', () => {
  const checkboxpage = new Checkbox()

  beforeEach(() => {
    checkboxpage.visit()
  })

  it('Verify if shows up checkbox title', () => {
    expect(checkboxpage.checkboxTitle.first().getText()).toBe('Checkboxes')
  })

  it('Verify if checkbox 1 and 2 exist', () => {
    expect(checkboxpage.checkboxesId.first().getText()).toBe('checkbox 1\ncheckbox 2')
  })

  it('Checkbox 2 is selected by default', () => {
    checkboxpage.checkbox2.isSelected().then((element) => {
      // i used number because it returns array called true, and I need the first value(true)
      expect(element[0]).toBe(true)
    })
  })

  it('Checkboxes are clickables', () => {
    checkboxpage.checkboxesInputs.each((element) => {
      element.isSelected().then((statusChanged) => {
        // if(statusChanged === true){
        //     element.click()
        //     expect(element.isSelected()).toBe(false)
        // } else {
        //     element.click()
        //     expect(element.isSelected()).toBe(true)
        // }
        // or the best way
        element.click()
        expect(element.isSelected()).toBe(!statusChanged)
      })
    })
  })

  it('Select Checkbox 1 and deselect 2', () => {
    checkboxpage.checkbox1.isSelected().then((element) => {
      if (element === false) {
        checkboxpage.checkbox1.click()
        checkboxpage.checkbox1.isSelected().then((elementChanged) => {
          expect(elementChanged[0]).toBe(true)
        })
      }
    })

    checkboxpage.checkbox2.isSelected().then((element) => {
      if (element === true) {
        checkboxpage.checkbox2.click()
        checkboxpage.checkbox2.isSelected().then((elementChanged) => {
          expect(elementChanged[0]).toBe(false)
        })
      }
    })
  })

  it('Select Checkbox 2 and deselect 1', () => {
    checkboxpage.checkbox1.isSelected().then((element) => {
      if (element === true) {
        checkboxpage.checkbox1.click()
        checkboxpage.checkbox1.isSelected().then((elementChanged) => {
          expect(elementChanged[0]).toBe(false)
        })
      }
    })

    checkboxpage.checkbox2.isSelected().then((element) => {
      if (element === false) {
        checkboxpage.checkbox2.click()
        checkboxpage.checkbox2.isSelected().then((elementChanged) => {
          expect(elementChanged[0]).toBe(true)
        })
      }
    })
  })

  it('Select Checkbox 1 and 2', () => {
    checkboxpage.checkbox1.isSelected().then((element) => {
      if (element === false) {
        checkboxpage.checkbox1.click()
        checkboxpage.checkbox1.isSelected().then((elementChanged) => {
          expect(elementChanged[0]).toBe(true)
        })
      }
    })

    checkboxpage.checkbox2.isSelected().then((element) => {
      if (element === false) {
        checkboxpage.checkbox2.click()
        checkboxpage.checkbox2.isSelected().then((elementChanged) => {
          expect(elementChanged[0]).toBe(true)
        })
      }
    })
  })
})
