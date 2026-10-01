// DOM Elements
const billInput = document.getElementById('bill');
const tipButtons = document.querySelectorAll('.tip-btn');
const customTipInput = document.getElementById('custom-tip');
const peopleInput = document.getElementById('people');
const peopleError = document.getElementById('people-error');
const tipPerPersonEl = document.getElementById('tip-per-person');
const totalPerPersonEl = document.getElementById('total-per-person');
const overallTotalEl = document.getElementById('overall-total');
const overallTipEl = document.getElementById('overall-tip');
const resetBtn = document.getElementById('reset-btn');

// State
let billValue = 0.0;
let tipValue = 15; // default 15%
let peopleValue = 1;

function calculate() {
  if (peopleValue >= 1 && billValue > 0) {
    const tipTotal = billValue * (tipValue / 100);
    const overallTotal = billValue + tipTotal;

    const tipPerPerson = tipTotal / peopleValue;
    const totalPerPerson = overallTotal / peopleValue;

    tipPerPersonEl.textContent = `$${tipPerPerson.toFixed(2)}`;
    totalPerPersonEl.textContent = `$${totalPerPerson.toFixed(2)}`;
    overallTotalEl.textContent = `$${overallTotal.toFixed(2)}`;
    overallTipEl.textContent = `$${tipTotal.toFixed(2)}`;

    resetBtn.disabled = false;
  } else {
    tipPerPersonEl.textContent = '$0.00';
    totalPerPersonEl.textContent = '$0.00';
    overallTotalEl.textContent = '$0.00';
    overallTipEl.textContent = '$0.00';
  }
}

// Bill Input Listener
billInput.addEventListener('input', () => {
  billValue = parseFloat(billInput.value) || 0.0;
  calculate();
});

// Tip Buttons
tipButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    tipButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    customTipInput.value = '';
    tipValue = parseFloat(btn.dataset.tip);
    calculate();
  });
});

// Custom Tip Input
customTipInput.addEventListener('input', () => {
  tipButtons.forEach(b => b.classList.remove('active'));
  tipValue = parseFloat(customTipInput.value) || 0;
  calculate();
});

// People Input
peopleInput.addEventListener('input', () => {
  peopleValue = parseInt(peopleInput.value, 10);

  if (isNaN(peopleValue) || peopleValue <= 0) {
    peopleError.classList.add('visible');
    peopleInput.style.borderColor = 'var(--danger)';
    peopleValue = 0;
  } else {
    peopleError.classList.remove('visible');
    peopleInput.style.borderColor = 'var(--border)';
  }

  calculate();
});

// Reset Function
resetBtn.addEventListener('click', () => {
  billInput.value = '';
  customTipInput.value = '';
  peopleInput.value = '1';
  billValue = 0.0;
  tipValue = 15;
  peopleValue = 1;

  tipButtons.forEach(b => b.classList.remove('active'));
  document.querySelector('.tip-btn[data-tip="15"]').classList.add('active');

  peopleError.classList.remove('visible');
  peopleInput.style.borderColor = 'var(--border)';

  calculate();
  resetBtn.disabled = true;
});
