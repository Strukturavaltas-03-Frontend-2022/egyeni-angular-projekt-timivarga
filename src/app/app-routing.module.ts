import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { MovieEditorComponent } from './page/movie-editor/movie-editor.component';
import { MoviesComponent} from './page/movies/movies.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'movie',
    component: MoviesComponent,
  },
  {
    path: 'movie/edit/:id',
    component: MovieEditorComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
