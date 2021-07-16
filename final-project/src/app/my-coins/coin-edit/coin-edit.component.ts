import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Coin } from '../coin.model';
import { MyCoinsServiceService } from '../my-coins-service.service';


@Component({
  selector: 'app-coin-edit',
  templateUrl: './coin-edit.component.html',
  styleUrls: ['./coin-edit.component.css']
})
export class CoinEditComponent implements OnInit {
  originalCoin: Coin;
  coin: Coin;
  editMode: boolean = false;


  constructor(
    private myCoinsService: MyCoinsServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.editMode = false;
      let id = params['_id'];
      if (id === null || id === undefined) {
        return;
      }
      
      let coin = this.myCoinsService.getCoin(id);
      if (!coin) {
        return;
      }

      this.originalCoin = coin;
      this.editMode = true;
      this.coin = JSON.parse(JSON.stringify(coin));

    });
  }

  onSubmit(form: NgForm) {
    let coin = new Coin(
      form.value._id,
      form.value.id,
      form.value.symbol,
      form.value.name,
      form.value.rank,
      form.value.price_usd,
      form.value.imageUrl,
    );
    if (this.editMode == true) {
      this.myCoinsService.updateCoin(this.originalCoin, coin);
      console.log(this.originalCoin._id);
    } else {
      this.myCoinsService.addCoin(coin);
    }

    this.router.navigate(['/myCoins']);
  }

  onCancel() {
    this.router.navigate(['/myCoins']);
  }

}
