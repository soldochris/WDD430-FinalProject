import { Component, Input, OnInit } from '@angular/core';
import { MyCoinsServiceService } from './my-coins-service.service';

@Component({
  selector: 'app-my-coins',
  templateUrl: './my-coins.component.html',
  styleUrls: ['./my-coins.component.css']
})

export class MyCoinsComponent implements OnInit {

  constructor(private myCoinsService: MyCoinsServiceService) { }

  ngOnInit(): void {
    this.myCoinsService.getCoins();
  }

}
