import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/model/movie';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { MovieService } from 'src/app/service/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})

export class MoviesComponent implements OnInit {

  movieList$: Observable<Movie[]> = this.movieService.getAll();

  phrase: string = '';
  filterPhrase: string = '';
  sorterPhrase: string = '';

  columns: ITableColumn[] =  [
    {title: 'Title', key: 'title'},
    {title: 'Genre', key: 'genre'},
    {title: 'Director', key: 'director'},
    {title: 'Year', key: 'releaseYear'},
    {title: 'Poster', key: 'poster'},
    {title: 'Studio', key: 'studio'},
    {title: 'Active', key: 'active'},
  ];

  constructor(
    private movieService: MovieService,
    private configService: ConfigService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onDelete(movie: Movie): void {
    this.movieService.delete(movie).subscribe(
      movie => this.movieList$ = this.movieService.getAll(),
    );
  }
}

