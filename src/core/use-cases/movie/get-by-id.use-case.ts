import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { MovieDBMovie } from '../../../infraestructure/interfaces/movie-DB-byId-response';
import { MovieMapper } from '../../../infraestructure/mappers/movie.mapper';
import { fullMovie } from '../../entities/movie.entity';

export const getMovieByIdUseCase = async(fetcher:HttpAdapter,movieId:number):Promise<fullMovie>=>{

    try {
        const moviesById = await fetcher.get<MovieDBMovie>(`/${movieId}`);

        const fullMovie = MovieMapper.fromMovieDBtoEntetity(moviesById);

        return fullMovie;



    } catch (error) {
        throw new Error(`cannot get movie by ${movieId} id`);
    }
};
