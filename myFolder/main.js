const variables = {
    stopBtn: document.querySelector('.stop'),
    startBtn: document.querySelector('.start'),
    resetBtn: document.querySelector('.reset'),
    input: document.querySelector('.input'),
    result: document.querySelector('.res'),
};

variables.input.value = 0;
variables.result.innerHTML = 0;
let timerId;

variables.startBtn.addEventListener('click', function() {
    if(variables.input.value < 0) {
        variables.input.value = 0;
        variables.result.innerHTML = 0;
    }
    variables.result.innerHTML = variables.input.value;
    clearInterval(timerId);
    timerId = setInterval(startCount, 1000);
})

variables.stopBtn.addEventListener('click', function() {
    clearInterval(timerId);
})

variables.resetBtn.addEventListener('click', function() {
    variables.input.value = 0;
    variables.result.innerHTML = 0;
})

function startCount() {
    if(variables.result.innerHTML > 0) {
        variables.result.innerHTML--;
        variables.input.value--;
        if(variables.input.value < 0) {
            variables.input.value = 0;
            variables.result.innerHTML = 0;
        }
    }
}

