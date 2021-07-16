import { Pipe, PipeTransform } from '@angular/core';
import { Coin } from './coin.model';

@Pipe({
  name: 'myCoinsFilter'
})
export class MyCoinsFilterPipe implements PipeTransform {

  transform(coins: Coin[], term) {
    let filteredCoins: Coin[] = [];
    if (term && term.length > 0) {
      filteredCoins = coins.filter((coin: Coin) =>
        coin.name.toLowerCase().includes(term.toLowerCase())
      );
    }
    if (filteredCoins.length < 1) {
      return coins;
    }
    return filteredCoins;
  }

}
