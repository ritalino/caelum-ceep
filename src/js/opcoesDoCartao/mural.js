; (function ($) {
    let contador = document.querySelectorAll('.cartao').length;
    const listaCartoes = []

    function criarCartao(conteudo) {

        contador++;
        // const $cartao =  document.createElement('article');
        // $cartao.addClass('cartao');
        // $cartao.setAttribute('tabindex', '0');

        // const $tagConteudo = document.createElement('p');
        // $tagConteudo.addClass;

        const $cartao = $(`<article id="cartao_${contador}" style="background:${conteudo.cor}" class="cartao" tabindex="0">
            <div class="opcoesDoCartao">
              <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
                <svg><use xlink:href="#iconeRemover"></use></svg>
              </button>
    
              <input type="radio" name="corDoCartao${contador}" value="#EBEF40" id="corPadrão-cartao${contador}" class="opcoesDoCartao-radioTipo" ${conteudo.cor ? '' : 'checked'}>
              <label for="corPadrão-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
                Padrão
              </label>
    
              <input type="radio" name="corDoCartao${contador}" value="#F05450" id="corImportante-cartao${contador}" class="opcoesDoCartao-radioTipo">
              <label for="corImportante-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
                Importante
              </label>
    
              <input type="radio" name="corDoCartao${contador}" value="#92C4EC" id="corTarefa-cartao${contador}" class="opcoesDoCartao-radioTipo">
              <label for="corTarefa-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
                Tarefa
              </label>
    
              <input type="radio" name="corDoCartao${contador}" value="#76EF40" id="corInspiração-cartao${contador}" class="opcoesDoCartao-radioTipo">
              <label for="corInspiração-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
                Inspiração
              </label>
            </div>
            <p class="cartao-conteudo" contenteditable tabindex="0">` + conteudo.conteudo + `</p>
          </article>`);

        $('.mural').prepend($cartao);

        $cartao.on('focusin', function () {
            // console.log('fazend os bglh funcionarem');
            $cartao.addClass('cartao-focado');
        })

        $cartao.on('focusout', function () {
            // console.log('fazend os bglh funcionarem');
            $cartao.removeClass('cartao-focado');
        })

        $cartao.on('change', function (event) {
            const $elementoAtual = $(event.target);
            const isRadioTipo = $elementoAtual.hasClass('opcoesDoCartao-radioTipo');

            //Delegate
            if (isRadioTipo) {
                const novaCor = $elementoAtual.val();
                $($cartao).css('background', novaCor);

            }
        })

        $cartao.on('keydown', function (event) {
            console.log('teste', event);
            const $elementoAtual = $(event.target);
            const isLabel = $elementoAtual.hasClass('opcoesDoCartao-opcao');

            if (isLabel && (event.key === 'Enter' || event.key === ' ')) {
                $elementoAtual.click();
            }
        })

        $cartao.on('click', function (event) {
            const $elementoAtual = $(event.target);
            const isRemover = $elementoAtual.hasClass('opcoesDoCartao-remove');

            if (isRemover) {
                $cartao.addClass('cartao--somePeixinho');

                $cartao.on('transitionend', function () {
                    $cartao.remove();
                })
            }
        })

    }

    $cartao.on('click', function (event) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://ceep.herokuapp.com/cartoes/carregar/?usuario=rita')
        xhr.send();
        xhr.responseType = "json"

        xhr.addEventListener("load", function () {
            const ajudas = xhr.response.cartoes;
            // const ajudas = JSON.parse(textao).instrucoes;
            // const cores = ['pink','black','orange','silver','white'];
            ajudas.forEach(ajuda => criarCartao(ajuda));
        })
    })

    window.criarCartao = criarCartao
    window.listaCartoes = listaCartoes

})(jQuery)