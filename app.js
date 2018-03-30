const express = require('express') // importando o express
const nunjucks = require('nunjucks') // importando o nunjucks, nossa view engine, cara que vai cuidar dos nossos HTML

const app = express() // criando um servidor
const port = 8080 // configuração da porta

nunjucks.configure('views', {
  autoescape: true,
  express: app
})

// cria pasta pública, para conseguirmos acessar pelo browser os arquivos .css, .js e as imagens da vida
app.use(express.static('./assets'))

// Criando um recurso (caminho ou path)
app.get('/', (req, res) => {
  res.render('index.html')
})

app.get('/cartoes/instrucoes', (req, res) => {
  const instrucoes = '{"instrucoes":[{"conteudo":"Bem vindo ao Ceep!","cor":"#FFAA10"},{"conteudo":"O site é otimizado para celulares!","cor":"#45AAEE"},{"conteudo":"Para mudar o layout, clique no botão Linha do cabeçalho","cor":"#FF1010"}]}'

  res.send(instrucoes)
  // res.json(JSON.parse(instrucoes))
})

// Coloca o servidor de pé
app.listen(port, () => {
  console.log(`Servidor de pé em http://localhost:${port}`)
  console.log('Pra derrubar o servidor: ctrl + c')
})









