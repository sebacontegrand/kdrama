
import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { movieGralResponse } from '../../../infraestructure/interfaces/movie-DB-responses';
import { MovieMapper } from '../../../infraestructure/mappers/movie.mapper';
import { Movie } from '../../entities/movie.entity';

export const moviesTopRatedCase = async(fetcher:HttpAdapter):Promise<Movie[]>=>{

    try {
       const topRatedMovies = await fetcher.get<movieGralResponse>('/top_rated');

return topRatedMovies.results.map(MovieMapper.fromMovieDBResultToEntity);

    } catch (error) {
        console.log(error);
        throw new Error('fetching goes wrong with movies');
    }



};
