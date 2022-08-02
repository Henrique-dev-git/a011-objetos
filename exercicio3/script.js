const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};

//A)

const pokemon2 ={... pokemon1}
pokemon2.nome = "Squirtle"
pokemon2.tipo = "Água"

// console.log(pokemon2);
//B)
pokemon1.ataques = []

const ataque1 = {
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100,
}


pokemon1.ataques.push(ataque1);

//C)
const ataques2 = [... pokemon1.ataques]

pokemon2.ataques = ataques2;

//D
const ataque2 = {
    nome: "folha navalha",
    dano: 45,
    tipo: "Grama",
    precisao: 100,
}

pokemon1.ataques.push(ataque2);

//E)
const ataque3 = {
    nome: "Jato de Água",
    dano: 40,
    tipo: "Água",
    precisao: 100,
}
pokemon2.ataques.push(ataque3);

//F)
console.log(pokemon1,pokemon2);





