import { Movie, TVKo, fullMovie } from '../../core/entities/movie.entity';
import type{ MovieDBMovie } from '../interfaces/movie-DB-byId-response';
import type{ Result } from '../interfaces/movie-DB-responses';
import {  tvKO } from '../interfaces/tv-DB-KO-response';



export class MovieMapper{
    static fromMovieDBResultToEntity(result:Result):Movie{
return{
    id:result.id,
    title:result.title,
    description:result.overview,
    releaseDate:new Date(result.release_date),
    rating:result.vote_average,
    poster:`https://image.tmdb.org/t/p/w500${result.poster_path}`,
    backDrop:`https://image.tmdb.org/t/p/w500${result.backdrop_path}`,

};
    }

    static fromMovieDBtoEntetity(movie:MovieDBMovie):fullMovie{
return{
    id:movie.id,
    title:movie.title,
    description:movie.overview,
    releaseDate:new Date(movie.release_date),
    rating:movie.vote_average,
    poster:`https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    backDrop:`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
    genres:movie.genres.map(e=>e.name),
    duration:movie.runtime,
    budget:movie.budget,
    originalTitle:movie.original_title,
    productionCompanies:movie.production_companies.map(e=>e.name),

};

    }
    static fromTVDBtoEntity(tv:tvKO):TVKo{
        return{
            id:tv.id,
            title:tv.name,
            releaseDate:tv.first_air_date,
            poster:`https://image.tmdb.org/t/p/w500${tv.poster_path}`,
            backDrop:`https://image.tmdb.org/t/p/w500${tv.backdrop_path}`,
            originalTitle:tv.original_name,
            popularity:tv.popularity,
            rating:tv.vote_count,
            vote_average:tv.vote_average,
            description:tv.overview,
        };
    }
}
