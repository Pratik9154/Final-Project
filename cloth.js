
// import{a} from './cloth.html'
// import {la} from './website.js';
var i=0;
let ab=0;
let d=0;

window.onload = function (){

let Bigimg=document.querySelector('#Bigimg')
// let Smallimg1=document.querySelector('#Smallimg1');     
let Smallimg1=document.querySelector('#Smallimg1');      
let Smallimg2=document.querySelector('#Smallimg2');      
let Smallimg3=document.querySelector('#Smallimg3');      
let Smallimg4=document.querySelector('#Smallimg4');      


let CartBtn= document.querySelector('#CartBtn');
let size=document.querySelector('#Select_size');
// let Mysize= size.value;
// let quantity1 = document.getElementById('quantity');
// let quantity2= quantity1.value
let price = document.querySelector('price').innerHTML;

let form= document.querySelector('form')
let sizeOpt;
let b;
// console.log(a)

// -----------------get the item on which we clikcked---------

// console.log(localStorage.getItem('f1'))
let ItemNo = localStorage.getItem('f1')


// switch(ItemNo){
//     case 1:{
//             // Bigimg.src=Smallimg2.src
//             Smallimg2.addEventListener('mouseleave',()=>{return Bigimg.src=Smallimg1.src})
//             Smallimg3.addEventListener('mouseleave',()=>{return Bigimg.src=Smallimg1.src})
//             Smallimg4.addEventListener('mouseleave',()=>{return Bigimg.src=Smallimg1.src})

//     }
//     break;
//     case 2:{
//         Bigimg.src=Smallimg2.src
//         Smallimg2.addEventListener('mouseleave',()=>{return Bigimg.src=Smallimg2.src})
//         Smallimg3.addEventListener('mouseleave',()=>{return Bigimg.src=Smallimg2.src})
//         Smallimg4.addEventListener('mouseleave',()=>{return Bigimg.src=Smallimg2.src})
//         console.log('jj');
//     }
//     break;
//     case 3:{
//         Bigimg.src=Smallimg3.src
//         Smallimg2.addEventListener('mouseleave',()=>{return Bigimg.src=Smallimg3.src})
//         Smallimg3.addEventListener('mouseleave',()=>{return Bigimg.src=Smallimg3.src})
//         Smallimg4.addEventListener('mouseleave',()=>{return Bigimg.src=Smallimg3.src})
//     }
//     break;   
//     case 4:{
//         Bigimg.src=Smallimg4.src
//         Smallimg2.addEventListener('mouseleave',()=>{return Bigimg.src=Smallimg4.src})
//         Smallimg3.addEventListener('mouseleave',()=>{return Bigimg.src=Smallimg4.src})
//         Smallimg4.addEventListener('mouseleave',()=>{return Bigimg.src=Smallimg4.src})
//     }
//     break;
// }

// ------------------mouse hover image change---------------

if(ItemNo==1){
    Smallimg2.addEventListener('mouseleave',()=>{return Bigimg.src=Smallimg1.src})
    Smallimg3.addEventListener('mouseleave',()=>{return Bigimg.src=Smallimg1.src})
    Smallimg4.addEventListener('mouseleave',()=>{return Bigimg.src=Smallimg1.src})
}else if(ItemNo==2){
    Bigimg.src=Smallimg2.src
    Smallimg2.addEventListener('mouseleave',()=>{return Bigimg.src=Smallimg2.src})
    Smallimg3.addEventListener('mouseleave',()=>{return Bigimg.src=Smallimg2.src})
    Smallimg4.addEventListener('mouseleave',()=>{return Bigimg.src=Smallimg2.src})
    console.log('jj');
}
else if(ItemNo==3){
    Bigimg.src=Smallimg3.src
    Smallimg2.addEventListener('mouseleave',()=>{return Bigimg.src=Smallimg3.src})
    Smallimg3.addEventListener('mouseleave',()=>{return Bigimg.src=Smallimg3.src})
    Smallimg4.addEventListener('mouseleave',()=>{return Bigimg.src=Smallimg3.src})
}
else if(ItemNo==4){
    Bigimg.src=Smallimg4.src
    Smallimg2.addEventListener('mouseleave',()=>{return Bigimg.src=Smallimg4.src})
    Smallimg3.addEventListener('mouseleave',()=>{return Bigimg.src=Smallimg4.src})
    Smallimg4.addEventListener('mouseleave',()=>{return Bigimg.src=Smallimg4.src})
}

Smallimg1.addEventListener('mouseenter',()=>{return Bigimg.src=Smallimg1.src})

// Smallimg2.addEventListener('mouseleave',()=>{return Bigimg.src=ImageS.src})
Smallimg2.addEventListener('mouseenter',()=>{return Bigimg.src=Smallimg2.src})


// Smallimg2.addEventListener('mouseleave',()=>{return Bigimg.src=ImageS.src})
Smallimg2.addEventListener('mouseenter',()=>{return Bigimg.src=Smallimg2.src})
// // Smallimg2.addEventListener('click',()=>{return Bigimg.src=Group1.img_2})



// Smallimg3.addEventListener('mouseleave',()=>{return Bigimg.src=ImageS.src})
Smallimg3.addEventListener('mouseover',()=>{return Bigimg.src=Smallimg3.src})

// Smallimg4.addEventListener('mouseleave',()=>{return Bigimg.src=ImageS.src})
Smallimg4.addEventListener('mouseover',()=>{return Bigimg.src=Smallimg4.src})


// ----------------------addding data in the Object------------------
let data1={
    product : 0,
    prices : 0,
    sizes : 0,
    quantitys: 0
}
let data2={
    product : 0,
    prices : 0,
    sizes : 0,
    quantitys: 0
}
let data3={
    product : 0,
    prices : 0,
    sizes : 0,
    quantitys: 0
}
// let arr = [data1,data2,data3]
let arr=[data1,data2,data3]

// let SizeOpt = ()=>{

// }
size.addEventListener('click',(e)=>{
sizeOpt=e.target.value;
})
// quantity.addEventListener('click',(a)=>{
//      b=a;
// })

let z=0;
func=()=>{ 

if( localStorage.getItem('loc')!=undefined)
{
    z = localStorage.getItem('loc')
}
// console.log(localStorage.setItem('loc',z))                  
// console.log(localStorage.getItem('loc'))

    z++;     
    localStorage.setItem('loc',z)
    console.log(localStorage.getItem('loc'))                       
    // console.log(z)
    
}
let fuck = JSON.stringify(arr)

localStorage.setItem('fck',fuck)

let add=()=>{

var fku = JSON.parse(localStorage.getItem('fck'))

console.log(fku)
    
fku[z].prices = price;
fku[z].qantitys =quantity;
fku[z].sizes = sizeOpt;
fku[z].quantitys=document.querySelector('#quantity').value;
console.log(fku)
console.log(fku[z].quantitys)
console.log(fku[z].prices);
console.log(fku[z].sizes)
console.log(fku[z].quantitys)
// let string = JSON.stringify(arr)
console.log(fku)

// console.log(string)
// localStorage.setItem('store',string)


// localStorage.setItem(`store${z}`,arr[z])

// console.log(arr[i])
// console.log(i)
// i++;

// localStorage.setItem('str',string)
++i;
console.log(z);
}

// console.log(i)
// form.addEventListener('submit',add)
// console.log(total1)
CartBtn.addEventListener('click',add)
// CartBtn.addEventListener('click',()=>{ ab++
//     console.log(ab)})

localStorage.setItem('aray',arr)
// console.log(a);


let Item1 = document.querySelector('#item1')
let Item2 = document.querySelector('#item2')
let Item3 = document.querySelector('#item3')
let Item4 = document.querySelector('#item4')
let Item5 = document.querySelector('#item5')
let Item6 = document.querySelector('#item6')
let Item7 = document.querySelector('#item7')
let Item8 = document.querySelector('#item8')
let Item9 = document.querySelector('#item9')
let Item10 = document.querySelector('#item10')
let Item11 = document.querySelector('#item11')
let Item12 = document.querySelector('#item12')
let Item13 = document.querySelector('#item13')
let Item14 = document.querySelector('#item14')
let Item15 = document.querySelector('#item15')
let Item16 = document.querySelector('#item16')
let a=0;



// ------------------------for opening the item details---------------

Open1 =()=>{
    
    window.open('file:///F:/Final%20Project/cloth.html','_self')
    localStorage.setItem('f1',a=1)
}
Open2 =()=>{
    
    window.open('file:///F:/Final%20Project/cloth.html','_self')
    localStorage.setItem('f1',a=2)
}
 Open3 =()=>{
    
    window.open('file:///F:/Final%20Project/cloth.html','_self')
    localStorage.setItem('f1',a=3)
}
Open4 =()=>{
    
    window.open('file:///F:/Final%20Project/cloth.html','_self')
    localStorage.setItem('f1',a=4)
}

// Open5 =()=>{
//     window.open('file:///F:/Final%20Project/cloth2.html','_self')
//     localStorage.setItem('f1',a=1)
//     // console.log('kkk')
// }
// Open6 =()=>{
//     window.open('file:///F:/Final%20Project/cloth2.html','_self')
//     localStorage.setItem('f1',a=2)
// }
// Open7 =()=>{
//     window.open('file:///F:/Final%20Project/cloth2.html','_self')
//     localStorage.setItem('f1',a=3)
// }
// Open8 =()=>{
//     window.open('file:///F:/Final%20Project/cloth2.html','_self')
//     localStorage.setItem('f1',a=4)
}

