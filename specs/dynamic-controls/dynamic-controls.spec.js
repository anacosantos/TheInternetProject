
const { browser, ExpectedConditions } = require('protractor')
const DynamicControls = require('../../page-objects/dynamic-controls')

describe('Give me Dynamic Controls page', () => {
  const dynamicControls = new DynamicControls()

  beforeEach(() => {
    dynamicControls.visit()
  })

  it('Give me Dynamic Controls Title', () => {
    expect(dynamicControls.title.getText()).toBe('Dynamic Controls')
  })

  it('Check if possible remove a checkbox', () => {
    dynamicControls.checkboxInput.click()
    dynamicControls.removeButton.click()
    browser.wait(ExpectedConditions.invisibilityOf(dynamicControls.loading), 5000).then(() => {
      expect(dynamicControls.loading.isPresent()).toBe(true)
      expect(dynamicControls.gone.isPresent()).toBe(true)
      expect(dynamicControls.checkboxInput.isPresent()).toBe(false)
    })
  })

  it('Check if Add is clicable and works', () => {
    dynamicControls.checkboxInput.click()
    dynamicControls.removeButton.click()
    browser.wait(ExpectedConditions.invisibilityOf(dynamicControls.loading), 5000)
    dynamicControls.addButton.click()
    browser.wait(ExpectedConditions.invisibilityOf(dynamicControls.styleLoading), 5000).then(() => {
      dynamicControls.allLoading.each(item => {
        expect(item.isDisplayed()).toBe(false)
        expect(dynamicControls.back.isPresent()).toBe(true)
        expect(dynamicControls.checkbox.isPresent()).toBe(true)
      })
    })
  })

  it('Check if anable button works and become filled field', () => {
    dynamicControls.enableButton.click()
    browser.wait(ExpectedConditions.invisibilityOf(dynamicControls.loading), 5000)
    expect(dynamicControls.field.isEnabled()).toBe(true)
    expect(dynamicControls.enabled.isPresent()).toBe(true)
  })

  it('Check if possible fill field ', () => {
    dynamicControls.enableButton.click()
    browser.wait(ExpectedConditions.invisibilityOf(dynamicControls.loading), 5000)
    dynamicControls.inputField.sendKeys('Ana')
    expect(dynamicControls.inputField.getAttribute('value')).toBe('Ana')
  })

  it('Check if disable button is clickable', () => {
    dynamicControls.enableButton.click()
    browser.wait(ExpectedConditions.invisibilityOf(dynamicControls.loading), 5000)
    dynamicControls.inputField.sendKeys('Ana')
    dynamicControls.disableButton.click()
    expect(dynamicControls.enableButton.isPresent()).toBe(true)
  })
})
