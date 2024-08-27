
import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { movieGralResponse } from '../../../infraestructure/interfaces/movie-DB-responses';
import { MovieMapper } from '../../../infraestructure/mappers/movie.mapper';
import { Movie } from '../../entities/movie.entity';


interface Options{
    page?:number;
    limit?:number
}
export const moviesPopular = async(fetcher:HttpAdapter,options?:Options):Promise<Movie[]>=>{

    try {
       const popularMovies = await fetcher.get<movieGralResponse>('/popular',{
        params:{
            page:options?.page ?? 1,
        },
       });

return popularMovies.results.map(MovieMapper.fromMovieDBResultToEntity);

    } catch (error) {
        console.log(error);
        throw new Error('fetching goes wrong with movies');
    }



};
