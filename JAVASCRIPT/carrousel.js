'use strict'

const grande = document.querySelector('.grande')
const punto = document.querySelectorAll ('.punto')

//CUANDO CLICK en punto
    //Saber la posicion de ese punto 
    //Aplicar un transform translatex al grande
    // QUITAR la clase activo de TODOS puntos
    //Añadir la clase activo al punto que hemos hecho clik 


//recorrer TODOS los puntos    
punto.forEach( (cadaPunto , i )=> {
    //Asignamos un CLICK a cada punto
    punto[i].addEventListener('click', ()=>{

        let posicion = i 
        let operacion = posicion * -50


        grande.style.transform = `translateX(${ operacion }%) `

        punto.forEach( ( cadaPunto , i )=>{
            punto[i].classList.remove('activo')
        })

        punto[i].classList.add('activo')

    })

})




