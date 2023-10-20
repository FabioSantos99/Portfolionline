function acessarDesc(n) {

    var descricao = "";

    if (n == 1) {

        descricao = "<p>Projeto feito com html e css. Login das minhas redes socias que aparecem na tela do celular ao clicar nos icones do lado esquerdo.</p>"
        document.getElementById('descricao').innerHTML = descricao;

    } 
     if (n == 2) {
        descricao = "<p>Playlist musical feito com Bootstrap, HTML e Javascript, criado função para adicionar musica em uma playlist e função de buscar musica no cabeçalho</p>"
        document.getElementById('descricao2').innerHTML = descricao;

    }
    if (n == 3) {
        descricao = "<p>Cofre que contem 3 moedas (real, euro e dolar cada uma possuindo uma lista diferente, com opção de converter todas as moedas em real e também remover valor anterior. Feito com Java</p>"
        document.getElementById('descricao3').innerHTML = descricao;
    }
}
