const moeda = document.querySelector("#moeda")
const botao = document.querySelector("#botao")
const resultado = document.querySelector("#resultado")

botao.addEventListener ('click', converter)

function converter(){
    m = moeda.value
    
    calculo = m/5.68

    resultado.textContent = `O valor convertido é: U$${calculo.toFixed(2)}`
 }