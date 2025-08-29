import { Personagem } from "./Personagem";
import Prompt from "prompt-sync";

const teclado = Prompt();

const p: Personagem = new Personagem("Edécio");
p.classe = "Monge";
p.raca = "Morto-Vivo";
p.nivel = Math.floor(1 + Math.random() * 99);
p.arma = "Cajado";
p.manaMaxima = 60;
p.manaAtual = 20;
p.vidaMaxima = 100;
p.vidaAtual = p.vidaMaxima;
p.poderAtaque = 1;

const p2: Personagem = new Personagem("Edécio");
p2.classe = "Monge";
p2.raca = "Morto-Vivo";
p2.nivel = Math.floor(1 + Math.random() * 99);
p2.arma = "Cajado";
p2.manaMaxima = 60;
p2.manaAtual = 20;
p2.vidaMaxima = 100;
p2.vidaAtual = p.vidaMaxima;
p2.poderAtaque = 1;


while (true) {

    console.log("+------------Menu-------------+");
    console.log("|1. Treinar Poder de Ataque   |");
    console.log("|2. Ver Status                |");
    console.log("|3. Checar se personagem vive |");
    console.log("|4. Regenerar Mana            |");
    console.log("|5. Subir nivel               |");
    console.log("|9. Sair                      |");
    console.log("+-----------------------------+");

    const escolha: number = +teclado("Escolha uma opção do menu:")
    if (escolha === 9) {
        break;
    }
    switch (escolha) {
        case 1:
            p.treinarPoderAtaque();
            break;

        case 2:
            console.log(p.status());
            break;

        case 3:
            console.log(p.estaVivo() ? "Personagem vivo!" : "Personagem morto!");
            break;

        case 4:
            p.regenerarMana();
            break;

        case 5:
            p.subirNivel();
            break;

        default:
            console.log("Opção inválida!");
            break;
    }

}



