$(document).ready(function(){
    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    })

    $('#telefone').mask("(00) 00000-0000");

    $('#cpf').mask("000.000.000-00");

    $('#cep').mask("00000-000");

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        
        },
        messages: {
            nome: 'Por favor, insira o seu nome completo',
            telefone: 'Por favor, insira o seu telefone',
            email: 'Por favor, insira o seu email',
            cpf: 'Por favor, insira o seu cpf',
            endereco: 'Por favor, insira o seu endereço completo',
            cep: 'Por favor, insira o seu cep'
        }
    })

})