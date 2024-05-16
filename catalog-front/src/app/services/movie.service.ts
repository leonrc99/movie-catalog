import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private baseUrl = 'http://localhost:8080/movies'; // URL base da API

  constructor(private http: HttpClient) {}

  public getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.baseUrl);
  }

  public getMovieById(id: number): Observable<Movie> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Movie>(url);
  }

  public newMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.baseUrl, movie);
  }

  public updateMovie(id: number, movie: Movie): Observable<Movie> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<Movie>(url, movie);
  }

  public deleteMovie(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url);
  }
}
