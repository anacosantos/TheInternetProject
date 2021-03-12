const { browser, ExpectedConditions } = require('protractor')
const Checkbox = require('../../page-objects/checkbox')

describe('Give me Checkbox page', () => {
    let checkboxpage = new Checkbox()

    beforeEach(()=> {
        checkboxpage.visit()
    })

    // it('Verify if shows up checkbox title', () => {
    //     expect(checkboxpage.checkboxTitle.first().getText()).toBe('Checkboxes')
    // })

    // it('Verify if checkbox 1 and 2 exist' , () => {
    //    expect(checkboxpage.checkboxesId.first().getText()).toBe('checkbox 1\ncheckbox 2')
    // })

    // it('Checkbox 2 is selected by default' , () => {
    //     checkboxpage.checkbox2.isSelected().then((element) => {
    //         expect(element[0]).toBe(true)
    //     })  
    // })   
    
    it('Checkboxes are clickables', () => {        
        checkboxpage.checkboxesInputs.each( function(element){
            element.isSelected().then((x)=> {
                if(x.isSelected() === 'false'){
                //     expect(x.isSelected().toBe(true)
                } else {
                    x.click()
                   expect(x.isSelected()).toBe(false)
                }
            })         
        })
    }) 
})          
    




  