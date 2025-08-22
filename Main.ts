import { Personagem } from "./Personagem";
import Prompt from "prompt-sync";

const teclado  = Prompt();

const p: Personagem = new Personagem("Edécio");
p.classe = "Monge";
p.raca = "Morto-Vivo";
p.nivel = Math.floor(1+ Math.random() * 99);
p.arma = "Cajado";
p.manaMaxima = 100;
p.manaAtual = p.manaMaxima;
p.vidaMaxima = 100;
p.vidaAtual = p.vidaMaxima;
p.poderAtaque = 1;

while(true){

console.log("+------------Menu-------------+");
console.log("|1. Treinar Poder de Ataque   |");
console.log("|2. Ver Status                |");
console.log("|9. Sair                      |");
console.log("+-----------------------------+");

const escolha: number = +teclado("Escolha uma opção do menu:")
if(escolha === 9){
    break;
}
switch (escolha) {
    case 1:
        treinarPoderAtaque(p);
        break;

    case 2:
        console.table(p);
        break;

    default:
        console.log("Opção inválida!");
        break;
}

}

function treinarPoderAtaque(person: Personagem): void{
    person.treinarPoderAtaque();
}



