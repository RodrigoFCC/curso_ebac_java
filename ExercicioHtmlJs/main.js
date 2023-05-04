const form = document.getElementById('form-validar');
const numeroA = document.getElementById('valor-a');
const numeroB = document.getElementById('valor-b');
let formValido = false;

function validaNumero(){
    return numeroB.value > numeroA.value;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const mensagemSucesso = `O número <b>${numeroB.value}</b> é maior que o número <b>${numeroA.value}</b>`
    console.log(numeroA.value , numeroB.value);
    console.log(validaNumero());
    formValido = validaNumero();
    if (formValido){  
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        numeroA.value = "";
        numeroB.value = "";
    }else{
        numeroB.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'none';
    }
})

numeroB.addEventListener('keyup', function(e){
    formValido = validaNumero();
    if (!formValido){  
        numeroB.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    }else{
        numeroB.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
})