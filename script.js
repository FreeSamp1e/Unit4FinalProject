// JavaScript goes here.
let q1c1Button = document.querySelector(".q1#c1");
let q1c2Button = document.querySelector(".q1#c2");
let q1c3Button = document.querySelector(".q1#c3");
let q1c4Button = document.querySelector(".q1#c4");
let q1c5Button = document.querySelector(".q1#c5");
let q1c6Button = document.querySelector(".q1#c6");

let q2c1Button = document.querySelector(".q2#c1");
let q2c2Button = document.querySelector(".q2#c2");
let q2c3Button = document.querySelector(".q2#c3");
let q2c4Button = document.querySelector(".q2#c4");
let q2c5Button = document.querySelector(".q2#c5");
let q2c6Button = document.querySelector(".q2#c6");

let q3c1Button = document.querySelector(".q3#c1");
let q3c2Button = document.querySelector(".q3#c2");
let q3c3Button = document.querySelector(".q3#c3");
let q3c4Button = document.querySelector(".q3#c4");
let q3c5Button = document.querySelector(".q3#c5");
let q3c6Button = document.querySelector(".q3#c6");

let q4c1Button = document.querySelector(".q4#c1");
let q4c2Button = document.querySelector(".q4#c2");
let q4c3Button = document.querySelector(".q4#c3");
let q4c4Button = document.querySelector(".q4#c4");
let q4c5Button = document.querySelector(".q4#c5");
let q4c6Button = document.querySelector(".q4#c6");

let q5c1Button = document.querySelector(".q5#c1");
let q5c2Button = document.querySelector(".q5#c2");
let q5c3Button = document.querySelector(".q5#c3");
let q5c4Button = document.querySelector(".q5#c4");
let q5c5Button = document.querySelector(".q5#c5");
let q5c6Button = document.querySelector(".q5#c6");

let firstQuestion = document.querySelector(".firstQuestion");
let secondQuestion = document.querySelector(".secondQuestion");
let thirdQuestion = document.querySelector(".thirdQuestion");
let fourthQuestion = document.querySelector(".fourthQuestion");
let fifthQuestion = document.querySelector(".fifthQuestion");

let results = document.querySelector(".results");
let result1 = document.querySelector("#result1");
let result2 = document.querySelector("#result2");
let result3 = document.querySelector("#result3");
let result4 = document.querySelector("#result4");
let result5 = document.querySelector("#result5");
let result6 = document.querySelector("#result6");
let value1 = 0;
let value2 = 0;
let value3 = 0;
let value4 = 0;
let value5 = 0;
let value6 = 0;

q1c1Button.addEventListener("click", function () {
    secondQuestion.style = "display: block";
    value1 = value1+1;
});
q1c2Button.addEventListener("click", function () {
    secondQuestion.style = "display: block";
    value2 = value2+1;
});
q1c3Button.addEventListener("click", function () {
    secondQuestion.style = "display: block";
    value3= value3 +1;
});
q1c4Button.addEventListener("click", function () {
    secondQuestion.style = "display: block";
    value4= value4 +1;
});
q1c5Button.addEventListener("click", function () {
    secondQuestion.style = "display: block";
    value5= value5 +1;
});
q1c6Button.addEventListener("click", function () {
    secondQuestion.style = "display: block";
    value6= value6 +1;
});



q2c1Button.addEventListener("click", function () {
    thirdQuestion.style = "display: block";
    value1 = value1+1;
});
q2c2Button.addEventListener("click", function () {
    thirdQuestion.style = "display: block";
    value2 = value2+1;
});
q2c3Button.addEventListener("click", function () {
    thirdQuestion.style = "display: block";
    value2 = value2+1;
});
q2c4Button.addEventListener("click", function () {
    thirdQuestion.style = "display: block";
    value4= value4 +1;
});
q2c5Button.addEventListener("click", function () {
    thirdQuestion.style = "display: block";
    value5 = value5+1;
});
q2c6Button.addEventListener("click", function () {
    thirdQuestion.style = "display: block";
    value6 = value6+1;
});



q3c1Button.addEventListener("click", function () {
    fourthQuestion.style = "display: block";
    value1= value1 +1;
});
q3c2Button.addEventListener("click", function () {
    fourthQuestion.style = "display: block";
    value2= value2 +1;
});
q3c3Button.addEventListener("click", function () {
    fourthQuestion.style = "display: block";
    value3= value3 +1;
});
q3c4Button.addEventListener("click", function () {
    fourthQuestion.style = "display: block";
    value4= value4 +1;
});
q3c5Button.addEventListener("click", function () {
    fourthQuestion.style = "display: block";
    value5= value5 +1;
});
q3c6Button.addEventListener("click", function () {
    fourthQuestion.style = "display: block";
    valu6= value6 +1;
});



q4c1Button.addEventListener("click", function () {
    fifthQuestion.style = "display: block";
    value1= value1 +1;
});
q4c2Button.addEventListener("click", function () {
    fifthQuestion.style = "display: block";
    value2 = value2+1;
});
q4c3Button.addEventListener("click", function () {
    fifthQuestion.style = "display: block";
    value3 = value3+1;
});
q4c4Button.addEventListener("click", function () {
    fifthQuestion.style = "display: block";
    value4 = value4+1;
});
q4c5Button.addEventListener("click", function () {
    fifthQuestion.style = "display: block";
    value5 = value5+1;
});
q4c6Button.addEventListener("click", function () {
    fifthQuestion.style = "display: block";
    value6 = value6+1;
});




q5c1Button.addEventListener("click", function () {
    results.style = "display: block";
    value1= value1 +1;
    result1.style = "display: block";
});

q5c2Button.addEventListener("click", function () {
    results.style = "display: block";
    value2 = value2+1;
    result2.style = "display: block";
});

q5c3Button.addEventListener("click", function () {
    results.style = "display: block";
    value3 = value3+1;
    result3.style = "display: block";
});

q5c4Button.addEventListener("click", function () {
    results.style = "display: block";
    value4 = value4+1;
    result4.style = "display: block";
});
q5c5Button.addEventListener("click", function () {
    results.style = "display: block";
    value5 = value5+1;
    result5.style = "display: block";
});

q5c6Button.addEventListener("click", function () {
    results.style = "display: block";
    value6= value6 +1;
    result6.style = "display: block";
});