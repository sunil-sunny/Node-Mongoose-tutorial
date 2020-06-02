import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Router } from '@angular/router';

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
  movie_ID: number;

  constructor(private moviesService: MoviesService,private router: Router) { }

  getSelectedElementId(id) {
    console.log(id);
    this.moviesService.getMovies(id).subscribe((data) => {
      var len = (Object.keys(data).length);      
      //var count = Math.min(len, 5);
      for (var i = 0; i < len; i++) {
        this.movie_ID = data[i].show_id;
        //this.listArray.push(data[i].title);
        this.repeatData.push({
          id:data[i].show_id,
          item: data[i].description,
          title: data[i].title
        })
      }
    });
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

    const filterValue = value.toLowerCase();
    this.listArray = [];
    this.repeatData = [];
    this.moviesService.getMovies(value).subscribe((data) => {
      var len = (Object.keys(data).length);
      for (var i = 0; i < len; i++) {
        this.listArray.push(data[i].title);
      }
    });
    return this.listArray;

  }

  getMovieById(){
    this.router.navigate(['/movie', this.movie_ID]);
  }

}
