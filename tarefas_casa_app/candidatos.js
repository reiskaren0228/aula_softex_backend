const readlineSync = require('readline-sync');

const candidatosNumeros = {
  889: 'candidato_X',
  847: 'candidato_Y',
  515: 'candidato_Z',
  0: 'branco'
};

function votacao(candidatos) {
  const voto = readlineSync.question("Digite o número do candidato que você deseja votar ou digite '0' para votar em 'branco': ");

  if (voto.toLowerCase() === 'branco') {
    candidatos['branco']++;
    console.log("**Voto em branco registrado com sucesso***.");
  } else {
    const voto_numb = parseInt(voto);
    if (!isNaN(voto_numb) && candidatosNumeros.hasOwnProperty(voto_numb)) {
      const candidato = candidatosNumeros[voto_numb];
      candidatos[candidato]++;
      console.log(`--> Seu voto para o candidato ${candidato} foi registrado em nosso sistema.`);
    } else {
      console.log("***ERROR** Por Favor digite um número válido ou digite '0'para voto em branco:.");
    }
  }
}

function mostrar_res(candidatos) {
  let eleito_candidato = 'branco';
  for (const candidato in candidatos) {
    console.log(`Candidato ${candidato}: ${candidatos[candidato]} votos`);
    if (candidato !== 'branco' && candidatos[candidato] > candidatos[eleito_candidato]) {
      eleito_candidato = candidato;
    }
  }

  console.log(`Votos em branco: ${candidatos['branco']}`);
  console.log(`\nEleito candidato: Candidato ${eleito_candidato} com ${candidatos[eleito_candidato]} votos.`);
}

function eleicao() {
  const candidatos = {
    'candidato_X': 0,
    'candidato_Y': 0,
    'candidato_Z': 0,
    'branco': 0
  };

  while (true) {
    votacao(candidatos);
    const resposta = readlineSync.question("Deseja encerrar a votação? (s/n):");
    if (resposta && resposta.toLowerCase() === 's') {
      break;
    }
  }

  mostrar_res(candidatos);
}

eleicao();
