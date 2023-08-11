const fillToolBtn = document.getElementById("fillTool");
const allPixels = document.getElementById("wrapper").children;
let collectionToBeFilled = [];

fillToolBtn.addEventListener("click", () => {
  console.log(isFillTool);
  if (isFillTool) {
    isFillTool = false;
    console.log(isFillTool);
  } else {
    isFillTool = true;
    console.log(isFillTool);
  }
});

function checkSiblings(e) {
  let el = e.target;
  let originalPoint = el.id;
  let color = e.target.style.backgroundColor;
  let sameColorEl = [];
  for (i = 0; i < allPixels.length; i++) {
    if (allPixels[i].style.backgroundColor == color) {
      sameColorEl.push(i);
    }
  }
  let collectionOfChunks = {};
  let chunkArr = [];
  let noOfChunks = 0;
  // for all the colors that are the same as the one that was picked
  // getting all of our chunks!
  for (i = 0; i < sameColorEl.length; i++) {
    // check if there is a box next to it, if so add the el to the chunk array
    if (parseInt(sameColorEl[i]) + 1 == sameColorEl[i + 1]) {
      let index = sameColorEl[i];
      chunkArr.push(index);
      console.log(chunkArr);
    } else {
      console.log("end of a chunk !");
      chunkArr.push(sameColorEl[i]);
      if (chunkArr.length !== 0) {
        console.log("there is a chunk in the chunk array to add to collection");
        collectionOfChunks[noOfChunks] = chunkArr;
        console.log("chunk added to collection:" + collectionOfChunks);
        chunkArr = [];
        console.log("chunk has been reset:" + chunkArr);
        noOfChunks++;
        console.log("chunk numver has increased: " + noOfChunks);
      }
    }
    console.log(collectionOfChunks);
  }

  let originalArray = [];
  for (const item in collectionOfChunks) {
    let nextItem = "";
    nextItem = parseInt(item) + 1;
    // iterates over the current chunk in the object
    for (i = 0; i < collectionOfChunks[item].length; i++) {
      // console.log(collectionOfChunks[item][i])
      // check if it contains the original point
      if (collectionOfChunks[item][i] == parseInt(originalPoint)) {
        console.log("orignial chunk found! +" + collectionOfChunks[item]);
        originalArray = collectionOfChunks[item];
        for (b=0; b<originalArray.length;b++) {
            let num = originalArray[b]
            collectionToBeFilled.push(num);
        }

      }
      // if it contains the original point, we have found the original chunk
    }

    counter = 0;
    while (counter < 20) {
      for (i = 0; i < collectionOfChunks[item].length; i++) {
        for (x = 0; x < originalArray.length; x++) {
          numChecking = originalArray[x] + 4;
          if (collectionOfChunks[item].includes(numChecking)) {
            console.log("next to it:" + collectionOfChunks[item]);
            for (a=0; a<collectionOfChunks[item].length;a++) {
                let num = collectionOfChunks[item][a];
                console.log("num to be pushed " + num)
                collectionToBeFilled.push(num);
            }
            originalArray=collectionOfChunks[item];
          }
          
        }
        // console.log(collectionOfChunks[item][i])
        // check if any of the numbers
      }
      counter = counter + 2;
    }
    console.log(collectionToBeFilled);
  }
}

//version1
// function checkSiblings(e) {
//   console.log(e.target.style.backgroundColor);
//   // originally element is the pixel that was clicked
//   let el = e.target;
//   // storing the pixel that was clicked's original target
//   let leftOfOrigin = parseInt(e.target.id) - 1;
//   // pixel above the clicked pixel
//   let above = el.id - parseInt(colNum);
//   // pixel below the clicked pixel
//   let below = parseInt(el.id) + parseInt(colNum);

//   // array with clicked symbol I guess
//   let sameColourSiblings = [el];

