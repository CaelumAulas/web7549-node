;(function() {
    let numeroDoCartao = 0

    window.ceep = {}

    window.ceep.adicionaCartao = function (conteudo) {
    const mural = document.querySelector('.mural')

        const templateCartao = ` 
        <article id="cartao_${numeroDoCartao}" tabindex="0" class="cartao">
            <div class="opcoesDoCartao">
            <button id="remove_2" class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
                <svg><use xlink:href="#iconeRemover"></use></svg>
            </button>

            <input type="radio" name="corDoCartao2" value="#EBEF40" id="corPadrão-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo" checked>
            <label for="corPadrão-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
                Padrão
            </label>

            <input type="radio" name="corDoCartao2" value="#F05450" id="corImportante-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
            <label for="corImportante-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
                Importante
            </label>

            <input type="radio" name="corDoCartao2" value="#92C4EC" id="corTarefa-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
            <label for="corTarefa-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
                Tarefa
            </label>

            <input type="radio" name="corDoCartao2" value="#76EF40" id="corInspiração-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
            <label for="corInspiração-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
                Inspiração
            </label>
            </div>
            <p class="cartao-conteudo" contenteditable tabindex="0">${conteudo}</p>
        </article>`

        const cartao = $(templateCartao) 
        

        cartao.on('click', (event) => {
            const btn = $(event.target)

            if(btn.hasClass("opcoesDoCartao-remove")){
                cartao.on('transitionend', (event) => {
                    
                    if (event.originalEvent.propertyName == 'opacity') {
                        cartao.remove()
                    }
                })   
                cartao.addClass('cartao--some')
            }
        })

        cartao.on("change", function(event){
            const btnColor = $(event.target)

            if(btnColor.hasClass("opcoesDoCartao-radioTipo")){
                cartao.css('background-color', btnColor.val())
                console.log(cartao)
            }
        })

        $('.mural').append(cartao)

        console.log(numeroDoCartao)

        numeroDoCartao++
    }
})()