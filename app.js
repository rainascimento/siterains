const express = require('express'); // Aqui importamos todo conteudo já programado pelo criador do express que instalamos e armazenamos essas coisas dentro da constante express
const bodyParser = require('body-parser'); // armazeno o body-parser numa constante

const app = express(); // falamos que app vai receber o metodo express e vai se comportar como rota "route" 

app.use(express.static(__dirname + '/public')) // Aqui estamos dizendo que a pasta para acesso dos arquivos de front será a "public"

app.use(bodyParser.urlencoded({ extended: false })); // estamos falando que os itens que vem an url serão convertivos se true e não se false. 
app.use(bodyParser.json()); // Aqui estamos falando que vamos converter tudo que vem do <body> em json


// Aqui vamos criar nossa rota principal. sempre que for localhost:3000/ irá cair nessa rota.
app.get('/', (req, res) => {

    res.sendFile(__dirname + '/index.html') // Essa será a resposta enviada para o front ele está enviando o arquivo index.html para ser apresentado na tela.
});

module.exports = app // aqui vai exportar esse app para o arquivo server.js 