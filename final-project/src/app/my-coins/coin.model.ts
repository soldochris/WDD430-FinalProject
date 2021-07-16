export class Coin{
  constructor(
    public _id: any,
    public id: string,
    public symbol: string,
    public name: string,
    public rank: number,
    public price_usd: string,
    public imageUrl: string
  ){}
}