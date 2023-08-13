// localStorage.setItem('name', 'Matt West');
const saveBtn = document.getElementById("artSave");
const savedArt = document.getElementById("savedArt");

saveBtn.addEventListener("click", function () {
    let span =  document.getElementById('errorMsg');
    span.innerHTML = "";
  if (!document.getElementById("artName").value) {
    let message = document.createElement("span");
    message.innerText = `Input a name.`;
    message.style.color = "pink";
    span.appendChild(message);
  } else {
    const artName = document.getElementById("artName").value;
    const artHtml = document.getElementById("wrapper");
    let colours = [];
    for (i = 0; i < artHtml.children.length; i++) {
      let pixel = artHtml.children[i];
      let pixelColour = pixel.style.backgroundColor;
      colours.push(`${pixelColour}`);
    }
    console.log(`col num:` + colNum)
    html2canvas(document.getElementById("wrapper")).then(function (canvas) {
      // localStorage.setItem(artName+"image",canvas.toDataURL());
      let data = {
        cols: colNum,
        rows: rowNum,
        html: artHtml,
        colours: colours,
        image: canvas.toDataURL(),
      };
      localStorage.setItem(artName, JSON.stringify(data));

      location.reload();
    });
  }
});
