
// ------------------------------------------------------------------------
// JS using classes
// ------------------------------------------------------------------------

document.addEventListener("keydown", (e) => {
    let viewDisplay = document.querySelector(".displayKeyNum");
    let viewKey = document.querySelector(".displayKey");
    let viewWhich  = document.querySelector(".displayWhich");
    let viewCode = document.querySelector(".displayCode");
  
    let keyDown = e.key;
    let keyCode = e.code;
    let keyWhich = e.which;
  
  viewDisplay.innerHTML = `<p class="pressedBtn"> You pressed the: '${keyDown}' key </p>`
  viewKey.innerHTML = `<p class="pressedBtn"> ${keyDown} </p>`
  viewWhich.innerHTML = `<p class="pressedBtn"> ${keyWhich} </p>`
  viewCode.innerHTML = `<p class="pressedBtn"> ${keyCode} </p>`
  
})

// -------------------------------------------------------------------------
// other
// -----------------------------------------------------------------------
// document.addEventListener("keydown", (e) => {
//   let descriptions = document.getElementByClassName("description");
//   let keyDown = e.key;
//   let keyCode = e.code;
//   let keyWhich = e.which;

// descriptions[0].innerHTML = `<p class="pressedBtn"> ${keyDown} was pressed </p>`
// descriptions[1].innerHTML = `<p class="pressedBtn"> ${keyCode} </p>`
// descriptions[2].innerHTML = `<p class="pressedBtn"> ${keyWhich} </p>`
// })