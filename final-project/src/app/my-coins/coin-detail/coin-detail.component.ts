import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Coin } from '../coin.model';
import { MyCoinsServiceService } from '../my-coins-service.service';

@Component({
  selector: 'app-coin-detail',
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.css']
})
export class CoinDetailComponent implements OnInit {
  @Input() coin: Coin;

  constructor(
    private myCoinsService: MyCoinsServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.coin = this.myCoinsService.getCoin(params['_id']);
    });
  }

  onDelete() {
    this.myCoinsService.deleteCoin(this.coin);
    this.router.navigate(['/myCoins']);
  }

}
