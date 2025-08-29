import { Util } from "./Util";
export class Personagem {
    nome: string;
    classe: string
    raca: string
    nivel: number;
    arma: string
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
        this.arma = "";
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
        return (
            `Nome: ${this.nome}
            Classe: ${this.classe}
            Raça: ${this.raca}
            Nível: ${this.nivel}
            Arma: ${this.arma}
            Mana: ${this.manaAtual}/${this.manaMaxima}
            Vida: ${this.vidaAtual}/${this.vidaMaxima}
            Agilidade: ${this.agilidade}
            Poder de Ataque: ${this.poderAtaque}`
        )
    }
   

}
