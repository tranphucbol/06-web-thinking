function showColor() {
    var r = document.querySelector('#red .text').innerText;
    var g = document.querySelector('#green .text').innerText;
    var b = document.querySelector('#blue .text').innerText;
    document.querySelector('.color-preview').style.background = `rgb(${r}, ${g}, ${b})`;
    document.querySelector('.color-preview-text').innerHTML = `#${hexColor(r)}${hexColor(g)}${hexColor(b)}`;
}

function hexColor(value) {
    var hex = parseInt(value).toString(16).toUpperCase(); 
    return hex.length === 2 ? hex : '0' + hex;
}

showColor();

document.querySelector('#red input[type=range]').addEventListener('input', function(e) {
    document.querySelector('#red .text').innerText = e.target.value;
    showColor();
});

document.querySelector('#green input[type=range]').addEventListener('input', function(e) {
    document.querySelector('#green .text').innerText = e.target.value;
    showColor();
});

document.querySelector('#blue input[type=range]').addEventListener('input', function(e) {
    document.querySelector('#blue .text').innerText = e.target.value;
    showColor();
});