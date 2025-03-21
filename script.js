document.addEventListener('DOMContentLoaded',function(){

    const botaodeAcessibilidade=document.getElementById('botao-acessibilidade')
    const opçoeseeAcessibilidade=document.getElementById('opçoes-acessibilidade')
    
        botaodeAcessibilidade.addEventListener('click',function(){
        botaodeAcessibilidade.classList.toggle('rotacao-botao');
        botaodeAcessibilidade.classList.toggle('apresenta-lista');

        const botaoSelecionado=botaodeAcessibilidade.getAttribute('aria-expanded')==='true'
        botaodeAcessibilidade.setAttribute('aria-expanded',!botaoSelecionado)
    })

    const aumentaFonteBotao=document.getElementById('aumentar-fonte');
    const diminuiFonteBotao=document.getElementById('diminuir-fonte');

    const alternarContraste=document.getElementById('alternar-contraste')

    let tamanhoAtualFonte=1;

    aumentaFonteBotao.addEventListener('click',function(){
        tamanhoAtualFonte+=0.1;
        document.body.style.fontSize='${tamanhoAtualFonte}rem'
 
    })

        diminuiFonteBotao.addEventListener('click',function(){
        tamanhoAtualFonte-=0.1;
        document.body.style.fontSize='$(tamanhoAtualFonte)rem'

        })

        alternarContraste.addEventListener('click',function(){

            document.body.classList.toggle('alto-contraste')

        })

})

scrollReveal().reveal('#inicio',{delat:500});
scrollReveal().reveal('#tropicalia',{delat:500});
scrollReveal().reveal('#galeria',{delat:500});
scrollReveal().reveal('#contato',{delat:500});