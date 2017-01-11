var minDeviceWidth = '320px'
var maxDeviceWidth = '980px'
var markdownPadding = '20px'
var ge = document.querySelector.bind(document)
var ga = document.querySelectorAll.bind(document)
var body = ge('body')
var containers = ga('.container')
var repoAjaxContainerElm = ge('#js-repo-pjax-container')
var mdElm = ge('.markdown-body')

// Adjust elements
body.style.minWidth = minDeviceWidth

if (mdElm) {
  adjustMarkdown(mdElm)
}

adjustElements(containers)

if (repoAjaxContainerElm) {
  repoAjaxContainerElm.addEventListener('DOMNodeInserted', function(){
    var containersUpdated = ga('.container')
    var mdUpdated = ge('.markdown-body')
    adjustElements(containersUpdated)
    if (mdUpdated) {
      adjustMarkdown(mdUpdated)
    }
  })
}

function adjustElements(elements) {
  elements.forEach(adjust)
}

function adjust(elem) {
  elem.style['max-width'] = maxDeviceWidth
  elem.style.width = 'auto'
}

function adjustMarkdown(elm) {
  elm.style.padding = markdownPadding
}
