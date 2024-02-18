const form = document.getElementById('form-confirm');

let formValid = false;

function numbervalid (ValA, ValB){
    return ValB > ValA;
}

form.addEventListener('submit', function(e){
    e.preventDefault(); //previne carregamento da página após "submit"
    let ValA = parseFloat(document.getElementById('valor-a').value);
    let ValB = parseFloat(document.getElementById('valor-b').value);

    const messageSuccess = 'formulario enviado com sucesso! Verificando: <b> Valor A menor que Valor B!</B>';
    const containerMessageSuccess = document.querySelector('.success-message');

    const messageError = 'Erro ao enviar! valor b menor que o valor a'
    const containerMessageError = document.querySelector('.error-message')
    
    formValid = numbervalid(ValA, ValB);
    
    if (formValid){
        document.querySelector('.error-message').style.display = 'none';
        containerMessageSuccess.innerHTML = messageSuccess;
        containerMessageSuccess.style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';

        ValA = '';
        ValB = '';
    } else {
        document.querySelector('.success-message').style.display = 'none';
        containerMessageError.innerHTML = messageError;
        containerMessageError.style.display = 'block';
        document.querySelector('.success-message').style.display = 'none'
        
    }    
})