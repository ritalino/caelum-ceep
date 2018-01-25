;(function(){
    const $btn = $("#btnSync");

    

    $('#btnSync').click(function(){
        xhr = new XMLHttpRequest();
        xhr.open("POST", "http://ceep.herokuapp.com/cartoes/salvar")
        xhr.setRequestHeader("Content-Type", "application/json")
        xhr.send(JSON.stringify({
            usuario: "rita"
            ,cartoes: listaCartoes
        }))
        $btn.addClass('botaoSync--esperando')

        xhr.addEventListener("load", function(){
            $btn.removeClass("botaoSync--deuRuim")
            $btn.addClass("botaoSync--deuBom")
            $btn.removeClass('botaoSync--esperando')
        })

        xhr.addEventListener("error", function(){
            $btn.removeClass("botaoSync--deuBom")
            $btn.addClass("botaoSync--deuRuim")
            $btn.removeClass('botaoSync--esperando')
        })
    })
    

    $btn.removeClass('no-js');


})()