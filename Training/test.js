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
