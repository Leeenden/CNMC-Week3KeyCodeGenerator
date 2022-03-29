// ------------------------------------------------------------------
// JS using ID's
// -------------------------------------------------------------------
document.addEventListener("keydown", (e) => {
  let viewDisplay = document.getElementById("displayKeyNum");
  let viewCode = document.getElementById("displayCode");
  let viewKey = document.getElementById("displayKey");
  let viewWhich  = document.getElementById("displayWhich");

  let keyDown = e.key;
  let keyCode = e.code;
  let keyWhich = e.which;

viewDisplay.innerHTML = `<p class="pressedBtn"> ${keyDown} was pressed </p>`
viewKey.innerHTML = `<p class="pressedBtn"> ${keyCode} </p>`
viewWhich.innerHTML = `<p class="pressedBtn"> ${keyWhich} </p>`
viewCode.innerHTML = `<p class="pressedBtn"> ${keyDown} </p>`
})

// ------------------------------------------------------------------------
// JS using classes
// ------------------------------------------------------------------------
// document.addEventListener("keydown", (e) => {
//     let viewDisplay = document.getElementByClassName("displayKeyNum");
//     let viewCode = document.getElementByClassName("displayCode");
//     let viewKey = document.getElementByClassName("displayKey");
//     let viewWhich  = document.getElementByClassName("displayWhich");
  
//     let keyDown = e.key;
//     let keyCode = e.code;
//     let keyWhich = e.which;
  
//   viewDisplay.innerHTML = `<p class="pressedBtn"> ${keyDown} was pressed </p>`
//   viewKey.innerHTML = `<p class="pressedBtn"> ${keyCode} </p>`
//   viewWhich.innerHTML = `<p class="pressedBtn"> ${keyWhich} </p>`
//   ViewCode.innerHTML = `<p class="pressedBtn"> ${keyDown} </p>`
// })