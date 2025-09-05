export default class Feiticos {
  constructor(
    public atacSimples: string = "Bola de Fogo",
    public atacEspecial: string = "Tempestade de Gelo",
    public custoManaSimples: number = 10,
    public custoManaEspecial: number = 25
  ) {}
  custoMana(tipo: string): number {
    let custo: number = 0;
    if (tipo === "Bola de Fogo") {
      custo = this.custoManaSimples;
    } else if (tipo === "Tempestade de Gelo") {
      custo = this.custoManaEspecial;
    }
    return custo;
  }
}
