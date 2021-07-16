import { EventEmitter, Injectable } from '@angular/core';
import { Coin } from '../my-coins/coin.model';
import { MyCoinsServiceService } from '../my-coins/my-coins-service.service';

@Injectable({
  providedIn: 'root',
})
export class TopServiceService {
  topUrl = 'https://api.coinlore.net/api/tickers/';
  topCoins:[] = [];
  coinsChangedEvent: EventEmitter<[]> = new EventEmitter<[]>();
  constructor(private myCoinsService: MyCoinsServiceService) {
    this.getTopCoins();
  }

  getTopCoins(){
    fetch(this.topUrl)
      .then((response) => response.json())
      .then((jsObject) => {
        //console.log(jsObject.data);
        this.topCoins = jsObject.data;
        this.coinsChangedEvent.next(this.topCoins);
      })
      .catch(function (err) {
        console.log('Fetch Error :', err);
      });
  }

  addCoinToFavs(coin){
    const newCoin = new Coin(
      "",
      coin.id,
      coin.symbol,
      coin.name,
      coin.rank,
      coin.price_usd,
      "https://c1.coinlore.com/img/25x25/"+coin.nameid+".png",
    );
    this.myCoinsService.addCoin(newCoin);
  }
}
