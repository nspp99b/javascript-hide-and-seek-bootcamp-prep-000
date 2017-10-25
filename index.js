//define getFirstSelector
function getFirstSelector(selector) {
  return document.querySelector(`${selector}`)
}

//pulling .classes out of #targets
function nestedTarget() {
  return document.querySelector('#nested .target')
}

//going deep into an #id
function deepestChild() {
  var grandChildren = document.querySelectorAll('#grand-node div')
  return grandChildren[grandChildren.length]
}
