import { Component, Input, OnInit } from '@angular/core';
import { Coin } from '../../coin.model';

@Component({
  selector: 'app-coin-item',
  templateUrl: './coin-item.component.html',
  styleUrls: ['./coin-item.component.css']
})
export class CoinItemComponent implements OnInit {
  @Input() coin: Coin

  constructor() { }

  ngOnInit(): void {
  }

}
