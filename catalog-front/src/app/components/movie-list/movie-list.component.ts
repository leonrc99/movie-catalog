import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Movie } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent implements OnInit {
  public movies: Movie[] = [];

  constructor(private router: Router, private service: MovieService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  public getMovies() {
    this.service.getMovies().subscribe((movies) => (this.movies = movies));
  }

  deleteMovie (id: number): void {
    if (confirm('Tem certeza que deseja excluir este filme?')) {
      this.service.deleteMovie(id)
        .subscribe(() => {
          console.log('Filme excluído com sucesso!');
          this.getMovies();
        }, error => {
          console.error('Erro ao excluir filme:', error);
        });
    }
  }

  public updateMovie(id: number) {
    this.router.navigate(['/editar-filme', id]);
  }

  public newMovie() {
    this.router.navigate(['/novo-filme']);
  }
}
