import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Subject } from 'rxjs';
import { Coin } from './coin.model';

@Injectable({
  providedIn: 'root',
})
export class MyCoinsServiceService {
  coinChangedEvent: EventEmitter<Coin[]> = new EventEmitter<Coin[]>();
  coinsListChangedEvent: Subject<Coin[]> = new Subject<Coin[]>();
  coins: Coin[] = [];
  maxCoinId: number;

  constructor(private http: HttpClient) {
    this.getCoins();
  }

  getCoins() {
    this.http
      .get<{ message: string; contacts: Coin[] }>('http://localhost:3000/coins')
      .subscribe(
        (response: any) => {
          this.coins = response.coins;
          this.maxCoinId = this.getMaxId();
          this.coins.sort((l: Coin, r: Coin) => {
            if (l.id < r.id) {
              return -1;
            } else if (l.id === r.id) {
              return 0;
            } else {
              return 1;
            }
          });
          this.coinsListChangedEvent.next(this.coins.slice());
        },
        (err: any) => {
          console.error(err);
        }
      );
  }

  getCoin(id: string): Coin {
    if (!this.coins) {
      return null;
    }

    for (let coin of this.coins) {
      if (coin._id === id) {
        return coin;
      }
    }

    return null;
  }

  deleteCoin(coin: Coin): void {
    if (!coin) {
      return;
    }

    const index = this.coins.indexOf(coin);
    if (index < 0) {
      return;
    }

    this.http
      .delete(`http://localhost:3000/coins/${coin._id}`)
      .subscribe((coins: Coin[]) => {
        this.getCoins();
      });
  }

  addCoin(coin: Coin): void {
    if (!coin) {
      return;
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    coin._id = '';

    this.http
    .post<{message: string, coin: Coin}>('http://localhost:3000/coins', coin, {headers: headers})
    .subscribe((response: any) => {
      this.coins.push(response.coin);
      this.coins.sort(
        (l: Coin, r: Coin)=> {
          if (l.id < r.id) {
            return -1;
          } else if (l.id === r.id) {
            return 0;
          } else {
            return 1;
          }
        }
      );
      this.coinChangedEvent.next(this.coins.slice());
    });
  }

  updateCoin(originalCoin: Coin, newCoin: Coin): void {
    if (!originalCoin || !newCoin) {
      return;
    }

    let index = this.coins.indexOf(originalCoin);
    if (index < 0) {
      return;
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const strCoin = JSON.stringify(newCoin);

    this.http
    .put<{message: string}>(`http://localhost:3000/coins/${originalCoin._id}`, strCoin, {headers: headers})
    .subscribe((response: any) => {
      this.getCoins();
    });
  }

  getMaxId(): number {
    let maxID = 0;
    for (let coin of this.coins) {
      let currentID = +coin.id;
      if (currentID > maxID) {
        maxID = currentID;
      }
    }

    return maxID;
  }
}
