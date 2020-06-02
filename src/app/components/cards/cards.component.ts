import { MoviesService } from './../../services/movies.service';
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

  constructor(private moviesService: MoviesService) { }

  getSelectedElementId(id) {
    console.log(id);
    this.repeatData = this.repeatData.filter(option => option.item.toLowerCase().includes(id));
  }

  onChange(newValue) {

  }

  ngOnInit(): void {

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }
  private _filter(value: string): string[] {
    if (value === '') return [];
    const filterValue = value.toLowerCase();
    this.listArray = [];
    this.repeatData = [];
    this.moviesService.getMovies(value).subscribe((data) => {
      var len = (Object.keys(data).length);
      var count = Math.min(len, 5);
      for (var i = 0; i < count; i++) {
        this.listArray.push(data[i].title);
        this.repeatData.push({
          item: data[i].description,
          title: data[i].title
        })
      }
    });
    return this.listArray;

  }


}
