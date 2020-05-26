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
  title: string = '';
  cardData: any = [];
  filteredCardData: any = [];
  options: string[] = ['One', 'Two', 'Three'];
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;

  constructor() { }

  ngOnInit(): void {
    this.cardData = [
      {
        item: 'hello',
        title: 'Title one'
      },
      {
        item: 'goodbye',
        title: 'Title two'
      },
      {
        item: 'greeting',
        title: 'Title three'
      },
      {
        item: 'item',
        title: 'Title four'
      },
    ]
    this.filteredCardData = this.cardData
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );


  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    var x = this.cardData.filter(option => option.title.toLowerCase().includes(filterValue));
    return x.map(card => card.title)

  }

  onSubmit = () => {

    this.filteredCardData = this.cardData.filter(option => option.title.toLowerCase().includes(this.title.toLowerCase()))

  }

}
