export class Personagem{
    nome:string ;
    classe:string 
    raca: string 
    nivel:number ;
    arma: string 
    manaAtual: number ;
    manaMaxima: number ;
    vidaAtual: number ;
    vidaMaxima: number ;
    agilidade: number ;
    poderAtaque: number ;

    constructor(nome: string){
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
    
 treinarPoderAtaque(): void{
    this.poderAtaque += 3 + this.poderAtaque * 1.1;
}
}