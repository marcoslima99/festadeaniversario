// Festa de Aniversario
// Salgadinhos: 12 unidades por pessoa - depois de 4 hrs 20 unidades por pessoas;
// Refrigerante: 600 ml por pessoa - depois de 4 hrs sao 1200 por pessoa , criança: 0,5;
// Cerveja: 4 latinhas por pessoa - depois de 4 hrs sao 8 lalinhas por pessoas (adulto);
// Bolo: 100 g (1 fatia) por pessoa.

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultados");

function calcular(){
    console.log("Calculando...");

    let adulto = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qdtTotalSalgados = salgadoPP(duracao) * adulto + (salgadoPP(duracao) /2 * criancas);
    let qdtTotalCerveja = cervejaPP(duracao) * adulto;
    let qdtTotalBebidas = bebidasPP(duracao) * adulto + (bebidasPP(duracao) /2 * criancas);
    let qdtTotalBolo = 1 * adulto + (1 * criancas);


    resultado.innerHTML = `<p>${qdtTotalSalgados} Unidades de Salgados</p>`
    resultado.innerHTML += `<p>${qdtTotalCerveja} Latinhas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas /2000)} Pet's de 2L  de Bebidas</p>`
    resultado.innerHTML += `<p> Bolo com  ${qdtTotalBolo} Fatias</p>`



}

function salgadoPP(duracao){
    if (duracao >= 4){
        return 20;
    }else{
        return 12;
    }
}

function cervejaPP(duracao){
    if (duracao >= 4){
        return 8;
    }else{
        return 4;
    }
}

function bebidasPP(duracao){
    if (duracao >= 4){
        return 1200;
    }else{
        return 600;
    }
}







