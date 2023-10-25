$(document).ready(function() {
    $('#carrousel-imagem').slick({
        autoplay: true,
    });

    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000') 

    $('form').validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
            },
            veiculo: {
                required: false,
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome.'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let cmpincorreto = validador.numberOfInvalids();
            if (cmpincorreto) {
                alert(`Existem ${cmpincorreto} campos incorretos!`)
            }
        }
    })

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');

        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)

    })
})