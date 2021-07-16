import { Component, Input, OnInit } from '@angular/core';
import { TopServiceService } from '../top-service.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-top-item',
  templateUrl: './top-item.component.html',
  styleUrls: ['./top-item.component.css']
})
export class TopItemComponent implements OnInit {
  @Input() coin;

  constructor(
    private topService: TopServiceService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onAddToMyCoins(){
    this.topService.addCoinToFavs(this.coin);
    this.router.navigate(['/myCoins']);
  }
}
