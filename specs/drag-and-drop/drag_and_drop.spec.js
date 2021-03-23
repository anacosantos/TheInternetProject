const dnd = require('html-dnd').code
const since = require('jasmine2-custom-message');
const { browser } = require('protractor');
const DragAndDrop = require('../../page-objects/drag-and-drop')

describe('Give me the Drag and Drop page', () => {
    let dragDrop = new DragAndDrop ()

    beforeEach(() => {
        dragDrop.visit()
    })

    // it('Check if Drag and Drop title exists', () => {
    //     expect(dragDrop.title.getText()).toBe('Drag and Drop')
    // })

    // it('Check if boxes A and B exist', () => {
    //     expect(dragDrop.boxA.first().getText()).toBe('A')
    //     expect(dragDrop.boxB.first().getText()).toBe('B')
    // })

    it('Check if box A change to box B', async()=> {
        
       //browser.actions().mouseDown(dragDrop.boxA, {x:10, y:10}).mouseMove(dragDrop.boxB, {x:10, y:10}).mouseUp().perform();
        
      
        
       // browser.actions().dragAndDrop(dragDrop.boxA, dragDrop.boxB).perform()
        // dragDrop.boxesId.each((boxChanged) => {
        //     boxChanged
        //     //if(boxChanged === 'B'){
        //         //expect(dragDrop.boxChanged).toBe('B')
        //     }
        // })

        //browser.actions().dragAndDrop(await dragDrop.boxA.getWebElement(), await dragDrop.boxB.getWebElement()).perform()

        // dragDrop.boxesId.each(t => {
        //     t.getText().then(t => console.log(t))
        // })

        let a_x, a_y, b_x, b_y = 0;
        await dragDrop.boxA.getLocation().then(function (location) {
            a_x = location.x
            a_y = location.y
            
        });

        await dragDrop.boxB.getLocation().then(function (location) {
            b_x = location.x
            b_y = location.y
        });

        //browser.actions().dragAndDrop(dragDrop.boxA,{x:b_x, y:b_y}).perform();

        console.log(b_x, b_y)
        //browser.actions().mouseDown(dragDrop.boxA).mouseMove(dragDrop.boxB).perform();
        //browser.actions().mouseMove(dragDrop.boxA).mouseDown(dragDrop.boxA).mouseMove(dragDrop.boxB).mouseUp().perform();
        //browser.driver.actions().dragAndDrop(dragDrop.boxA,dragDrop.boxB).perform();
        //browser.sleep(5000)



        // browser.actions().mouseDown(dragDrop.boxA).perform();
        // browser.actions().mouseMove(dragDrop.boxA,{x:a_x, y:a_y}).perform();
        // browser.actions().mouseDown(dragDrop.boxB).perform();
        // browser.actions().mouseMove(dragDrop.boxB,{x:b_x, y:b_y}).perform();
        // browser.actions().mouseUp().perform();
        browser.sleep(5000)

        browser.executeScript(dnd, dragDrop.boxA.getWebElement(), dragDrop.boxB.getWebElement());

    
        browser.sleep(5000)
   
    
        //browser.actions().mouseDown(from).mouseMove(to).mouseUp().perform();
        //browser.actions().dragAndDrop(elem,target).mouseUp().perform();
    })
})
//https://stackoverflow.com/questions/25086269/protractor-draganddrop-by-offset-location-of-element