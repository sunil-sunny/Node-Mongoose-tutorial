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
    this.listArray = ['hello', 'goodbye', 'greeting', 'congratulations']
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
    this.titleArray = ['title1', 'title2', 'title3', 'title4'];
    this.repeatData = this.listArray.map((value, index) => {
      return {
        item: value,
        title: this.titleArray[index]
      }
    });
    console.log(this.repeatData);   
  }

}
