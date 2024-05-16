package com.moviecatalog.catalog.services;

import com.moviecatalog.catalog.models.Movie;
import com.moviecatalog.catalog.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {
    @Autowired
    private MovieRepository movieRepository;

    public List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }

    public Movie getOneMovie(Long id) {
        return movieRepository.findById(id).orElse(null);
    }

    public Movie saveMovie(Movie filme) {
        return movieRepository.save(filme);
    }

    public Movie updateMovie(Long id, Movie updatedMovie) {
        Movie movie = getOneMovie(id);
        if (movie != null) {
            movie.setTitle(updatedMovie.getTitle());
            movie.setDirector(updatedMovie.getDirector());
            movie.setYear(updatedMovie.getYear());
            return saveMovie(movie);
        } else {
            return null;
        }
    }

    public void deleteMovie(Long id) {
        movieRepository.deleteById(id);
    }
}
