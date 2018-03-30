;(function() {
  const btnAjuda = document.querySelector('#btnAjuda')

  btnAjuda.classList.remove('no-js')

  btnAjuda.addEventListener('click', () => {
    const xhr = new XMLHttpRequest()

    xhr.open('GET', 'http://localhost:8080/cartoes/instrucoes')
    xhr.responseType = 'json'
    xhr.send()

    xhr.addEventListener('load', () => {
      const cartoes = xhr.response.instrucoes

      cartoes.forEach((cartao) => {
        window.ceep.adicionaCartao(cartao.conteudo)
      })
    })
  })
})()