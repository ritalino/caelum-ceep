;(function(){ //IIFE
    const form = document.querySelector('.formNovoCartao');
    let contador = document.querySelectorAll('.cartao').length;

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const $campoDeConteudo = document.querySelector('.formNovoCartao-conteudo')
        const conteudo = $campoDeConteudo.value.trim();

        if(conteudo === "") {
            const $msgErro = document.createElement('error');
            // $msgErro.addClass('formNovoCartao-msg')
            // $msgErro.textContent = "Formulário Inválido";

            $msgErro.innerHTML = `<div class="formNovoCartao-msg">Formulário Inválido</div>`;

            document.querySelector('.formNovoCartao-salvar')
                .insertAdjacentElement('beforebegin', $msgErro);
            
            // form.insertBefore($msgErro, document.querySelector('.formNovoCartao-salvar'));

            $msgErro.on('animationend', function() {
                $msgErro.remove();
            })

        } else {
            // criarCartao
            criarCartao(conteudo);     
          
        }

        $campoDeConteudo.value = '';
    })


    form.classList.remove('no-js');

})()