import { Personagem } from "./Personagem";
import { Arma } from "./Arma";
import { Util } from "./Util";
import Prompt from "prompt-sync";

const teclado = Prompt();

const espada: Arma = new Arma("Espada Longa", 20);
const cajado: Arma = new Arma("Cajado Arcano", 10);
const arco: Arma = new Arma("Arco Longo", 15);
const adaga: Arma = new Arma("Adaga Silenciosa", 12);

const p: Personagem = new Personagem("Edécio");
p.classe = "Monge";
p.raca = "Morto-Vivo";
p.nivel = Math.floor(1 + Math.random() * 99);
p.adicionarArma(espada);
p.adicionarArma(cajado);
p.adicionarArma(arco);
p.adicionarArma(adaga);
p.manaMaxima = 100;
p.manaAtual = p.manaMaxima;
p.vidaMaxima = 100;
p.vidaAtual = p.vidaMaxima;
p.poderAtaque = 1;

const pers: Personagem = new Personagem("Angelo");
pers.classe = "Samurai";
pers.raca = "Zumbi";
pers.nivel = Math.floor(1 + Math.random() * 99);
pers.adicionarArma(espada);
pers.adicionarArma(cajado);
pers.adicionarArma(arco);
pers.adicionarArma(adaga);
pers.manaMaxima = 100;
pers.manaAtual = pers.manaMaxima;
pers.vidaMaxima = 100;
pers.vidaAtual = pers.vidaMaxima;
pers.poderAtaque = 1;

while (true) {
  let escolhaPersonagem: number = +teclado(
    "Escolha um personagem: 1.Edécio ou 2.Angelo, 0 Sair  :"
  );
  if (escolhaPersonagem == 0) {
    break;
  }
  const esc: Personagem = escolhaPersonagem == 1 ? p : pers;

  while (true) {
    console.log("+------------Menu-------------+");
    console.log("|1. Treinar Poder de Ataque   |");
    console.log("|2. Ver Status                |");
    console.log("|3. Checar se personagem vive |");
    console.log("|4. Regenerar Mana            |");
    console.log("|5. Subir nivel               |");
    console.log("|6. Equipar Arma              |");
    console.log("|7. Lançar feitiço            |");
    console.log("|8. Receber Dano              |");
    console.log("|9. Atacar                    |");
    console.log("|0. Sair                      |");
    console.log("+-----------------------------+");

    const escolha: number = +teclado("Escolha uma opção do menu:");
    if (escolha === 0) {
      break;
    }
    switch (escolha) {
      case 1:
        esc.treinarPoderAtaque();
        break;

      case 2:
        console.log(esc.status());
        break;

      case 3:
        console.log(esc.estaVivo() ? "Personagem vivo!" : "Personagem morto!");
        break;

      case 4:
        esc.regenerarMana();
        break;

      case 5:
        esc.subirNivel();
        break;

      case 6:
        console.log(esc.listarArmas());
        const escolhaArma: number = +teclado("Digite o nr da arma desejada!!");
        const armaEscolhida: any = esc.arma[escolhaArma - 1];
        esc.equiparArma(armaEscolhida);
        break;

      case 7:
        const feitico: number = +teclado(
          "Escolha o feitiço: 1. Bola de Fogo 2. Tempestade de Gelo"
        );
        esc.lancaFeitico(feitico);
        break;

      case 8:
        console.log(esc.listarArmas());
        const escolherDano: number = +teclado(
          "Digite o nr da arma desejada p/simular receber dano!!"
        );
        const danoEscolhido: any = p.arma[escolherDano - 1];
        let { dano } = { ...danoEscolhido };
        dano = Number(dano);
        esc.receberDano(dano);
        console.log(`Vida atual :${esc.vidaAtual}`);
        break;

      case 9:
        if (esc == p) {
          pers.receberDano(p.atacar());
        } else {
          p.receberDano(pers.atacar());
        }

        break;

      default:
        console.log("Opção inválida!");
        break;
    }
  }
}
