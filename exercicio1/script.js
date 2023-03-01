// function ehPar() {
//     const numero = 2
//     if (numero % 2 === 0) 
//     console.log('O número é par')
// }


// ehPar()

function verificaPar(numero){
    let frase = ' '
    if(numero % 2 === 0){
        frase ='O número é par!'
        return frase
    } else {
        frase = 'O número é impar!'
        return frase
    }
}

const numeroUsuario = Number(prompt('Digite um numero: '))
console.log(verificaPar(numeroUsuario))