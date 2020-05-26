import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  listArray: any[];

  constructor() { }

  ngOnInit(): void {
    this.listArray = ['item1', 'item2', 'item3', 'item4']

  }

}
