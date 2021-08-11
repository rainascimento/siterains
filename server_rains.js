
const http = require('http'); // importamos o http -- não se importe muito com isso agora 
const app = require('./app'); // aqui estamos pegando a exportação que fizemos no final do app.js
const port = process.env.PORT || 3000; // falamos qaul a porta que vamos trabalhar. Se a variavel de ambiente não existir ele vai de 3000 por padrão
const server = http.createServer(app);// aqui criamos o sevidor 
server.listen(port); //e falamos que o servidor vai escutar a porta que armazenamos na constante port. 
