function infoUsuario () {
    const nacionalidade = prompt(`Qual sua nacionalidade?`).toLowerCase()

   
    if (nacionalidade === `brasileira` || nacionalidade === `brasileiro`){ 
        console.log(`Brasileira`) 
    }else if (nacionalidade === `argentina` || nacionalidade === `argentino`){
        console.log(`Argentina`)
    }else if (nacionalidade === `uruguaia` || nacionalidade === `uruguaio`){
        console.log(`Uruguaia`)
    }else if (nacionalidade === `chilena` || nacionalidade === `chileno`){
        console.log(`Chilena`)
    }else if (nacionalidade === `colombiana` || nacionalidade === `colombiano`){
        console.log(`Colombiana`)
    }else {
        console.log(`Nacionalidade não encontrada`)
    } 

}

infoUsuario()