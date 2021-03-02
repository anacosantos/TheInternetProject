const { ExpectedConditions } = require("protractor")
const AddDelElement = require("../../page-objects/add-del-element")



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
       for (i = 0; i < 5; i++) {
        addDel.addElementButton.click()
       }
       expect().toBe()
     
    })
})
