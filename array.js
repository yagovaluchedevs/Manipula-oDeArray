// Manipulação de Array Map ( ) , filter ( ) , find( )

let objetos = [
  {
    nome: "yago",
    sobrenome: "valuche",
    idade: 45,
  },
  {
    nome: "Alan",
    sobrenome: "araujo",
    idade: 40,
  },
  {
    nome: "joao",
    sobrenome: "barbosa",
    idade: 15,
  },
];

//  Percorre o meu Array, aplica a função que eu passar para cada valor e me retorna um novo Array.

const nomes = objetos.map((element) => {
  const { nome, sobrenome } = element;

  const nomeCompleto = `${nome} ${sobrenome}`;

  const novoObjeto = {
    ...element,
    nomeCompleto,
  };
  return novoObjeto;
});

console.log(nomes);

const nomesFiltrados = nomes.filter((element) => {
  if (element.idade > 17) {
    return true;
  }
  return false;
});

// console.log(nomesFiltrados || "Nenhum nome encontrado");

const filtro = nomes.find((element) => {
  if (element.idade > 17) {
    return true;
  }
  return false;
});

console.log(filtro || "Nenhum nome encontrado");
