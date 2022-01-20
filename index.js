var nomeEmpresa = 'Cine DH'
console.log(nomeEmpresa)

var catalogo = [
  {
    codigo: 1,
    titulo: 'Jurassic Park',
    duracao: 2,
    atores: [
      'Sam Neil',
      'Laura Dern',
      'Jeff Goldblum',
      'Richard Attenborough',
      'Samuel L. Jackson',
      'B.D. Wong',
      'Joseph Mazzello',
      'Ariana Richards'
    ],
    anoDeLancamento: 1993,
    emCartaz: true
  }
]

function adicionarFilme(cod, tit, dur, ato, lan, car) {
  var filme = {
    codigo: cod,
    titulo: tit,
    duracao: dur,
    atores: ato,
    anoDeLancamento: lan,
    emCartaz: car
  }
  catalogo.push(filme)
}

const listarTodosOsFilmes = () => {
  let catalogo = Request(./database/catalogo.json);
  for(let i = 0; 0 < catalogo.length; i++){

  }
}