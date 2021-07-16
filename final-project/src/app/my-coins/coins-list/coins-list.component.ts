import { Component, OnInit } from '@angular/core';
import { Coin } from '../coin.model';
import { MyCoinsServiceService } from '../my-coins-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-coins-list',
  templateUrl: './coins-list.component.html',
  styleUrls: ['./coins-list.component.css']
})
export class CoinsListComponent implements OnInit {
  coins: Coin[] = [];
  subscription: Subscription;
  term: string;

  constructor(private myCoinsService: MyCoinsServiceService) { }

  ngOnInit(): void {
    this.myCoinsService.coinChangedEvent.subscribe((coins: Coin[]) => {
      this.coins = coins.slice();
    });
    this.subscription = this.myCoinsService.coinsListChangedEvent.subscribe((coins: Coin[]) => {
      this.coins = coins;
    });
  }

  onKeyPress(value: string) {
    this.term = value;
  }
}
