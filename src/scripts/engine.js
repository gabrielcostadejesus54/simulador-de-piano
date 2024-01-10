
// Verificar a orientação e redirecionar se não estiver na horizontal
if (window.matchMedia("(orientation: portrait)").matches) {
    alert("Por favor, gire seu dispositivo para a orientação horizontal.");
    // Redirecionar para outra página ou fazer algo para tentar forçar a orientação
    // window.location.href = "pagina-na-horizontal.html";
}



const teclasPiano = document.querySelectorAll(".piano-teclas .tecla")
let audio = new Audio(`src/audios/a.wav`)
let mapeamentoTecla = []
const volume = document.querySelector(".volume input")
const verTeclas = document.querySelector('.ver-teclas input')

const playTune = function(tecla){
    audio.src = `src/audios/${tecla}.wav`
    audio.play()

    const clickTecla = document.querySelector(`[data-tecla="${tecla}"]`)
    clickTecla.classList.add("active")

    setTimeout(() => {
        clickTecla.classList.remove('active')
    },150)
   
}

teclasPiano.forEach((tecla) => {
    console.log(tecla.dataset.tecla)
    tecla.addEventListener('click', () => playTune(tecla.dataset.tecla))
    mapeamentoTecla.push(tecla.dataset.tecla)
    console.log(mapeamentoTecla)
})

document.addEventListener('keydown', (e) => {
    if(mapeamentoTecla.includes(e.key)){
        playTune(e.key)
    }
})

function handleVolume(e){
    audio.volume = e.target.value
}

function showHideTeclas(){
     teclasPiano.forEach((tecla) => {
        tecla.classList.toggle('hide')
     })
}

volume.addEventListener('input', handleVolume)

verTeclas.addEventListener('click', showHideTeclas )