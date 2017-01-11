var minDeviceWidth = '320px'
var markdownPadding = '20px'
var ge = document.querySelector.bind(document)
var ga = document.querySelectorAll.bind(document)
var body = ge('body')
var markdownBodyEl = ge('.markdown-body')
var containers = ga('.container');

// Adjust elements
body.style.minWidth = minDeviceWidth

if (markdownBodyEl) {
  markdownBodyEl.style.padding = markdownPadding
}

containers.forEach(adjust)

function adjust(elem) {
  var style = getComputedStyle(elem)
  elem.style['max-width'] = style.width
  elem.style.width = 'auto'
}
