console.log(`Trabalhando com listas`);

console.log(`Cidades que já visitei:`);

const Curitiba = `Curitiba`;
const Sorocaba = `Sorocaba`;
const Lapa = `Lapa`;
const Guaratuba = `Guaratuba`;
const Pinhais = `Pinhais`;

console.log(Curitiba, Sorocaba, Lapa, Guaratuba, Pinhais);

const cidadesVisitadas = new Array(
  `Curitiba`,
  `Sorocaba`,
  `Lapa`,
  `Guaratuba`,
  `Pinhais`
);

cidadesVisitadas.push(`Florianopolis`);

console.log(cidadesVisitadas);

console.log(`Cidades mais Linda:`);
console.log(cidadesVisitadas[0]);

console.log(`Meus amigos me disseram que eu nunca fui para a Pinhais, eu estava bêbado e eles mentiram pra mim:`);

cidadesVisitadas.splice(4, 1);

console.log(cidadesVisitadas);