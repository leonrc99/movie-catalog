import { Routes } from '@angular/router';
import { MovieFormComponent } from './components/movie-form/movie-form.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { UpdateMovieComponent } from './components/update-movie/update-movie.component';

export const routes: Routes = [
    { path: '', redirectTo: '/filmes', pathMatch: 'full' },
    { path: 'filmes', component: MovieListComponent },
    { path: 'novo-filme', component: MovieFormComponent},
    { path: 'editar-filme/:id', component: UpdateMovieComponent },
];
