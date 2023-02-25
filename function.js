
document.getElementById('boton').onclick= function()
{
    
    var img = document.getElementById('foto')
    var valor= document.getElementById('boton')
    if (valor.innerHTML=="Ocultar imagen") {
        img.style.display = "none"
        document.getElementById('boton').innerHTML = "Mostrar imagen"
    }
    else {
        img.style.display= "block"
        document.getElementById('boton').innerHTML = "Ocultar imagen"
    }

} 
document.getElementById('boton_leer').onclick= function(){
    var txt=document.getElementById('txt_oculto')
    var valor2= document.getElementById('boton_leer')
    if (valor2.innerHTML=="Leer más"){
        txt.style.display= "block"
        document.getElementById('boton_leer').innerHTML = "Ocultar texto"
    }
    else{
        txt.style.display= "none"
        document.getElementById('boton_leer').innerHTML = "Leer más"
    }
}

const form=document.getElementById('form')
const button=document.getElementById('submit')

const nombre=document.getElementById('nombre_de_la_compania')
const email=document.getElementById('email')
const puesto=document.getElementById('puesto')
const msg=document.getElementById('msg')
const listInputs=document.querySelectorAll(".form-input")


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let condicion=validarFormulario();
    if (condicion){
        enviarFormulario();
    }
    
})
function validarFormulario(){
    form.lastElementChild.innerHTML = ''
    let condicion = true;
    listInputs.forEach((element) =>{
    element.lastElementChild.innerHTML=""
    })
    if (nombre_de_la_compania.value.trim().length < 1){
        mostrarMensajeError('nombre_de_la_compania', '*Por favor,ingrese el nombre de la compañía');
        condicion = false;
    }
    if (email.value.trim().length < 1){
        mostrarMensajeError('email','*Por favor,ingrese su E-mail')
        condicion = false;
    }
    if (puesto.value.trim().length < 1){
        mostrarMensajeError('puesto','*Por favor,ingrese el puesto ofrecido')
        condicion = false;
    }
    return condicion;
}
function mostrarMensajeError(claseinput,mensaje){
    let elemento = document.querySelector(`.${claseinput}`);
        elemento.lastElementChild.innerHTML = mensaje;
    

}
function enviarFormulario(){
    form.reset();
    form.lastElementChild.innerHTML ='Su formulario se ha enviado correctamente!'
}