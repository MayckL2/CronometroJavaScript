let mostraHora = document.querySelector("#hora")
let mostraMinuto = document.querySelector("#minuto")
let mostraSegundo = document.querySelector("#segundo")
let hora = minuto = segundo = 0
let comeca = false
let botao = document.querySelector("#start")

// liga e desliga o cronometro
const troca = () => {
    if (comeca == true) {
        comeca = false
        botao.innerHTML = "Start"
    } else {
        comeca = true
        botao.innerHTML = "Pause"
    }
}

// se o cronometro tiver começado segundo e minuto é incrementado
const start = () => {

    // incrementa segundos, minutos e hora
    if (comeca == true) {

        segundo += 1

        if (segundo == 60) {
            segundo = 0
            minuto += 1

            if(minuto == 60){
                minuto = 0
                hora += 1
            }
        }

        // verifica quantidade de digitos para permanecer dois digitos cara contador
        if(segundo.toString().length > 1){
            mostraSegundo.innerHTML = segundo
        }else{
            mostraSegundo.innerHTML = 0 + segundo.toString()
        }

        if(minuto.toString().length > 1){
            mostraMinuto.innerHTML = minuto
        }else{
            mostraMinuto.innerHTML = 0 + minuto.toString()
        }

        if(hora.toString().length > 1){
            mostraHora.innerHTML = hora
        }else{
            mostraHora.innerHTML = 0 + hora.toString()
        }

    }
}

// reseta o cronometro
const reset = () => {
    segundo = 0
    minuto = 0

    mostraMinuto.innerHTML = minuto
    mostraSegundo.innerHTML = segundo

    comeca = false
    botao.innerHTML = "Start"
}

// chama funçao start a cada segundo
setInterval(start, 1000)

// aciona funçao pela tecla precionada
const enter = (event) =>{

    if(event.which == 13 || event.which == 32){
        troca()
    }
}