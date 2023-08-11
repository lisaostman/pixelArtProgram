const art = { ...localStorage };
const wrapCont = document.getElementById("wrapper");

for (el in art) {
  if (el !== "debug") {
    console.log(el);
    let key = el;
    // const newBtn = document.createElement("button");
    // newBtn.innerText=el;
    let elData = JSON.parse(localStorage.getItem(key))
    // newBtn.addEventListener('click', function() {
    // setUp(elData["cols"], elData["colours"])
    // })
    // var image = new Image();
    let src=elData["image"];
    // image.src = src;
    // image.style.width="200px";
    // console.log(elData);
    // document.getElementById('savedArt').appendChild(image);
    // document.getElementById('savedArt').appendChild(newBtn);

    function btnClick() {
        setUp(elData["cols"], elData["colours"])
        }

    let elDesign = `
        <div class="imageItem">
      <img
        src=${src}
        class="savedImage"
      />
      <button class="imageBtn" onClick=${btnClick}>
      ${el}
      </button>
        </div>`

    let newEl = document.createElement('div');
    newEl.setAttribute("class", "imageItem");
    newEl.innerHTML=elDesign;
    document.getElementById('imageGallery').appendChild(newEl)

  } else {
   
  }
}
