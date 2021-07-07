import { Component, OnInit } from '@angular/core';
import { TopServiceService } from './top-service.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  topCoins = [];

  constructor(private topService: TopServiceService) { }

  ngOnInit(): void {
    this.topService.coinsChangedEvent.subscribe(
      (coins)=>{
        this.topCoins = coins;
      }
    );
  }


}
