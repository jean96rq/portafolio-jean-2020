let btnDropDown=document.querySelector('.btn-dropdown')
let dropdown=document.getElementById('dropodown')


btnDropDown.addEventListener('click',()=>{
    dropdown.classList.toggle('dropodownActive')
})

// Recorrer la clase activo por todos los <a> y limpiarlos
let enlaces = document.querySelectorAll('.link-cono');

if(enlaces){
enlaces.forEach((e)=>{
    e.addEventListener('click',(event)=>{
        enlaces.forEach((link)=>{
            link.classList.remove('activo');
        })
        event.target.classList.add('activo')

    })
})
}
let btnFront=document.getElementById('btn-front')
let btnBack=document.getElementById('btn-back')
let btnDiseño=document.getElementById('btn-diseño')
let contenedorFront=document.getElementById('box-front')
let contenedorBack=document.getElementById('box-back')
let contenedorDiseño=document.getElementById('box-diseño')


if(btnFront){
    btnFront.addEventListener('click',()=>{
        contenedorFront.style.display='grid'
        contenedorBack.style.display='none'
        contenedorDiseño.style.display='none'
    })
}
if(btnBack){
    btnBack.addEventListener('click',()=>{
        contenedorFront.style.display='none'
        contenedorBack.style.display='grid'
        contenedorDiseño.style.display='none'
    })
}
if(btnDiseño){
    btnDiseño.addEventListener('click',()=>{
        contenedorFront.style.display='none'
        contenedorBack.style.display='none'
        contenedorDiseño.style.display='grid'
    })
}


