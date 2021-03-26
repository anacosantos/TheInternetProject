
const EntryAd = require('../../page-objects/entry-ad')

decribe('Give me Entry Ad page', () => {
    let entryAd = new EntryAd ()

    beforeEach(() => {
        entryAd.visit()
    })

    it('Check if Entry Ad title exists', () => {
        expect(entryAd.title.getText()).toBe('Entry Ad')
    })

    
})