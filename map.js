// multiplicando os elementos do array

const numeros = [3, 4, 8, 9];

const duplicarN = numeros.map((element) => {
  return element * 2;
});

// console.log(duplicarN);

// adicionando a multiplicações em um novo array ForEach

const numeros = [2, 3, 5, 8];
let multiplo = [];

numeros.forEach((Element) => {
  multiplo.push(Element * 2);
});

// console.log(multiplo);

const texto = [
  {
    nome: "Yago",
    sobrenome: "valuche",
    idade: 19,
    especialidades: "ReactNative",
  },
  {
    nome: "carlos",
    sobrenome: "calenzo",
    idade: 18,
    especialidades: "Pawn",
  },
  {
    nome: "douglas",
    sobrenome: "costa",
    idade: 18,
    especialidades: "Pawn",
  },
];

const lista = texto.filter((element) => {
  if (element.especialidades === "Pawn") {
    return true;
  }
  return false;
  texto.length[-1];
});

// console.log(lista);
