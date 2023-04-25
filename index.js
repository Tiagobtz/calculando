function calcular(){
    let operacao = document.getElementsByName('operacao')
    let numero1 = document.getElementById('numero-1')
    let numero2 = document.getElementById('numero-2')
    let resultado = document.getElementById('resultado')

    function somar (numero1, numero2){
    return numero1 + numero2
    }

    function subtrair (numero1, numero2){
    return numero1 - numero2
    }

    function multiplicar (numero1, numero2){
    return numero1 * numero2
    }

    function dividir (numero1, numero2){
    return numero1 / numero2
    }

    if(numero1.value.length == 0 || numero2.value.length == 0 || operacao[false]){
        alert('[ERRO] Você precisa digitar os números e escolher a operação que deseja calcular.')
    }else{
        
        numero1 = Number(numero1.value)
        numero2 = Number(numero2.value)
        
        if(operacao[0].checked){
            resultado.innerHTML = `O resultado da soma é ${somar(numero1, numero2)}`
        }else if(operacao[1].checked){
            resultado.innerHTML = `O resultado da soma é ${subtrair(numero1, numero2)}`
        }else if(operacao[2].checked){
            resultado.innerHTML = `O resultado da soma é ${multiplicar(numero1, numero2)}`
        }else if(operacao[3].checked){
            resultado.innerHTML = `O resultado da soma é ${dividir(numero1, numero2)}`
        }
    }
}