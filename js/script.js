'use strict'
// let result = ['IvAn', 'AnnA', 'KseniA']
//
// const some=[4,4,4];
// console.log(some.every(item=>typeof(item)==="number"))
// const reduce=['apple','pear','plus'];
// const array=reduce.reduce((sum,current)=>`${sum}, ${current}`,3)
// console.log(array)
const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'aninal',

}
const newArr=Object.entries(obj)
    .filter(item=>item[1]==='persone')
    .map(item=>item[0])
console.log(newArr)