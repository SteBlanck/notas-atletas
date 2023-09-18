 //Dados
 let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas:  [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
 ];



 let atletasNotas=atletas.map((atleta)=>{
  let nomeAtleta=atleta.nome
  let notasAtleta=atleta.notas
  let notasOrd=atleta.notas.sort(function(a,b){
      if (a < b){
        return -1;
      }
  });
  let notasSlice=notasOrd.slice(1,4);
  let somaNotas=notasSlice.reduce(function(total,ataul){
    return total + ataul
  })
  let notaMedia=somaNotas/notasSlice.length



  console.log(`Atleta: ${nomeAtleta}`);
  console.log(`Notas: ${notasAtleta}`);
  //console.log(`NotasOrd: ${notasOrd}`);
  console.log("Média: " + notaMedia)

})









    


