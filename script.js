const horasElemento = document.querySelector("#horas");
const minutosElemento = document.querySelector("#minutos");
const segundosElemento = document.querySelector("#segundos"); 

function atualizarRelogio() {
    const data = new Date();
    const horas = data.getHours().toString().padStart(2, '0');
    const minutos = data.getMinutes().toString().padStart(2, '0');
    const segundos = data.getSeconds().toString().padStart(2, '0');
    horasElemento.textContent = horas;
    minutosElemento.textContent = minutos;
    segundosElemento.textContent = segundos;
}

atualizarRelogio()
setInterval(atualizarRelogio, 1000)
