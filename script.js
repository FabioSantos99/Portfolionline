const projectsList = [
    {
        id: 0,
        nome: "Projeto Social",
        link: "https://fabiosantos99.github.io/Projeto-Social/",
        img: "projeto-social.png",
        descricao: "Site criado com HTML e Css, simulando um smartphone com minhas redes sociais.",
        tipo: "front-end"
    },

   {
        id: 1,
        nome: "Playlist",
        link: "https://fabiosantos99.github.io/Interface-Musical/",
        img: "playlist.png",
        descricao: "Site playlist criado com framework Bootstrap e linguagem JavaScript e uso de LocalStorage para salvar dados.",
        tipo: "front-end"
    },

    {
        id: 2,
        nome: "Conversor e Cofre",
        link: "https://drive.google.com/drive/folders/1sraI6U4BmNrjxzgTHckwaN0wgZ_FT1N4?usp=sharing",
        img: "tela_cofrinho.png",
        descricao: "Projeto feito em Java, cofre e conversor em Euro e Dolar. Usado classes abstratas, heranças e polimorfismos e arrays",
        tipo: "back-end"
    },

    {
        id: 3,
        nome: "QR Code Generator",
        link: "https://fabiosantos99.github.io/QrCodeJs/",
        img: "qr_image.png",
        descricao: "Projeto gerador de qr code feito com linguagens HTML, CSS e Javascript",
        tipo: "front-end"
    },

    {
        id: 4,
        nome: "Xadrez",
        link: "",
        img: "chess_image.png",
        descricao: "Jogo de xadrez feito com os principais conceitos de Java: Lambda, Heranças, classes abstratas, arrays, try e catch. Veja o projeto clicando na imagem acima.",
        tipo: "front-end"
    },
]

const projectBody = document.getElementById("boxes");

function bodyProject() {

    projectBody.innerHTML = "";
    for(let index = 0; index < projectsList.length; index++) {

        projectBody.innerHTML += 

        `<div class="project-div">
            <div>
            <h2>${projectsList[index].nome}</h2>
            <a href="${projectsList[index].link}" target="_blank"><img src="./img/${projectsList[index].img}" alt="projeto-social"></a>
            </div>
            <div>
            <p>${projectsList[index].descricao}</p> 
            </div>
        </div> `
    }
}

function menuShow() {

    let menuMobile = document.querySelector('.box-menu');
    
    if (menuMobile.classList.contains('open')) {
          menuMobile.classList.remove('open');
          document.querySelector('.icon').src = "img/ui.png"
    } else {
          menuMobile.classList.add('open');
          document.querySelector('.icon').src = "img/close.png"
    }
}

bodyProject();