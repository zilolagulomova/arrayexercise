const heading = document.querySelector(".heading");
const headingTwo = document.querySelector(".heading2");
const headingThree = document.querySelector(".heading3");
const headingFour = document.querySelector(".heading4");

/////////////////////////////////
// BIRINCHI MASALA

////////////////////////////////////
// IKKINCHI MASALA

let array = ["Jazz", "Blues", "Rock-n-Roll"];

array[0] = "Classic";
array.unshift("Rap", "Reggae");
headingThree.textContent = array;
for (let item of array) {
  if (item.length % 2 != 0) {
    console.log(item);
  }
}

/////////////////////////////////
// UCHUNCHI MASALA

let salaries = {
  Akmal: 1200,
  Salim: 5200,
  Karima: 1800,
};

let sum = 0;
let val = Object.values(salaries);

const sumSalaries = (val) => {
  for (salary of val) {
    sum = sum + salary;
  }
  return sum;
};

heading.textContent = sumSalaries(val);

////////////////////////////////////////////
// TO'RTINCHI MASALA

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [];

let sumOne = 0;
let sumTwo = 0;

for (let arr of arr1) {
  if (arr == null || arr == "") {
    arr2;
  }
  if (arr % 2 == 0) {
    sumOne = sumOne + arr;
  }
  if (arr % 2 != 0) {
    sumTwo = sumTwo + arr;
  }
}
arr2.push(sumOne, sumTwo);
// console.log(arr2);
headingTwo.textContent = arr2;
