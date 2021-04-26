const fs = require('fs')
const path = require('path')

const JS_BIND_INPUT = function (target) {
  const input = document.createElement('input')
  input.type = 'file'
  input.style.display = 'none'
  input.addEventListener('change', function () {
    target.scrollIntoView(true)

    const rect = target.getBoundingClientRect()
    const x = rect.left + (rect.width >> 1)
    const y = rect.top + (rect.height >> 1)
    const data = { files: input.files };

    ['dragenter', 'dragover', 'drop'].forEach(function (name) {
      const event = document.createEvent('MouseEvent')
      event.initMouseEvent(name, !0, !0, window, 0, 0, 0, x, y, !1, !1, !1, !1, 0, null)
      event.dataTransfer = data
      target.dispatchEvent(event)
    })

    document.body.removeChild(input)
  }, false)

  document.body.appendChild(input)
  return input
}

/**
 * Support function to drop a file to a drop area.
 *
 * @view
 * <div id="drop-area"></div>
 *
 * @example
 * dropFile($("#drop-area"), "./image.png");
 *
 * @param {ElementFinder} drop area
 * @param {string} file path
 */
module.exports = function (dropArea, filePath) {
  // get the full path
  filePath = path.resolve(filePath)

  // assert the file is present
  fs.accessSync(filePath, fs.F_OK)

  // resolve the drop area
  return dropArea.getWebElement().then(function (element) {
    // bind a new input to the drop area
    browser.executeScript(JS_BIND_INPUT, element).then(function (input) {
      // upload the file to the new input
      input.sendKeys(filePath)
    })
  })
}
