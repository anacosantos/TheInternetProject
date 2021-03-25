
const { browser, ExpectedConditions } = require('protractor')
const DynamicControls = require('../../page-objects/dynamic-controls')

describe('Give me Dynamic Controls page', () => {
    let dynamicControls = new DynamicControls ()

    beforeEach(() => {
        dynamicControls.visit()
    })

    // it('Give me Dynamic Controls Title', () => {
    //     expect(dynamicControls.title.getText()).toBe('Dynamic Controls')
    // })

    it('Check if possible remove a checkbox', () =>{
        dynamicControls.checkboxInput.click()
        browser.sleep(5000)
        dynamicControls.removeButton.click()
       // browser.sleep(5000)
        browser.wait( ExpectedConditions.invisibilityOf(dynamicControls.loading), 5000 )
        //console.log(dynamicControls.loading)
        expect(dynamicControls.loading.getText()).toBe('Wait for it...')

        //dynamicControls.removeButton.click()
        
        
    })
})

//browser.wait( EC.invisibilityOf( $('#selector') ), 5000 );
//browser.wait(EC.invisibilityOf($('#abc')), 5000);







//           browser.manage().timeouts().implicitlyWait(10000);
   
//element.all(by.css('some-css')).first().element(by.tagName('tag-within-css'));
// element.all(by.css('some-css')).get(index).element(by.tagName('tag-within-css'));
// element.all(by.css('some-css')).first().all(by.tagName('tag-within-css'));
