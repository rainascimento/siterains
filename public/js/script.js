function tamanho_tela(){
    var largura = window.screen.width;

    if(largura >= 414 ){

        document.querySelector(".fraseimg").style.left = 170;
    }

    if(largura <= 375 ){

        document.querySelector(".fraseimg").style.left = 130;
    }
}

/*

Com este snippet você consegue obter a altura e largura da área útil aberta no navegador

Ao redimensionar a tela, estes valores também serão alterados!

var largura = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;
var altura = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;
console.log(altura);
console.log(largura);*/