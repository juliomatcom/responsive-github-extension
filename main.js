var minDeviceWidth = '320px'
var maxDeviceWidth = '980px'
var markdownPadding = '20px'
var ge = document.querySelector.bind(document)
var ga = document.querySelectorAll.bind(document)
var body = ge('body')
var containers = ga('.container')

// Adjust elements
body.style.minWidth = minDeviceWidth

adjustMarkdown(ge('.markdown-body'))

adjustElements(containers)

ge('#js-repo-pjax-container').addEventListener('DOMNodeInserted', function(){
  var containersUpdated = ga('.container')
  adjustElements(containersUpdated)
  adjustMarkdown(ge('.markdown-body'))
})

function adjustElements(elements) {
  elements.forEach(adjust)
}

function adjust(elem) {
  elem.style['max-width'] = maxDeviceWidth
  elem.style.width = 'auto'
}

function adjustMarkdown(elm) {
  if (elm) {
    elm.style.padding = markdownPadding
  }
}
