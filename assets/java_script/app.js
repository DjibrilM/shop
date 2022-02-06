

const menuBtn = document.querySelector('#menu-icon');
const nav = document.querySelector('#navbar-list');
const mainDocument =document.querySelector('main');
const backdrop = document.querySelector('.backdrop_before-loading-the-page');
const propositionBox = document.querySelector('.proposition_box');
let callBackNumber =  document.querySelector('.proposition-time_out');
let closeProposition = document.querySelector('.proposition-time_out-close');
const taggleMenu = ()=>{
    nav.classList.toggle('visible');
}

menuBtn.addEventListener('click',taggleMenu)

/// ============== spiner =========



const loadingFunction = ()=>{
    setTimeout(() => {
        backdrop.classList.add('keep_invisible');
        mainDocument.classList.add('visible');
      }, 1000);
}

window.addEventListener('load',loadingFunction);


// ============= proposition ========================


let littleFunction = (Element)=>{
setTimeout(() => {
    Element.style.display = 'none'
    closeProposition.style.display = 'block';
}, 1000);
}

let timeOutVariable = null;
let number
const decreaseTheAmount = ()=>{
     number = 6;
    timeOutVariable = setInterval(() => {
       number = --number;
        callBackNumber.innerHTML = number;
    console.log(number);
        if(number === 0)
        {
            number = 0;
            callBackNumber.innerHTML = number;
             clearInterval(timeOutVariable);
             littleFunction(callBackNumber);
        }
    }, 1000);
}
setTimeout(() => {
    propositionBox.classList.add('pushedTotheleft');
    decreaseTheAmount();
}, 5000);

closeProposition.addEventListener('click', ()=>{
    propositionBox.classList.remove('pushedTotheleft');
})

// SCOLL BUTTON 

this.addEventListener('scroll',()=>{

   if(this.scrollY >= 500)
   {
    TopButton.classList.add('scroll_buttonVisible');
   }else
   {
  
    TopButton.classList.remove('scroll_buttonVisible');

   }

})

const TopButton = document.querySelector('.scroll_button')
const scrollTop = ()=>{
    const toviewEl = document.querySelector('.toview')
    toviewEl.scrollIntoView({behavior:'smooth'});
}

TopButton.addEventListener('click',scrollTop);