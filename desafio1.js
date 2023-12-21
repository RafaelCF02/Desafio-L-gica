console.log("Qual Pokemon voce deseja cadastra?")

const Sucesso = " Cadastrado con sucesso"

const ERRO = "Pokemon ja cadastrado"

let pokemons = [["Poochyena", "Lv 2", "M",  "HP 13/13"], 
["Zigzagoon","Lv 2", "F" ,"HP 13/13"], 
["Dragonite", "Lv 5", "M", "HP 25/25"],
["Dragonite", "Lv 5", "F", "HP 24/24"],
["Dragonite", "Lv 5", "F", "HP 24/24"],
["Poochyena", "Lv 3", "F",  "HP 15/15"],
["Wurmple", "Lv 2", "M", "HP 7/14"]]

let lista_de_escolha = ["pokemon_escolhido1", "pokemon_escolhido2", "pokemon_escolhido3","pokemon_escolhido4"]

console.log(pokemons)

for(let i = 0; i < lista_de_escolha.length; i++) {
    
    var escolha = prompt("Escolha um pokemon entre 0 a 6: ")
    
    switch (escolha){
        case 0:
        case 5:
            escolha1 = pokemons[0][0]
            break
        case 1:
            escolha1 = pokemons[1][0]
            break
        case 2:
        case 3:
        case 4:
            escolha1 = pokemons[2][0]
            break
        case 6:
            escolha1 = pokemons[6][0]
            break  
        }
    
    console.log(escolha1 + Sucesso)
    }


