 function somar(n1, n2){
    return n1 + n2 
}

function subtrair(n1, n2){
    return n1 - n2
}

function multiplicar(n1, n2){
    return n1 * n2
}

function dividir(n1, n2){
    return n1 / n2
}

let escolha = 0
while(escolha != 5){
    escolha = prompt('Digite [1] PARA SOMAR, [2] PARA SUBTRAIR, [3] PARA MULTIPLICAR, [4] PARA DIVIDIR, [5] PARA CANCELAR')
    let resultado = 0
        if (escolha == 1){
            let numero1 = prompt('Digite um número: ')
            let numero2 = prompt('Digite outro número: ')
            numero1 = Number(numero1)
            numero2 = Number(numero2)
            resultado = somar(numero1, numero2)
            alert(`O resultado da soma é ${resultado}`)
        }

        else if(escolha == 2){
            let numero1 = prompt('Digite um número: ')
            let numero2 = prompt('Digite outro número: ')
            numero1 = Number(numero1)
            numero2 = Number(numero2)
            resultado = subtrair(numero1, numero2)
            alert(`O resultado da subtração é ${resultado}`)
        }

        else if(escolha == 3){
            let numero1 = prompt('Digite um número: ')
            let numero2 = prompt('Digite outro número: ')
            numero1 = Number(numero1)
            numero2 = Number(numero2)
            resultado = multiplicar(numero1, numero2)
            alert(`O resultado da multiplicação é ${resultado}`)
        }

        else if(escolha == 4){
            let numero1 = prompt('Digite um número: ')
            let numero2 = prompt('Digite outro número: ')
            numero1 = Number(numero1)
            numero2 = Number(numero2)
            resultado = dividir(numero1, numero2)
            alert(`O resultado da divisão é ${resultado}`)
        }
}


