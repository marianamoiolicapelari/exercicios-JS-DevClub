const comidas = [
  { name: 'tomate', cor: 'vermelho' },
  { name: 'pimentão', cor: 'verde' },
  { name: 'morango', cor: 'vermelho' },
  { name: 'melancia', cor: 'vermelho' },
]

  let lista = comidas.map (itens => {
  let tipo 
  
  if(itens.cor == 'vermelho'){
    tipo = 'fruta'
  } else {
    tipo = 'legume'
  }
  const lista = {
    name: itens.name,
    cor: itens.cor,
    tipo: tipo
  }
  return lista
})
console.log(lista)