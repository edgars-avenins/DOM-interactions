// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  bindEventListeners(document.getElementsByClassName('board')[0].children)
}

function bindEventListeners (dots) {
  for (var i = 0; i < dots.length; i++) {
    // BIND YOUR EVENT LISTENERS HERE
    // The first one is provided for you
    dots[i].addEventListener('contextmenu', makeGreen)
    dots[i].addEventListener('click', makeBlue)
    dots[i].addEventListener('dblclick', hide)
  }
}

function makeGreen (e) {
  e.preventDefault()
  e.target.classList.toggle('green')
  updateCounts(makeGreen.name)
}

function makeBlue (e) {
  e.preventDefault()
  e.target.classList.toggle('blue')
  updateCounts(makeBlue.name)
}

function hide (e) {
  e.preventDefault()
  e.target.classList.toggle('invisible')
  updateCounts(hide.name)
}
// CREATE FUNCTION makeBlue HERE

// CREATE FUNCTION hide HERE
var totals = {
  blue: 0,
  green: 0,
  invisible: 0
}
function updateCounts (addVal) {
  //console.trace()
  
  
  // WRITE CODE HERE TO COUNT BLUE, GREEN, AND INVISIBLE DOTS
  switch(addVal){
    case 'makeGreen':
      totals.green++
      break
    case 'makeBlue':
      totals.blue++
      break
    case 'hide':
      totals.invisible++
      totals.blue = totals.blue - 2
      break
    default:
      console.log("Error")
      break;
  }
  //use time out to work around the dblclick == 2x left click
  setTimeout(function(){
    displayTotals(totals)
  }, 200)
  // Once you've done the counting, this function will update the display
}

function displayTotals (totals) {
  for (var key in totals) {
    document.getElementById(key + '-total').innerHTML = totals[key]
  }
}
