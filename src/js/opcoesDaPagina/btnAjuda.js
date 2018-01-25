; (function ($, criarCartao) {
    const $btnAjuda = document.querySelector('#btnAjuda');

    $btnAjuda.classList.remove('no-js');

    $btnAjuda.addEventListener('click', () => {
        // const ajudas = [
        //     {msg: "add cartao", cor:'pink'},
        //     {msg: "remover cartao", cor:'lime'},
        //     {msg: "mudar a cor", cor:'orange'},
        //     {msg: "arrumar a coluna", cor:'silver'},
        //     {msg: "acessivelzaodaporra", cor:'white'}
        // ];

        const xhr = new XMLHttpRequest();
        xhr.open('GET','http://ceep.herokuapp.com/cartoes/instrucoes')
        xhr.send();
        xhr.responseType = "json"

        xhr.addEventListener("load", function(){
            const ajudas = xhr.response.instrucoes;
            // const ajudas = JSON.parse(textao).instrucoes;
            // const cores = ['pink','black','orange','silver','white'];
            ajudas.forEach(ajuda => criarCartao(ajuda));
        })
        

        // var document = {
        //     querySelector
        // }
    })


})($, criarCartao)