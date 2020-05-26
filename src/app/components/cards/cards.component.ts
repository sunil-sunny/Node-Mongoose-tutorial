import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  private listArray: any = [];
  private titleArray: any = [];
  repeatData: any = [];
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  searchTerm: any;
  
  constructor() { }

  getSelectedElementId(id){
    console.log(id);
    this.loadData();
    this.repeatData = this.repeatData.filter(option => option.item.toLowerCase().includes(id));
}

  onChange(newValue) {
    
  }

  ngOnInit(): void {
    // cards graphic symbol reference: https://www.theatlantic.com/technology/archive/2017/08/the-lost-origins-of-playing-card-symbols/537786/
    this.listArray = ['clubs (♣)', 'diamonds (♦)', 'hearts (♥)','spades (♠)']
    
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.listArray.filter(option => option.toLowerCase().includes(filterValue));

  }

  loadData()
  {
    this.titleArray = ['Card 1', 'Card 2', 'Card 3', 'Card 4'];
    this.repeatData = this.listArray.map((value, index) => {
      return {
        item: value,
        title: this.titleArray[index]
      }
    }); 
  }

}
