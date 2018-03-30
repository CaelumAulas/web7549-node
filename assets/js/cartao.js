;(function(){
let cartoes = document.querySelectorAll('.cartao')

for(let index = 0; index < cartoes.length; index++) {
  const cartao = cartoes[index]

  cartao.addEventListener('focusin', function() {
    this.classList.add('cartao--focado')
  })

  cartao.addEventListener('focusout', function() {
    this.classList.remove('cartao--focado')
  })
  
  // Event Delegation
  cartao.addEventListener("change", function(event){
    if(event.target.classList.contains("opcoesDoCartao-radioTipo")){
      cartao.style.backgroundColor = event.target.value
    }
  })

  cartao.addEventListener('click', function(event) {
    const isBtnRemove = event.target.classList.contains("opcoesDoCartao-remove")
    if(isBtnRemove){
      cartao.addEventListener('transitionend', (event) => {
        if (event.propertyName == 'opacity') {
          cartao.remove()
        }
      })   
      cartao.classList.add('cartao--some')
    }
  })


  cartao.addEventListener("keyup", function(event){
    const isLabelTipo = event.target.classList.contains("opcoesDoCartao-tipo")
    
    if(isLabelTipo && (event.key === "Enter" || event.key === " ")){
      event.target.click()
    }
    
    // if(event.key == "c" && event.ctrlKey){
    //   console.log("Copy")
    // }
  })
}
})()