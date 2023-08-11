console.log("script working");

const wrapCont = document.getElementById("wrapper");
const elWidth = wrapCont.offsetWidth / 32;
// height for each box must the same as elWidth
// find how much height is available to get rows placed into it
const rowAmount = Math.round(window.innerHeight / elWidth);
console.log(rowAmount);
// place as many rows as is available
wrapCont.style.gridTemplateRows = `repeat(${rowAmount}, 1fr);`;
const howManyPixels = rowAmount * 32;

function createRows() {
  for (i = 0; i < howManyPixels; i++) {
    const newPixel = document.createElement("div");
    newPixel.id = i;
    newPixel.display = "inline";
    newPixel.style.border = "red solid 1px";
    wrapCont.appendChild(newPixel);
  }
}

createRows();

// function randomPastel() {
//     let children = wrapCont.children;
//     for (el in children) {
//         if ((el/2)%1 == 0) {
//             document.getElementById(el).style.backgroundColor = "pink";
//         }
//     }
// }

// randomPastel();

window.addEventListener("resize", function() {
  this.location.reload();
});
