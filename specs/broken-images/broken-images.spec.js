
const BrokenImages = require('../../page-objects/broken-images')

describe('Give me Broken Images page', () => {
  let brokenImagesPage

  beforeEach(() => {
    brokenImagesPage = new BrokenImages()
    brokenImagesPage.visit()
  })

  it('Verify if title Broken Images exist on the web page', () => {
    expect(brokenImagesPage.brokenImageClass.first().getText()).toBe('Broken Images')
  })

  it('Verify if all images are showing up', () => {
    expect(brokenImagesPage.images.isPresent()).toBe(true)
  })

  it('Verify how many images are broken', () => {
    const imagesBrokenCount = browser.executeScript(`
            var elms = document.querySelectorAll("img");
            return [].filter.call(elms, e => e.offsetHeight > 1 && e.naturalHeight <= 1).length;
        `)
    expect(imagesBrokenCount).toEqual(2)
  })
})
