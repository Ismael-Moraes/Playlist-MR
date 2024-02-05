const botaoPlayPause = document.getElementById('play-pause');
const botaoProximo = document.getElementById('proximo');
const botaoAnterior = document.getElementById('anterior');
const audioMusica= document.getElementById('audio-musica');
const nomemusica = document.getElementById('musica')
const imagemMusica = document.getElementById('imagem')
const nomeMusica = document.getElementById('nome-musica')
const nomeBanda = document.getElementById('nome-autor')

/* mudar icone*/
function tocarFaixa(){
    audioMusica.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill');
}
function pausarFaixa(){
    audioMusica.pause();
    botaoPlayPause.classList.add('bi-play-circle-fill');
    botaoPlayPause.classList.remove('bi-pause-circle-fill');
}
/* mudar icone*/


const numeromusicas =  10;
let taTocando = 0;
let musicaAtual = 1;
let imagemAtual = 1;

function tocarOuPausar(){
    if (taTocando === 0){
        tocarFaixa();
        taTocando = 1;
    } else{
        pausarFaixa();
        taTocando = 0;
    }
}

function trocarNomeFaixa(){
    nomemusica.innerText = 'Música ' + musicaAtual;
    imagemMusica.src = "./images/" + imagemAtual +".jpg"
}

const playlist = ["Imagine Dragons", "Imagine Dragons", "Imagine Dragons", "Alan Walker", "Sarah Cothran", "Alan Walker", "Alan Walker", "Imagine Dragons", "TheFatRat", "TheFatRat"];
const musicas = ["Enemy", "Believer", "Bones", "Faded", "As The World Caves In", "Darkside", "Alone", "Legends Never Die", "The Calling", "Xenogenesis"]
let musicaNome = 0
let nomeAtual = 0
nomeBanda.innerText = playlist[nomeAtual];
nomeMusica.innerText = musicas[musicaNome];

function proximaFaixa(){
    if (musicaAtual === numeromusicas){
        musicaAtual = 1;
        imagemAtual = 1;
        nomeAtual = 0
        musicaNome = 0
    } else {
        musicaAtual = musicaAtual + 1
        imagemAtual = imagemAtual + 1
        nomeAtual = nomeAtual + 1
        musicaNome = musicaNome + 1
    }

    audioMusica.src = "./books/Musicas/" + musicaAtual + ".mp3"
    nomeBanda.innerHTML = playlist[nomeAtual];
    nomeMusica.innerText = musicas[musicaNome];
    tocarFaixa()
    trocarNomeFaixa()
    taTocando = 1}

function anteriorFaixa(){
    if (musicaAtual === 1){
        musicaAtual = numeromusicas;
        imagemAtual = 10
        nomeAtual = playlist.length - 1
        musicaNome = playlist.length - 1
    } else {
        musicaAtual = musicaAtual - 1
        imagemAtual = imagemAtual - 1
        nomeAtual = nomeAtual - 1
        musicaNome = musicaNome - 1
    }

    audioMusica.src = "./books/Musicas/" + musicaAtual + ".mp3"
    nomeBanda.innerHTML = playlist[nomeAtual];
    nomeMusica.innerText = musicas[musicaNome];
    tocarFaixa()
    trocarNomeFaixa()
    taTocando = 1
}

botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoProximo.addEventListener('click', proximaFaixa);
botaoAnterior.addEventListener('click', anteriorFaixa);

const mais = document.getElementById("mais");
const menos = document.getElementById('menos');

function maisVolume(){
    if ( audioMusica.volume < 1){
        audioMusica.volume += 0.1;
    }
}

function menosVolume(){
    if ( audioMusica.volume > 0){
        audioMusica.volume -= 0.1;
    }
    if ( audioMusica.volume < 0){
        audioMusica.volume = 0
    }
}

mais.addEventListener('click', maisVolume);
menos.addEventListener('click', menosVolume);
