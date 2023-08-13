// control z 
function KeyPress(e) {
    if (e.keyCode == 90 && e.ctrlKey) alert("Ctrl+z");
}

document.onkeydown = KeyPress;

