
let num1 = parseFloat(prompt("1-sonni kiriting:"));
let num2 = parseFloat(prompt("2-sonni kiriting:"));
let num3 = parseFloat(prompt("3-sonni kiriting:"));


if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    alert("Iltimos, faqat son kiriting!");
} else {

    let average = (num1 + num2 + num3) / 3;
    alert("O'rtacha qiymat: " + average.toFixed(10));
}
