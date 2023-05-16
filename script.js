const resultClick = document.querySelector('.click-result');
resultClick.addEventListener('click', () => alert('уря!'));

const inputBlur = document.querySelector('.input-lose');
inputBlur.onblur = () => alert('ждем возвращения')

const inputValue = document.querySelector('.input-text');
const buttonValue = document.querySelector('.button-text');
buttonValue.addEventListener('click', () => {
    buttonValue.value = inputValue.value
})