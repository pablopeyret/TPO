let botonvalidacion = document.getElementById("submit");
botonvalidacion.addEventListener("click", validatesent);
function validatesent(){
    let formulario = document.querySelector("#form");
    let name = document.querySelector("#fullname");
    let mail = document.querySelector("#email");
    let phone = document.querySelector("#tel");
    let asun = document.querySelector("#asunto");
    let msg = document.querySelector("#mensaje");
    let contador = 0;

    if (name.value.length < 3){
        alert("ingresa tu nombre completo")
        event.preventDefault();
        name.focus();
        return 0;
    }

    for (let i = 0; i < mail.value.length; i++){

        if (mail.value[i] == "@"){
            contador +=1;
        }
    }

    if (contador !=1){
        alert("ingrese un email valido")
        mail.focus();
        event.preventDefault();
        return 0;
    }

    if (isNaN(parseInt(phone.value))){
        alert("ingrese un telefono valido")
        event.preventDefault();
        phone.focus();
        return 0;
    }

    if (asun.value == ""){
        alert("ingrese un asunto")
        event.preventDefault();
        return 0;
    }

    if (msg.value == ""){
        alert("ingrese un mensaje")
        event.preventDefault();
        msg.focus();
        return 0;
    }
    alert("Mensaje enviado correctamente");
    formulario.submit();


}


















