package com.moviecatalog.catalog;

import com.moviecatalog.catalog.models.Movie;
import com.moviecatalog.catalog.services.MovieService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {

    private final MovieService movieService;

    public DataLoader(MovieService movieService) {
        this.movieService = movieService;
    }

    @Override
    public void run(String... args) {
        addInitialMovies();
    }

    private void addInitialMovies() {
        if (movieService.getAllMovies().isEmpty()) {
            Movie movie1 = new Movie();
            movie1.setTitle("Star Wars: The Phantom Menace");
            movie1.setDirector("George Lucas");
            movie1.setYear(1999);

            Movie movie2 = new Movie();
            movie2.setTitle("Star Wars: Attack of the Clones");
            movie2.setDirector("George Lucas");
            movie2.setYear(2002);

            movieService.saveMovie(movie1);
            movieService.saveMovie(movie2);
        }
    }
}
