var munieco = document.querySelector(".contenedor-munieco");
var h3 =document.querySelector(".contenedor-titulo");


function ocultarImg(){
    munieco.classList.add("ocultar");
    h3.classList.add("ocultar");
}
function apareceImg(){
    munieco.classList.remove("ocultar");
    h3.classList.remove("ocultar");

}
function copiarTexto(){
    // Seleccionar el texto en el textarea
    let texto = document.getElementById("texto11").textContent;
    // Crear un elemento de texto temporal
    let elementoTemporal = document.createElement("textarea");
    elementoTemporal.value = texto;
    // Agregar el elemento temporal al documento
    document.body.appendChild(elementoTemporal);
    // Seleccionar el texto dentro del elemento temporal
    elementoTemporal.select();
    // Copiar el texto seleccionado
    document.execCommand("copy");
    // Eliminar el elemento temporal
    document.body.removeChild(elementoTemporal);
    // Mostrar un mensaje de confirmación

    Swal.fire({
        title: 'Texto copiado',
        icon: 'success',
        showConfirmButton: false,
        timer:750 // Duración en milisegundos antes de que la alerta se cierre automáticamente
      });
}
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function limpiarCaja() {
    document.querySelector(".area").value = '';
}

function encriptar(){
    let textoEncriptar = document.querySelector(".area").value;
    let textoEncriptado = '';   
    if(textoEncriptar.trim() === ''){
        apareceImg();
    }
    else{
        ocultarImg();
        console.log(typeof(textoEncriptar));
        console.log(textoEncriptar.length);
        for(let i = 0; i < textoEncriptar.length; i++ ){
            let letraActual = textoEncriptar[i];
            switch (letraActual){
                case 'a':
                    textoEncriptado = textoEncriptado + 'ai';
                    break;
                case 'e':
                    textoEncriptado = textoEncriptado + 'enter';
                    break;
                case 'i':
                    textoEncriptado = textoEncriptado + 'imes';
                    break;
                case 'o':
                    textoEncriptado = textoEncriptado + 'ober';
                    break;
                case 'u':
                    textoEncriptado = textoEncriptado + 'ufat';
                    break;
                default:
                    textoEncriptado = textoEncriptado + letraActual;
            }
        }
        asignarTextoElemento('#texto11', textoEncriptado);
        limpiarCaja();  
    }
}
function desencriptar() {
    let textoEncriptado = document.querySelector(".area").value;
    let textoDesencriptado = "";
    if(textoEncriptado.trim() === ''){
        apareceImg()
    }
    else{
        ocultarImg()
        for (let i = 0; i < textoEncriptado.length; i++) {
            let letraActual = textoEncriptado[i];
            switch (letraActual) {
                case 'a':
                    if (textoEncriptado[i + 1] === 'i') {
                        textoDesencriptado += 'a';
                        i++; // Avanzamos un carácter extra para evitar duplicación
                    } else {
                        textoDesencriptado += letraActual;
                    }
                    break;
                case 'e':
                    if (textoEncriptado.substring(i, i + 5) === 'enter') {
                        textoDesencriptado += 'e';
                        i += 4; // Avanzamos cuatro caracteres extra para evitar duplicación
                    } else {
                        textoDesencriptado += letraActual;
                    }
                    break;
                case 'i':
                    if (textoEncriptado.substring(i, i + 4) === 'imes') {
                        textoDesencriptado += 'i';
                        i += 3; // Avanzamos tres caracteres extra para evitar duplicación
                    } else {
                        textoDesencriptado += letraActual;
                    }
                    break;
                case 'o':
                    if (textoEncriptado.substring(i, i + 4) === 'ober') {
                        textoDesencriptado += 'o';
                        i += 3; // Avanzamos tres caracteres extra para evitar duplicación
                    } else {
                        textoDesencriptado += letraActual;
                    }
                    break;
                case 'u':
                    if (textoEncriptado.substring(i, i + 4) === 'ufat') {
                        textoDesencriptado += 'u';
                        i += 3; // Avanzamos tres caracteres extra para evitar duplicación
                    } else {
                        textoDesencriptado += letraActual;
                    }
                    break;
                default:
                    textoDesencriptado += letraActual;
            }
        }
            asignarTextoElemento('#texto11', `${textoDesencriptado}`);
            limpiarCaja();
}
}
