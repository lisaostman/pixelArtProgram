console.log("script working");
const colButton = document.getElementById("colBtn");
const optionsCon = document.getElementById("options");
let colNum = 4;
let rowNum = 0;
let isToggle = false;
let isFillTool = false;

colButton.addEventListener("click", function () {
  const numOfCols = document.getElementById("col").value;
  if (numOfCols > 100) {
    let message = document.createElement("span");
    message.innerText = `You selected ${numOfCols} columns. That's too many dog, 100 is the max.`;
    message.style.color = "pink";
    optionsCon.appendChild(message);
  } else {
    setUp(numOfCols);
    colNum = numOfCols;
    console.log(colNum + "," + rowNum);
  }
});

function setUp(cols, savedData) {
  console.log("columns given=" + cols);
  console.log(savedData + "saved");
  // setting up grids to be equal in height and width
  const wrapCont = document.getElementById("wrapper");
  wrapCont.innerHTML = "";
  const elWidth = wrapCont.offsetWidth / cols;
  wrapCont.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

  // height for each box must the same as elWidth
  // find how much height is available to get rows placed into it
  const rowAmount = Math.round(window.innerHeight / elWidth);
  console.log("row amount=" + rowAmount);
  // place as many rows as is available
  rowNum = rowAmount;
  wrapCont.style.gridTemplateRows = `repeat(${rowAmount}, 1fr);`;
  const howManyPixels = rowAmount * cols;

  // creating the amount of rows needed with each 'pixel'
  function createRows() {
    // if there is data stored passed

    // if there isn't
    for (i = 0; i < howManyPixels; i++) {
      const newPixel = document.createElement("div");
      newPixel.id = i;
      newPixel.display = "inline";
      if (savedData) {
        console.log(savedData[i]);
        newPixel.style.backgroundColor = savedData[i];
      } else {
        newPixel.style.backgroundColor = "#fdecd4";
      }
      newPixel.style.border = "#ffd8a1 solid 1px";

      newPixel.addEventListener("mousedown", function (e) {
        if (isFillTool) {
            //fill colour
            checkSiblings(e);
            for (i=0; i<collectionToBeFilled.length;i++) {
                let el = document.getElementById(collectionToBeFilled[i]);
                el.style.backgroundColor = "black";
            }
        } else {
            isToggle = true;
            colourPixel(e);
        }
      });
      newPixel.addEventListener("mouseup", () => (isToggle = false));

      newPixel.addEventListener("mouseover", function (e) {
        if (isToggle) {
         colourPixel(e);
        } else {
        }
      });

      wrapCont.appendChild(newPixel);
    }
  }

  createRows();
}

function colourPixel(e) {
  let pixelId = e.target.id;
  let pixelEl = document.getElementById(pixelId);
  let colour = document.getElementById("colorPick").value;
  pixelEl.style.backgroundColor = colour;
}

setUp(colNum);
console.log(colNum + "," + rowNum);

window.addEventListener("resize", function () {
  this.location.reload();
});
