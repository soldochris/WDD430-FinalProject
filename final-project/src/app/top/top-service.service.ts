import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TopServiceService {
  topUrl = 'https://api.coinlore.net/api/tickers/?start=0&limit=10';
  topCoins:[] = [];
  coinsChangedEvent: EventEmitter<[]> = new EventEmitter<[]>();
  constructor() {
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
}
