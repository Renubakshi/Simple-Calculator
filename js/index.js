const buttons = document.querySelectorAll('.btn');
const input = document.querySelector('#text');
let string = "";
for (let name of buttons) {
    name.addEventListener('click', function () {
        if (name.textContent == "=") {
            string = eval(string)
            input.value = string;
        } else if (name.textContent == "C") {
            string = ""
            input.value = string;
        } else if (name.textContent == "©") {
            string = string.slice(0, string.length - 1)
            input.value = string
        } else {
            string += name.textContent;
            input.value = string;
        }
    })
}
// CLICK EVENT- COLOR CHANGING
const btn = document.querySelectorAll(".btn");
for (let name of btn) {

    name.addEventListener('click', colorChange);
    function colorChange() {
        name.style = 'box-shadow:inset .3rem .2rem 2.7rem var(--dark-blue)';

        name.addEventListener('mouseleave', coloChange);
        function coloChange() {
            name.removeAttribute('style');
        }
    }
}
