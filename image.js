// import html2canvas from 'html2canvas';

document.getElementById("imgBtn").addEventListener("click", function() {
	html2canvas(document.getElementById("wrapper")).then(function (canvas) {			
            let anchorTag = document.createElement("a");
			document.body.appendChild(anchorTag);
            console.log(canvas.toDataURL);
			document.getElementById("previewImg").appendChild(canvas);
			anchorTag.download = "filename.jpg";
			anchorTag.href = canvas.toDataURL();
			anchorTag.target = '_blank';
			anchorTag.click();
		});
 });