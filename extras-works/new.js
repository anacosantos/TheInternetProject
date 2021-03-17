// 1 - o mais novo de um grupo de pessoas

// 1

const nomeIdades = [
  {
    nome: 'Ana',
    idade: 35
  },
  {
    nome: 'Marcus',
    idade: 36
  },
  {
    nome: 'Pedro',
    idade: 41
  },
  {
    nome: 'Lip',
    idade: 38
  },
  {
    nome: 'Johnny',
    idade: 3
  }
]

// let menorIdade = 200
// for(let i = 0; i < nomeIdades.length; i++){
//     if(nomeIdades[i].idade < menorIdade){
//         menorIdade = nomeIdades[i].idade
//     }
// }
// console.log(menorIdade)

let menorIdade = 200

nomeIdades.forEach(function (item) {
  if (item.idade < menorIdade) {
    menorIdade = item.idade
  }
})
console.log(menorIdade)

// 2 - Em um estacinamento mudar o valor de todas as cancelas

const cancelas = [
  {
    id: '1233213',
    status: false
  },
  {
    id: '234234234',
    status: true
  },
  {
    id: '234656',
    status: false
  },
  {
    id: '237775',
    status: true
  }

]

console.log(cancelas)

cancelas.forEach(function (changed) {
  if (changed.status === false) {
    changed.status = true
  } else {
    changed.status = false
  }
})

for (let i = 0; i < cancelas.length; i++) {
  if (cancelas[i].status === false) {
    cancelas[i].status = true
  } else {
    cancelas[i].status = false
  }
}

console.log(cancelas)
