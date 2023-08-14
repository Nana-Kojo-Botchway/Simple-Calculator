(function () {
    const screen = document.querySelector('.screen');
    const buttons = document.querySelectorAll('.btn');
    const clear = document.querySelector('.btn-clear');
    const equal = document.querySelector('.btn-equal');

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            const value = e.target.dataset.num;
            if (value) {
                screen.value += value;
            }
        });
    });

    clear.addEventListener('click', function () {
        screen.value = '';
    });

    equal.addEventListener('click', function () {
        try {
            const expression = screen.value;
            if (expression === '') {
                screen.value = '';
            } else {
                const answer = eval(expression);
                screen.value = answer;
            }
        } catch (error) {
            console.error('An error occurred:', error);
            screen.value = 'Error';
        }
    });
})();
