//  Utilizado para calcular o valor de uma lista ( Array )

const alunos = [
  { nome: "yago", idade: 19, curso: "react" },
  { nome: "leonard", idade: 20, curso: "analise" },
  { nome: "carlos", idade: 22, curso: "java script" },
  { nome: "juju", idade: 30, curso: "c++" },
];

const calculo = alunos.reduce(
  (acumulado, element) => acumulado + element.idade,
  0
);
console.log(calculo);
