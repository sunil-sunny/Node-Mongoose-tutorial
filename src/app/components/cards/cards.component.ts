import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  listArray: any = [];
  titleArray: any = [];
  repeatData: any = [];

  constructor() { }

  ngOnInit(): void {
    this.listArray = ['item1', 'item2', 'item3', 'item4']
    this.titleArray = ['title1', 'title2', 'title3', 'title4'];
    this.repeatData = this.listArray.map((value, index) => {
      return {
        item: value,
        title: this.titleArray[index]
      }
    });


  }

}
