(function () {
    var buttons = Array.from(document.querySelectorAll('button'));

    buttons.forEach(function (button) {
        button.onclick = function () {
            alert('You have bought a ' + this.parentElement.querySelector('h2').textContent);
        }
    });
})();