Open9=()=>{
    window.open('file:///F:/Final%20Project/cloth3.html','_self')
    localStorage.setItem('f1',a=1)
}
Open10=()=>{
    window.open('file:///F:/Final%20Project/cloth3.html','_self')
    localStorage.setItem('f1',a=2)
}
Open11=()=>{
    window.open('file:///F:/Final%20Project/cloth3.html','_self')
    localStorage.setItem('f1',a=3)
}
Open12=()=>{
    window.open('file:///F:/Final%20Project/cloth3.html','_self')
    localStorage.setItem('f1',a=4)
}
Open13=()=>{
    window.open('file:///F:/Final%20Project/cloth4.html','_self')
    localStorage.setItem('f1',a=1)
}
Open14=()=>{
    window.open('file:///F:/Final%20Project/cloth4.html','_self')
    localStorage.setItem('f1',a=2)
}
Open15=()=>{
    window.open('file:///F:/Final%20Project/cloth4.html','_self')
    localStorage.setItem('f1',a=3)
}
Open16=()=>{
    window.open('file:///F:/Final%20Project/cloth4.html','_self')
    localStorage.setItem('f1',a=4)
}



Item1.addEventListener('click',Open1)
Item2.addEventListener('click',Open2)
Item3.addEventListener('click',Open3)
Item4.addEventListener('click',Open4)

// Item5.addEventListener('click',Open5)
// Item6.addEventListener('click',Open6)
// Item12.addEventListener('click',Open7)
// Item16.addEventListener('click',Open8)

Item9.addEventListener('click',Open9)
Item10.addEventListener('click',Open10)
Item11.addEventListener('click',Open11)
Item13.addEventListener('click',Open12)

Item7.addEventListener('click',Open13)
Item8.addEventListener('click',Open14)
Item14.addEventListener('click',Open15)
Item15.addEventListener('click',Open16)
// module.exports = { a };


 
// const a=require('./website.js')
// console.log(bd)