// Array com os caminhos das imagens de fundo
var ImgFundo = [
    'imgfundo/img1.png',
    'imgfundo/img2.jpg',
    'imgfundo/img3.jpg',
    'imgfundo/img4.jpg',
    'imgfundo/img5.jpg',
    'imgfundo/img6.jpeg',
    'imgfundo/img7.jpg',
    'imgfundo/img8.jpg',
];

// Função para escolher aleatoriamente uma imagem de fundo
function alterarFundo() {
    var indice = Math.floor(Math.random() * ImgFundo.length);
    var imagemSelecionada = ImgFundo[indice]; // Corrigido para ImgFundo
    document.body.style.backgroundImage = 'url(' + imagemSelecionada + ')';
}

// Chama a função para definir o fundo inicialmente
alterarFundo();

// Define um intervalo para alterar a imagem de fundo a cada 10 segundos (10000 milissegundos)
setInterval(alterarFundo, 10000);  // Altera a cada 10 segundos

// Funções existentes para mostrar e ocultar pop-ups
function showPopup() {
    document.getElementById("popup-overlay").style.display = "block";
    document.getElementById("popup").style.display = "block";
}

function hidePopup() {
    document.getElementById("popup-overlay").style.display = "none";
    document.getElementById("popup").style.display = "none";
}

function showLoginPopup() {
    document.getElementById("popup-overlay").style.display = "block";
    document.getElementById("login-popup").style.display = "block";
}

function hideLoginPopup() {
    document.getElementById("popup-overlay").style.display = "none";
    document.getElementById("login-popup").style.display = "none";
}
