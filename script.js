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
        link: "https://fabiosantos99.github.io/Projetos_Back-End/",
        img: "chess_image.png",
        descricao: "Jogo de xadrez feito com os principais conceitos de Java: Lambda, Heranças, classes abstratas, arrays, try e catch. Veja o projeto clicando na imagem acima.",
        tipo: "back-end"
    },
]

const projectBody = document.getElementById("boxes");
const wrapper = document.querySelector(".wrapper");

function bodyProject() {

    projectBody.innerHTML = "";
    for(let index = 0; index < projectsList.length; index++) {

        projectBody.innerHTML += 
        `
        <div class="card project-div">
            <div>
            <h2>${projectsList[index].nome}</h2>
            <a href="${projectsList[index].link}" target="_blank"><img src="./img/${projectsList[index].img}" alt="projeto-social"><span class="access">Acessar <i class="bi bi-box-arrow-up-right"></i> </span></a>
            </div>
            <p>${projectsList[index].descricao}</p>
        </div>`
    }
}

// Menu Responsivo
function menuShow() {

    let menuMobile = document.querySelector('.box-menu');
    
    if (menuMobile.classList.contains('open')) {
          menuMobile.classList.remove('open');
          document.querySelector('.icon').src = "img/ui.png"

        
    } else {
          menuMobile.classList.add('open');
          document.querySelector('.icon').src = "img/close.png"
    }
    
    const aboutClick = document.querySelector(".about-link").addEventListener("click", () => {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/ui.png"
        return aboutClick;

    })

    const formClick = document.querySelector(".form-link").addEventListener("click", () => {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/ui.png"

    })

    const projClick = document.querySelector(".proj-link").addEventListener("click", () => {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/ui.png"

    })

    const contClick = document.querySelector(".cont-link").addEventListener("click", () => {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/ui.png"

    })

    const downloadClick = document.querySelector(".downloadRes").addEventListener("click", () => {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/ui.png"

    })
    
}

// carousel
const rightButton = document.querySelector(".right");
const leftButton = document.querySelector(".left");
var scrollAmount = 0;
var scrollMin = 0
var scrollMax = 400;

rightButton.onclick = () => {
    document.querySelector("#boxes").scrollTo({
        top: 0,
        left: Math.max(scrollAmount += 400, scrollMax),
        behavior: 'smooth',
    });
}

leftButton.onclick = () => {
    document.querySelector("#boxes").scrollTo({
        top: 0,
        left: Math.min(scrollAmount -= 400, scrollMin),
        behavior: 'smooth',
    });
}


bodyProject();

