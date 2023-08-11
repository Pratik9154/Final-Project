window.onload=function(){

let Hmenu = document.querySelector('#Hmenu')
// let head = document.getElementsByClassName('head')
let Header = document.querySelector('Header')
let head = document.querySelector('.head')

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

Hmenu.addEventListener('click',()=>{ head.style.disply='flex'})

// localStorage.clear('loc')

 Open1 =()=>{
    
    // window.open('file:///F:/Final%20Project/cloth.html','_self')
    localStorage.setItem('f1',a=1)
}
Open2 =()=>{
    
    // window.open('file:///F:/Final%20Project/cloth.html','_self')
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

Open5 =()=>{
    window.open('file:///F:/Final%20Project/cloth2.html','_self')
    localStorage.setItem('f1',a=1)
}
Open6 =()=>{
    window.open('file:///F:/Final%20Project/cloth2.html','_self')
    localStorage.setItem('f1',a=2)
}
Open7 =()=>{
    window.open('file:///F:/Final%20Project/cloth2.html','_self')
    localStorage.setItem('f1',a=3)
}
Open8 =()=>{
    window.open('file:///F:/Final%20Project/cloth2.html','_self')
    localStorage.setItem('f1',a=4)
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

Item5.addEventListener('click',Open5)
Item6.addEventListener('click',Open6)
Item12.addEventListener('click',Open7)
Item16.addEventListener('click',Open8)

Item9.addEventListener('click',Open9)
Item10.addEventListener('click',Open10)
Item11.addEventListener('click',Open11)
Item13.addEventListener('click',Open12)

Item7.addEventListener('click',Open13)

Item8.addEventListener('click',Open14)
Item14.addEventListener('click',Open15)
Item15.addEventListener('click',Open16)

// module.exports = { a };

let local = document.querySelector('#local')
local.addEventListener('click',()=>{ localStorage.clear('loc')
    localStorage.clear('fck')
})
// let arr2=[];
let AddLocal = document.querySelector('#AddLocal')
AddLocal.addEventListener('click',()=>{console.log(localStorage.getItem('fku'))})
}
// 
// AddLocal.addEventListener('click',()=>{
//     arr2[i] =localStorage.getItem(`store`)})
//     console.log(arr2[1])
// }
// export var la=10;

