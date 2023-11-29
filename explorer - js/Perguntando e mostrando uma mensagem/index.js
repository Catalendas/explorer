let alunos = [
  {
    nome: "Marcos",
    primeiraNota: 5,
    segundaNota: 6,
  },
  {
    nome: "Erika",
    primeiraNota: 7,
    segundaNota: 4,
  },
  {
    nome: "Luiz",
    primeiraNota: 1,
    segundaNota: 5,
  },
  {
    nome: "Nina",
    primeiraNota: 10,
    segundaNota: 10,
  }
]

function mediaNota(valor1, valor2, nome) {
  let media = (valor1 + valor2) / 2

  if (media > 7) {
    alert(`A média do(a) aluno(a) é ${media}
          Parabens você foi aprovado(a) ${nome}
    `)
  } else {
    alert(`A média do(a) aluno(a) é ${media}
          não foi dessa vez, tente novamente ${nome}
    `)
  }
}

alunos.forEach(({ nome, primeiraNota, segundaNota}) => mediaNota(primeiraNota, segundaNota, nome))



