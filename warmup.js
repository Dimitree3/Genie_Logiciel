const a = ["foo", "bar"][Math.random() < 0.5 ? 0 : 1]

// si Math.random() < 0,5, alors j'ai l'indice 0, sinon j'ai l'indice 1,
// a=["foo", "bar"] 
// on prend a[indice]

const b = [1, 2][Math.random() < 0.5 ? 0 : 1]
const c = [["foo"], ["bar"]][Math.random() < 0.5 ? 0 : 1]


// général : 
// si Math.random() < 0,5, alors j'ai l'indice 0, sinon j'ai l'indice 1
// table = [i,j] (avec i,j )
// const = table[indice]

function choisir_element_aleatoire_dans_un_tableau_deux_elements (tableau){
    const indice = Math.random() < 0.5 ? 0 : 1
    return tableau[indice]
}

function choisir_element_aleatoire_dans_un_tableau_n_elements (tableau){
    // prendre la longueur de la liste tableau
    const longueur = tableau.length
    const indice = Math.floor(Math.random() * longueur) // décreter sur le nombre d'élements du tableau
    return tableau[indice]
}

    
console.log(choisir_element_aleatoire_dans_un_tableau_deux_elements([["foo"], ["bar"]]))

const table = [1,2,3,4,5];

console.log(choisir_element_aleatoire_dans_un_tableau_n_elements(table))

