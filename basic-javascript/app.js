var col = -1;
function getColumn() {
    col++;
    if(col == 4) {
        col = 0;
    }
    return col;
}

function loadImage (file) {
    var reader = new FileReader();
    var img = document.createElement('img');
    
    reader.onload = function (e) {
        img.src = e.target.result;
        document.querySelectorAll('.column-img')[getColumn()].appendChild(img);
    };
    reader.readAsDataURL(file);
}

function readURL(input) {
    if (input.files && input.files[0]) {
        document.querySelector('#count').value = `${input.files.length} file(s)`;
        for (var file of input.files) {
            loadImage(file);
        }
  
    }
}

var clearBtn = document.querySelector('#btn-clear');
clearBtn.addEventListener('click', function() {
    document.querySelectorAll('.column-img img').forEach(img => img.remove());
    col = -1;
})

