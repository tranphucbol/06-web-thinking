var col = -1;
updateCount();
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
        updateCount();
    };
    reader.readAsDataURL(file);
}

function readURL(input) {
    if (input.files && input.files[0]) {
        for (var file of input.files) {
            loadImage(file);
        }
  
    }
}

function updateCount() {
    var length = document.querySelectorAll('.column-img img').length;
    document.querySelector('#count').value = `${length} file(s)`;
    if(length === 0) {
        document.querySelector('.notification').style.display = "block";
    } else {
        document.querySelector('.notification').style.display = "none";
    }
}

var clearBtn = document.querySelector('#btn-clear');
clearBtn.addEventListener('click', function() {
    document.querySelectorAll('.column-img img').forEach(img => img.remove());
    col = -1;
    updateCount();
})

