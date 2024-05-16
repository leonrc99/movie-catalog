import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-movie',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './update-movie.component.html',
  styleUrl: './update-movie.component.css',
})
export class UpdateMovieComponent {
  public movie!: Movie;

  constructor(private service: MovieService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const id = +idParam;
      this.loadMovie(id);
    } else {
      alert('Filme para edição não encontrado!')
      this.router.navigate(['/filmes']);
    }
  }

  public loadMovie(id: number): void {
    this.service.getMovieById(id).subscribe((movie) => {
      this.movie = movie;
    });
  }

  public updateMovie(): void {
    if (this.movie) {
      this.service.updateMovie(this.movie.id, this.movie).subscribe(() => {
        alert('Filme atualizado com sucesso!');
        this.router.navigate(['/filmes']);
      }, (error: any) => {
        console.error('Erro ao atualizar filme:', error);
        alert('Erro ao atualizar filme.')
      });
    }
  }
}
