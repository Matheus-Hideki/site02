let hasClicked = false;
let targetX = 0;
let currentX = 0;

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
}


//let segundos = Math.floor(tempoFinal / 1000);
//let minutos = Math.floor(segundos / 60);
//let horas = Math.floor(minutos / 60);
//let dias = Math.floor(horas / 24);


function clickTaskBar()
{
    var element = document.getElementById("side_bar");
    currentX = parseFloat(element.style.left.replace("vw",""));

    if(hasClicked)
    {
        targetX = -22;
        hasClicked = false;
    }

    if(!hasClicked)
    {
        targetX = 0;
        hasClicked = true;
    }
    setInterval(animate(),100);
}
function animate()
{
    var element = document.getElementById("side_bar");
    element.style.left = interpolate(currentX,targetX,0.01,1) + "vw";
}
function interpolate(start, end, elapsed, duration) {
    return start + (end - start) * (elapsed / duration);
}