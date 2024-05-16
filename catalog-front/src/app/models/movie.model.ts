export class Movie {
  id!: number;
  title: string;
  director: string;
  year: number;

  constructor(title: string = '', director: string = '', year: number = 0) {
    this.title = title;
    this.director = director;
    this.year = year;
  }
}
