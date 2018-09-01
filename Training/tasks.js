// 1. Напишите цикл, который за 7 вызовов console.log выводит треугольник:

for(let i=0,str='#';i<7;i++) {
console.log(str);
str+='#';
}

//2. FizzBuzz
for(let i=1 ;i<=100; i++) {
         if(i%3==0) { console.log(i + ' - Fizz'); }
    else if(i%5==0) { console.log(i + ' - Buzz'); }
    else console.log(i);
}
//3. FizzBuzz исправленный
        // for(let i=1, str='i - ' ;i<=100; i++) {
            // if(i%3==0) str+= i + 'Fizz'
            // if(i%5==0) str+= i + 'Buzz'
            // console.log(str);
            // str='i - ';
        // }
for(let i=1,  str=i+' - ' ;i<=100;) {
    if(i%3==0) str+='Fizz'
    if(i%5==0) str+='Buzz'
    console.log(str);
    str=++i +' - ';
}

//4. Шахматная доска
let str='';
for(let i=1 ;i<=8; i++) {
    for(let j=1 ;j<=8; j++) {
        ((i+j)%2==0) ? str+='#' : str+=' '
    }
    str+='\n'
}
console.log(str);
//5. Шахматная доска с вводом размера доски
let string = prompt('Введите количество строк: ',8);
let column = prompt('Введите количество столбцов: ',8);
let str='';
for(let i=1 ;i<=string; i++) {
    for(let j=1 ;j<=column; j++) {
        ((i+j)%2==0) ? str+='#' : str+=' '
    }
    str+='\n'
}
console.log(str);

//6. Минимум
        // function min(a,b) {
            // a<b ? console.log(a) : console.log(b)
        // }
        // min(0,-10);
function min(a,b) {
    if(a<b) return(a) 
    return(b)
}
console.log(min(0,-10));

//7. Считаем бобы

        // function countBs(str) {
        //     let k = 0;
        //     for(let i=0; i < str.length; i++) 
        //     str[i]=='B' ? k++ : '';
        //     console.log(k);
        // }
        // countBs('aBBaBB B');
function countBs(str) {
    let k = 0;
    for(let i=0; i < str.length; i++) 
    str[i]=='B' ? k++ : '';
    return k;
}
console.log(countBs('aBBaBB B'));

//семь с половиной. Рекурсия
function isEven(i){
    (i<0) ? i=-1*i: i;
if(i%2==0) return true 
return false
}
console.log(isEven(-56));

//8. Считаем бобы дополненная

function countBs(str, ch) {
    let k = 0;
    for(let i=0; i < str.length; i++) 
    str[i]==ch ? k++ : '';
    console.log(k);
}
countBs('aBBaBB B',' ');

//9. 10. Сумма диапазона и сумма диапозона с отрицательным шагом

let a = [];
function sum(a) {
    let k=0;
    for(let i=0; i < a.length; i++) 
    k+=a[i];
    return k;
}
function range(start, end, step) {
    typeof step !== 'undefined' ? step : step = 1;
    if(step<0) {
    for(let i=start; i >= end ; i+=step) 
    a.push(i);}
    else {
    for(let i=start; i <= end ; i+=step) 
    a.push(i);}
    return a, sum(a);
}
// range(1,10);
// range(1,10,2);
// console.log(a);
console.log(a, range(10,1,-2));

//11. 12. Обращаем вспять массив, выдавая новый массив(reverseArray) и Обращаем вспять входной массив(reverseArrayInPlace)

function reverseArray (a) {
    let b = [];
    for(let i=a.length-1, k=0; i>=0; i--, k++) {
        b[k]=a[i];
    }
    return b;
}
let a = [1,2,3,4,5,6,'qw'];
console.log(reverseArray(a));


function reverseArrayInPlace (a) {
    for(let i=0, k=0; i < a.length/2; i++) {
        k=a[i];
        a[i] = a[a.length-1-i];
        a[a.length-1-i]=k;
    }
    return a;
}
let a = [1,2,3,4,5];
console.log(reverseArrayInPlace(a));
