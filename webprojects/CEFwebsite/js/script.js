const select = document.querySelectorAll('.selec');
const selectLength = select.length;
const box = document.querySelectorAll('.box');
const navlink = document.querySelectorAll('nav a');
console.log(box.length)
console.log(selectLength)

for (var i = 0; i < selectLength; i++){
    select[i].addEventListener('click', activateClass);
}

function activateClass(e, box) {
    for (var i = 0; i < selectLength; i++) {
        select[i].classList.remove('active');
    }
    e.target.classList.add('active');
    console.log(e)
}

