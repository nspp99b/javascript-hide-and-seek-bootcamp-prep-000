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
  var chills = document.getElementById('grand-node').querySelectorAll('div')
  return chills[chills.length-1]
}
