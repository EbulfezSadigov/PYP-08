var cells = document.querySelectorAll('td');
var candidates = document.querySelectorAll('.candidates');
var value = document.querySelectorAll('.value');

var control = document.querySelectorAll('.number-control');
var candidateSwitch = document.querySelectorAll('#candidate-switch');

var arr = [];

var selectCell;
var selectNumber;

cells.forEach((cell) => {
    cell.addEventListener("click", ()=> {
        cell.classList.add('selected');
        selectCell != cell && selectCell?.classList.remove('selected');
        selectCell = cell;
    });
});

control.forEach(num => {
    num.addEventListener('click', function () {
        if (candidateSwitch[0].checked) {
            !arr.includes(num.innerText) && arr.push(num.innerText);
            selectCell.children[0].innerText = arr.sort().toString().replaceAll(',', '');
        } else {
            selectCell.children[1].innerText = num.innerHTML;
        }
    })
})