//   if (
//     parseInt(el.id) != 0 &&
//     parseInt(el.id) != parseInt(allPixels.length)-1
//   ) {
//     // loopSiblings(el, sameColourSiblings, originalEl)
//     // different idea
//     // check all of the siblings to the right, if they're the same colour
//     while (el.style.backgroundColor == el.nextElementSibling.style.backgroundColor) {
//         // while here, check if there are any pixels to the top to shade in, shade all of the ones at the top in before moving onto the next pixel
//         let pixelBeforeUpwardsPattern = el;
//         console.log(pixelBeforeUpwardsPattern);
//         if (parseInt(el.id) - parseInt(colNum) >= 0) {
//             console.log("there are pixels above!")
//             while(el.style.backgroundColor == allPixels[parseInt(el.id) - parseInt(colNum)].style.backgroundColor) {
//                 console.log(`inner while loop run --- we are changing ${el.id} to red`)
//                 console.log(parseInt(el.id) - parseInt(colNum))
//                 // change current style to red
//                 el.style.backgroundColor="red";
//                 // if  the next above one is in the first row
//                 console.log(parseInt(colNum))
//                 if ((parseInt(el.id) - parseInt(colNum)) < (parseInt(colNum))) {
//                     console.log("if statement run!")
//                     allPixels[parseInt(el.id) - parseInt(colNum)].style.backgroundColor = "red";
//                     break;
//                 }
//                 // move pixel one spot upward
//                 el = allPixels[parseInt(el.id) - parseInt(colNum)]
//             }
//             el.style.backgroundColor = "red";
//         }
//         console.log(pixelBeforeUpwardsPattern);
//         el = pixelBeforeUpwardsPattern;
//         // change the current pixel to black
//         el.style.backgroundColor = "black";
//         // if the next pixel is the end of the list of pixels, then change it to black and break the while loop
//         if (parseInt(el.nextElementSibling.id) == parseInt(allPixels.length)-1) {
//             el.nextElementSibling.style.backgroundColor = "black";
//             break;
//         }
//         // move the current pixel one spot to the right
//         el = el.nextElementSibling;
//     }
//     // have to for the last case scenario of the fill also check the above siblings
//     let pixelBeforeUpwardsPattern = el;
//     while(el.style.backgroundColor == allPixels[parseInt(el.id) - parseInt(colNum)].style.backgroundColor) {
//         console.log(`inner while loop run --- we are changing ${el.id} to red`)
//         console.log(parseInt(el.id) - parseInt(colNum))
//         // change current style to red
//         el.style.backgroundColor="red";
//         // if  the next above one is in the first row
//         console.log(parseInt(colNum))
//         if ((parseInt(el.id) - parseInt(colNum)) < (parseInt(colNum))) {
//             console.log("if statement run!")
//             allPixels[parseInt(el.id) - parseInt(colNum)].style.backgroundColor = "red";
//             break;
//         }
//         // move pixel one spot upward
//         el = allPixels[parseInt(el.id) - parseInt(colNum)]
//     }
//     el.style.backgroundColor = "red";
//     el = pixelBeforeUpwardsPattern;
//     el.style.backgroundColor = "black";
//     // return to left of original and check all of the siblings to the left
//     el = allPixels[leftOfOrigin];
//     // while the pixel to the left is the same colour
//     while (el.style.backgroundColor == el.previousElementSibling.style.backgroundColor) {
//         // change current pixel to black
//         el.style.backgroundColor = "black";
//         // if the next pixel to the left is the first pixel on the canvas, then change it to black and break the while loop
//         if (parseInt(el.previousElementSibling.id) == 0) {
//             el.previousElementSibling.style.backgroundColor = "black";
//             break;
//         }
//         // move the current pixel one spot to the left
//         el = el.previousElementSibling;
//     }
//     el.style.backgroundColor = "black";
//   } else if (parseInt(el.id) == parseInt(allPixels.length)-1){
//     // this means the last pixel was clicked, we need to loop through the previous siblings until one doesn't match the original colour
//     console.log(el.previousElementSibling.style.backgroundColor);
//     while (el.style.backgroundColor == el.previousElementSibling.style.backgroundColor) {
//         el.style.backgroundColor = "black";
//         el = el.previousElementSibling;
//         console.log("new el" + el.style.backgroundColor)
//     }
//     el.style.backgroundColor = "black";
//   }
// }
// el.style.backgroundColor == allPixels[above].style.backgroundColor ||
//version2
// el.style.backgroundColor == allPixels[below].style.backgroundColor
// function loopSiblings(el, sameColourSiblings, originalEl) {
//     let originalCol = el.style.backgroundColor;
//     console.log(originalCol);
//   while (
//     el.style.backgroundColor == el.nextElementSibling.style.backgroundColor ||
//     originalCol == el.previousElementSibling.style.backgroundColor) {

//     if (el.style.backgroundColor == el.nextElementSibling.style.backgroundColor) {
//       el.style.backgroundColor = "black";
//       sameColourSiblings.push(el.nextElementSibling);
//       // if next sibling will be the very last square
//       console.log(el.nextElementSibling.id);
//       console.log(parseInt(allPixels.length)-1)
//       if (el.nextElementSibling.id == parseInt(allPixels.length)-1) {
//         console.log("---end reached! " + parseInt(el.nextElementSibling.id) )
//         el.nextElementSibling.style.backgroundColor = "black";
//         originalEl.style.backgroundColor="red";
//         el = originalEl;
//         console.log("el returns to " + el)
//         console.log(el.nextElementSibling.style.backgroundColor)
//       } else {
//         el = el.nextElementSibling;
//       }
//     } else if (
//       originalCol == el.previousElementSibling.style.backgroundColor
//     ) {
//       el.style.backgroundColor = "black";
//       sameColourSiblings.push(el.previousElementSibling);
//       if (el.previousElementSibling.id == 0) {
//         console.log("---start reached! " + parseInt(el.previousElementSibling.id) )
//         el.previousElementSibling.style.backgroundColor = "black";
//         originalEl.style.backgroundColor="red";
//         el = originalEl;
//         console.log("el returns to " + el)
//         console.log(el.nextElementSibling.style.backgroundColor)
//       } else {
//         el = el.previousElementSibling;
//       }
//     }
//     // } else if (
//     //   el.style.backgroundColor == allPixels[above].style.backgroundColor
//     // ) {
//     //     el.style.backgroundColor = "black";
//     //   sameColourSiblings.push(allPixels[above]);
//     //   el = allPixels[above];
//     // } else if (
//     //   el.style.backgroundColor == allPixels[below].style.backgroundColor
//     // ) {
//     //     el.style.backgroundColor = "black";
//     //   sameColourSiblings.push(allPixels[below]);
//     //   el = allPixels[below];
//     // }
//     else {
//       console.log("OHNOOO");
//     }
//   }
// }
