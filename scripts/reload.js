const art = { ...localStorage };
const wrapCont = document.getElementById("wrapper");

for (el in art) {
  if (el !== "debug") {
    console.log(el);
    let key = el;
    let elData = JSON.parse(localStorage.getItem(key))

    const newBtn = document.createElement("button");
    newBtn.innerText=el;
    newBtn.addEventListener('click', function() {
    setUp(elData["cols"], elData["colours"])
    });
    newBtn.setAttribute('class', 'imageBtn');

    let image = new Image();
    let src=elData["image"];
    image.src = src;
    image.style.height="100px";
    image.style.width="100px";
    image.setAttribute('class','savedImage');
    console.log(elData);

    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'imageItem');

    newDiv.appendChild(image);
    newDiv.appendChild(newBtn);

    document.getElementById('imageGallery').appendChild(newDiv);
    

  } else {
   
  }
}
