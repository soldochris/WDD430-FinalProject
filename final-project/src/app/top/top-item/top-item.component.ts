import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-item',
  templateUrl: './top-item.component.html',
  styleUrls: ['./top-item.component.css']
})
export class TopItemComponent implements OnInit {
  @Input() coin;

  constructor() { }

  ngOnInit(): void {
  }

}
