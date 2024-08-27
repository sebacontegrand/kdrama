
import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { movieGralResponse } from '../../../infraestructure/interfaces/movie-DB-responses';
import { MovieMapper } from '../../../infraestructure/mappers/movie.mapper';
import { Movie } from '../../entities/movie.entity';

export const moviesUpComingCase = async(fetcher:HttpAdapter):Promise<Movie[]>=>{

    try {
       const upComingMovies = await fetcher.get<movieGralResponse>('/upcoming');

return upComingMovies.results.map(MovieMapper.fromMovieDBResultToEntity);

    } catch (error) {
        console.log(error);
        throw new Error('fetching goes wrong with movies');
    }



};
