'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Ashirvad Jena',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Honey Singh',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Harpreet Kaur',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Johny Simpson',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const displaymovements = movements => {
  containerMovements.innerHTML = '';
  movements.forEach((movement, index) => {
    const type = movement > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
      <div class="movements__value">₹${movement}</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcPrintBalance = movements => {
  const balance = movements.reduce(
    (accumulator, current) => accumulator + current,
    0
  );
  labelBalance.textContent = `₹${balance}`;
};

displaymovements(account1.movements);
calcPrintBalance(account1.movements);

/*

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const rupeeToUsd = 0.014;
const movementsUsd = movements.map(movement => movement * rupeeToUsd);
console.log(movementsUsd);

const createUsernames = accountsE => {
  let acc = [...accountsE];
  acc.forEach(user => {
    user.username = user.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
};

console.log(createUsernames(accounts));
console.log(accounts);

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log('You deposited' + i);
  } else {
    console.log('You winthdrew' + i);
  }
}

movements.forEach((movement, index, array) =>
  console.log(movement, index, array)
);

/////////////////////////////////////////////////
//SLICE
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2));
console.log(arr);

//SPLICE
console.log(arr.splice(-1));
console.log(arr);

// REVERSE mutates
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

console.log(arr.concat(arr2));
console.log([...arr, ...arr2]);
*/
