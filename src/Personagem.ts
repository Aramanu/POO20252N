import { Util } from "./Util";
import Feiticos from "./Feiticos";
import { Arma } from "./Arma";

export class Personagem {
  nome: string;
  classe: string;
  raca: string;
  nivel: number;
  arma: Arma[];
  armaEquipada: Arma | null;
  manaAtual: number;
  manaMaxima: number;
  vidaAtual: number;
  vidaMaxima: number;
  agilidade: number;
  poderAtaque: number;

  constructor(nome: string) {
    this.nome = nome;
    this.classe = "";
    this.raca = "";
    this.nivel = 0;
    this.arma = [];
    this.armaEquipada = null;
    this.manaAtual = 0;
    this.manaMaxima = 0;
    this.vidaAtual = 0;
    this.vidaMaxima = 0;
    this.agilidade = 0;
    this.poderAtaque = 0;
  }

  treinarPoderAtaque(): void {
    const util: Util = new Util();
    const incrementoDoTreino: number = Util.gerarNumeroAleatoria(5, 15);
    this.poderAtaque += incrementoDoTreino + this.poderAtaque * 1.1;
  }
  estaVivo(): boolean {
    return this.vidaAtual > 0;
  }
  subirNivel(): void {
    this.nivel += 1;
  }
  regenerarMana(): void {
    const quantidadeDeMana: number = Util.gerarNumeroAleatoria(10, 20);
    if (this.manaAtual + quantidadeDeMana > this.manaMaxima) {
      this.manaAtual = this.manaMaxima;
    } else {
      this.manaAtual += quantidadeDeMana;
    }
  }
  status(): string {
    return `Nome: ${this.nome}
            Classe: ${this.classe}
            Raça: ${this.raca}
            Nível: ${this.nivel}
            Arma Equipada: ${
              this.armaEquipada ? this.armaEquipada.nome : "Nenhuma"
            }
            Mana: ${this.manaAtual}/${this.manaMaxima}
            Vida: ${this.vidaAtual}/${this.vidaMaxima}
            Agilidade: ${this.agilidade}
            Poder de Ataque: ${this.poderAtaque}`;
  }
  lancaFeitico(escolha: number): void {
    const feitico = new Feiticos();
    let tipo = escolha === 1 ? "Bola de Fogo" : "Tempestade de Gelo";
    const custoMana = feitico.custoMana(tipo);
    if (this.manaAtual >= custoMana) {
      this.manaAtual -= custoMana;
    }
  }
  adicionarArma(arma: Arma): void {
    this.arma.push(arma);
  }
  equiparArma(arma: Arma): void {
    this.armaEquipada = arma;
  }

  listarArmas(): string {
    let conteudo = `Armas disponíveis: \n`;
    this.arma.forEach((arma, i) => {
      conteudo += `${i + 1}. ${arma.nome}  Dano: ${arma.dano} \n`;
    });
    return conteudo;
  }
  receberDano(dano: number): void {
    this.vidaAtual -= dano;
  }

  atacar(): number {
    let { dano } = { ...this.armaEquipada };
    dano = Number(dano);
    let batalha: any = (dano + this.poderAtaque) * 0.65;
    return batalha;
  }
}
