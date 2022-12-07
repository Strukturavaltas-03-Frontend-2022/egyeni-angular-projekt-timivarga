import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-editor',
  templateUrl: './movie-editor.component.html',
  styleUrls: ['./movie-editor.component.scss']
})
export class MovieEditorComponent implements OnInit {

  movie$: Observable<Movie> = this.ar.params.pipe(
    switchMap( params => this.movieService.get(params['id'])),
  )


  constructor(
    private ar: ActivatedRoute,
    private movieService: MovieService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onUpdate(movie: Movie): void {
    this.movieService.update(movie).subscribe(
      movie => this.router.navigate(['/','movie']),
    )
  }


}
