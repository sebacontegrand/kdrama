
import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { NowPlayingResponse } from '../../../infraestructure/interfaces/movie-DB-responses';
import { MovieMapper } from '../../../infraestructure/mappers/movie.mapper';
import { Movie } from '../../entities/movie.entity';

export const moviesNowPlayingUseCase = async(fetcher:HttpAdapter):Promise<Movie[]>=>{

    try {
       const nowPlaying = await fetcher.get<NowPlayingResponse>('/now_playing');

return nowPlaying.results.map(MovieMapper.fromMovieDBResultToEntity);

    } catch (error) {
        console.log(error);
        throw new Error('fetching goes wrong with movies');
    }



};
