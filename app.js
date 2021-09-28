const express = require('express'); // Aqui importamos todo conteudo já programado pelo criador do express que instalamos e armazenamos essas coisas dentro da constante express
const bodyParser = require('body-parser'); // armazeno o body-parser numa constante
var nodemailer = require('nodemailer');
const app = express(); // falamos que app vai receber o metodo express e vai se comportar como rota "route" 

app.use(express.static(__dirname + '/public')) // Aqui estamos dizendo que a pasta para acesso dos arquivos de front será a "public"

app.use(bodyParser.urlencoded({ extended: false })); // estamos falando que os itens que vem an url serão convertivos se true e não se false. 
app.use(bodyParser.json()); // Aqui estamos falando que vamos converter tudo que vem do <body> em json


// Aqui vamos criar nossa rota principal. sempre que for localhost:3000/ irá cair nessa rota.
app.get('/', (req, res) => {

    res.sendFile(__dirname + '/index.html') // Essa será a resposta enviada para o front ele está enviando o arquivo index.html para ser apresentado na tela.
});



app.post('/',(req,res) =>  {

    var remetente = nodemailer.createTransport({

        host: "smtp.gmail.com",
        service: 'smtp.gmail.com',
        port: '465',
        secure: true,
        auth: {
            user: 'rainscorporativo@gmail.com',
            pass: 'r@1ns3108'
        }
    })

    var emailASerEnviado = {
        from: req.body.emailmob,
        to: 'rainscorporativo@gmail.com',
        subject: 'Contato de Cliente Com a RAINS',
        text: 'Contato Do Cliente\n' +"Nome: "+ req.body.nomemob + "\n" +"Email: "+
            req.body.emailmob + " \n " +"Número: "+
            req.body.numeromob + "\n" +"Mensagem: "+
            req.body.mensagemmob
    };
    console.log(req.body.nomemob)
    console.log(req.body.emailmob)
    console.log(req.body.nomemob)
    console.log(req.body.nomemob)

    remetente.sendMail(emailASerEnviado, function (error) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email enviado com sucesso.');
            
        }
    });
    res.status(200).sendFile(__dirname + '/public/index.html');
})


/* DESKTOP 

app.post('/',(req,res) =>  {

    var remetente = nodemailer.createTransport({

        host: "smtp.gmail.com",
        service: 'smtp.gmail.com',
        port: '465',
        secure: true,
        auth: {
            user: 'rainscorporativo@gmail.com',
            pass: 'r@1ns3108'
        }
    })

    var emailASerEnviado = {
        from: req.body.email,
        to: 'rainscorporativo@gmail.com',
        subject: 'Contato de Cliente Com a RAINS',
        text: 'Contato Do Cliente\n' +"Nome: "+ req.body.nome + "\n" +"Email: "+
            req.body.email + " \n " +"Número: "+
            req.body.telefone + "\n" +"Mensagem: "+
            req.body.story
    };

    remetente.sendMail(emailASerEnviado, function (error) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email enviado com sucesso.');
        }
    });

})

*/





module.exports = app // aqui vai exportar esse app para o arquivo server.js 