let count1 = 0;
let count2 = 0;
let added1 = 1;
let added2 = 1;

let incrBtn1 = document.getElementById("increase1");
let decrBtn1 = document.getElementById("decrease1");
let resetBtn1 = document.getElementById("reset1");
let incrBtn2 = document.getElementById("increase2");
let decrBtn2 = document.getElementById("decrease2");
let resetBtn2 = document.getElementById("reset2");

let incrBtnBoth = document.getElementById("increaseBoth");
let decrBtnBoth = document.getElementById("decreaseBoth");
let resetBtnBoth = document.getElementById("resetBoth");

let counter1 = document.getElementById("counter1");
let counter2 = document.getElementById("counter2");

let input1 = document.getElementById("numInput1");
let input2 = document.getElementById("numInput2");
input1.value = added1
input2.value = added2

change = function(count, number){
    count.textContent = number;
}

incrBtn1.onclick = function(){
    added1 = Math.round(eval(input1.value) * 100) / 100;
    count1 += added1;
    count1 = Math.round(count1 * 100) / 100;
    change(counter1, count1);
}

incrBtn2.onclick = function(){
    added2 = Math.round(eval(input2.value) * 100) / 100;
    count2 += added2;
    count2 = Math.round(count2 * 100) / 100;
    change(counter2, count2);
}

incrBtnBoth.onclick = function(){
    added1 = Math.round(eval(input1.value) * 100) / 100;
    added2 = Math.round(eval(input2.value) * 100) / 100;
    count1 += added1;
    count2 += added2;
    count1 = Math.round(count1 * 100) / 100;
    count2 = Math.round(count2 * 100) / 100;
    change(counter1, count1);
    change(counter2, count2);
}

decrBtn1.onclick = function(){
    added1 = Math.round(eval(input1.value) * 100) / 100;
    count1 -= added1;
    count1 = Math.round(count1 * 100) / 100;
    change(counter1, count1);
}

decrBtn2.onclick = function(){
    added2 = Math.round(eval(input2.value) * 100) / 100;
    count2 -= added2;
    count2 = Math.round(count2 * 100) / 100;
    change(counter2, count2);
}

decrBtnBoth.onclick = function(){
    added1 = Math.round(eval(input1.value) * 100) / 100;
    added2 = Math.round(eval(input2.value) * 100) / 100;
    count1 -= added1;
    count2 -= added2;
    count1 = Math.round(count1 * 100) / 100;
    count2 = Math.round(count2 * 100) / 100;
    change(counter1, count1);
    change(counter2, count2);
}

resetBtn1.onclick = function(){
    count1 = 0;
    change(counter1, count1);
}

resetBtn2.onclick = function(){
    count2 = 0;
    change(counter2, count2);
}

resetBtnBoth.onclick = function(){
    count1 = 0;
    count2 = 0;
    change(counter1, count1);
    change(counter2, count2);
}
