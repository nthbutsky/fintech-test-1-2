// TASK ONE
const inputOne = document.querySelector('#input1');
const btnOne = document.querySelector('#btn1');
const outputOne = document.querySelector('#output1');

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
}

btnOne.addEventListener('click', function () {
  const result = formatNumber(inputOne.value);
  outputOne.innerHTML = result;
});

// TASK TWO

const inputTwo = document.querySelector('#input2');

inputTwo.addEventListener('input', handleInput, false);

function handleInput(e) {
  e.target.value = applyMask(e.target.value);
}

function applyMask(num) {
  return num.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}
