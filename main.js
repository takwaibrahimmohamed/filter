let mainCard = document.querySelector(".cards ")
let cards = Array.from(document.querySelectorAll(".cards img"))
let pizza = document.querySelector('.pizza')
let burger = document.querySelector('.burger')
let pasta =document.querySelector('.pasta')
all = document.querySelector('.fill')
all.addEventListener(('click'),()=>{
    cards.forEach((e)=>{
        e.classList.add('active')

    })
})
pizza.addEventListener('click',()=>{
    cards.filter((card)=>{
        card.classList.remove('active')
        filterFood = card.dataset.food
        if(filterFood == 'pizza'){
          card.classList.add('active')
        }
        
    })
})
pasta.addEventListener('click',()=>{
    cards.filter((card)=>{
        card.classList.remove('active')
        filterFood = card.dataset.food
        if(filterFood == 'pasta'){
          card.classList.add('active')
        }
        
    })
})
burger.addEventListener('click',()=>{
   
    cards.filter((card)=>{
        card.classList.remove('active')
        filterFood = card.dataset.food
        if(filterFood == 'burger'){
          card.classList.add('active')
        }
        
    })
})











