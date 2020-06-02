import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.css']
})
export class MoviedetailComponent implements OnInit {
  movieData: any;

  constructor(private route: ActivatedRoute,
    private moviesService: MoviesService ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.moviesService.getMoviesById(id).subscribe((data) => {
      var len = (Object.keys(data).length);
      this.movieData=data;
    });
  }

}
