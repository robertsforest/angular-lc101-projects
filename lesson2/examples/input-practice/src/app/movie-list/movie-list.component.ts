import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
    movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];

    constructor() { }

    ngOnInit() {
    }
   
    addMovie(movieToAdd: string){
        movieToAdd = movieToAdd.trim();
        if (!this.movies.includes(movieToAdd) && movieToAdd !== ''){
            this.movies.push(movieToAdd);
            return "";
        } else {
            return "Please enter a movie that isn't blank or already included";
        }
    }

}