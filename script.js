const btnScrollto = document.querySelector('#learn-more-btn')
const navLinks = document.querySelectorAll('.nav_item_links')
console.log(navLinks);
const navLinkparent = document.querySelector('#nav_links')
const section1 = document.querySelector('#section-1');


btnScrollto.addEventListener('click' , (e) => {
    section1.scrollIntoView({behavior : 'smooth'})
  
})
navLinks.forEach(function(el) {
    el.addEventListener('click' , function (e) {
        
        e.preventDefault()
        const id = this.getAttribute('href')
        console.log(id);
        document.querySelector(id).scrollIntoView({behavior : 'smooth'})
 })
 

})
console.log(getComputedStyle(btnScrollto).color);


// tabs component 
const tabs = document.querySelectorAll('.tabs')
const tabContainer = document.querySelector('#section-2-hero')

// ONE More WAy to implement Smoot scrolling 
//1 add event listnter to comman parent elem 
// 2 determine what elem originated event 

// navLinkparent.addEventListener('click'  , function(e){
//     e.preventDefault()
//     if(e.target.classList.contains('nav_item_links')){
 
//         const id = e.target.getAttribute('href')
    
//         document.querySelector(id).scrollIntoView({behavior : 'smooth'})
 
//   }

// } )
 

















// const h1 =  document.querySelector('h1')
// h1.addEventListener( 'dblclick ' , () => {
//     alert('Hey this is work')
// })

// const randomColor = () => {
//     hex = [0 ,1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 , 'A' , 'B' , 'C' ,'D' , 'E' , 'F'  ]
//     color = '#';
//     for(let i = 0 ; i < 6 ; i++){

//      color = color + hex[Math.trunc(Math.random() * 15)]
//     }
//    return color ;

// }
// document.querySelector('nav')

// document.querySelector('nav').addEventListener('click' , function (e) {
    
//     this.style.backgroundColor = randomColor()
//     console.log( 'nav' , e.target);   
// } , true)
// document.querySelector('#nav_links').addEventListener('click' , function (e) {
//     this.style.backgroundColor = randomColor()
//     console.log( 'Ul' , e.target);   
// })
// document.querySelector('.nav_items').addEventListener('click' , function(e){
//     this.style.backgroundColor = randomColor()
//     console.log("feature" , e.target);
//     // e.stopPropagation()
// })