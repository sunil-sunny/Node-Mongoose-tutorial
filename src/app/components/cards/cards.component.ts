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
  listArray: any = [];
  titleArray: any = [];
  repeatData: any = [];
  options: string[] = ['One', 'Two', 'Three'];
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;

  constructor() { }

  ngOnInit(): void {
    this.listArray = ['hello', 'goodbye', 'greeting', 'congratulations']
    this.titleArray = ['title1', 'title2', 'title3', 'title4'];
    this.repeatData = this.listArray.map((value, index) => {
      return {
        item: value,
        title: this.titleArray[index]
      }
    });
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

}
