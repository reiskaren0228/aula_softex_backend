const participantesMap = new Map();

participantesMap.set("João", 50);
participantesMap.set("Pedro", 120);
participantesMap.set("Luiza", 70);
participantesMap.set("Marcela", 10);
participantesMap.set("Yuri", 34);

// participantesMap.forEach((pontuacao, participante) => {
//     console.log(`Participante: ${participante} --> Pontuação: ${pontuacao} pontos`);
//   });
  
const participantesArray = [...participantesMap.entries()];

participantesArray.sort((a, b) => b[1] - a[1]);


participantesArray.forEach(([participante, pontuacao]) => {
  console.log(`Participante: ${participante} --> Pontuação: ${pontuacao} pontos`);
});