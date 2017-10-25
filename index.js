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

//increase
function increaseRankBy(n) {
  var ranks = document.querySelectorAll('.ranked-list li')
  for (let i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + parseInt(n)
  }
}
