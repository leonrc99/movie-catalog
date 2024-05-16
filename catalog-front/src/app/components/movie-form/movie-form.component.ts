import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Movie } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie-form',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './movie-form.component.html',
  styleUrl: './movie-form.component.css',
})
export class MovieFormComponent {
  movie: Movie = new Movie();
  errorMessage!: string;

  constructor(private movieService: MovieService, private router: Router) {}

  newMovie(): void {
    this.movieService.newMovie(this.movie).subscribe(
      () => {
        console.log('Filme adicionado com sucesso!');
        this.movie = new Movie();
        this.router.navigate(['/filmes']);
      },
      (error) => {
        console.error('Erro ao adicionar filme:', error);
        this.errorMessage =
          'Erro ao adicionar filme. Por favor, tente novamente.';
      }
    );
  }
}
