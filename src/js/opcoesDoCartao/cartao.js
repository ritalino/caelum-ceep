// ;(function() {

// const cartoes = document.querySelectorAll('.cartao')

// for (let cartao of cartoes) {
//     cartao.addEventListener('focusin', function() {
//         // console.log('fazend os bglh funcionarem');
//         cartao.classList.add('cartao-focado');
//     })

//     cartao.addEventListener('focusout', function() {
//         // console.log('fazend os bglh funcionarem');
//         cartao.classList.remove('cartao-focado');
//     })

//     cartao.addEventListener('change', function(event) {
//         const $elementoAtual = event.target;
//         const isRadioTipo = $elementoAtual.classList.contains('opcoesDoCartao-radioTipo');

//         //Delegate
//         if (isRadioTipo) {
//             const novaCor = $elementoAtual.value;
//             cartao.style.background = novaCor;

//         }
//     })

//     cartao.addEventListener('keydown', function(event){
//         console.log('teste', event);
//         const $elementoAtual = event.target;
//         const isLabel = $elementoAtual.classList.contains('opcoesDoCartao-opcao');

//         if(isLabel && (event.key === 'Enter' || event.key === ' ')) {
//             $elementoAtual.click();
//         }
//     })

//     cartao.addEventListener('click', function(event) {
//         const $elementoAtual = event.target;
//         const isRemover = $elementoAtual.classList.contains('opcoesDoCartao-remove');

//         if (isRemover) {
//             cartao.classList.add('cartao--somePeixinho');
    
//             cartao.addEventListener('transitionend', function () {
//                 cartao.remove();
//             })
//         }
//     })
// }

// })()