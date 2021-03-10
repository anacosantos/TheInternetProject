const Checkbox = require('../../page-objects/checkbox')

describe('Give me Checkbox page', () => {
    let checkboxpage = new Checkbox()

    beforeEach(()=> {
        checkboxpage.visit()
    })

    it('Verify if shows up checkbox title', () => {
        expect(checkboxpage.checkboxTitle.first().getText()).toBe('Checkboxes')
    })
})