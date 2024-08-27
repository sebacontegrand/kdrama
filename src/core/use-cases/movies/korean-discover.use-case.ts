


import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { KoTVResults } from '../../../infraestructure/interfaces/tv-DB-KO-response';


import { MovieMapper } from '../../../infraestructure/mappers/movie.mapper';
import { Movie } from '../../entities/movie.entity';

export const koMoviesUseCase = async(fetcher:HttpAdapter):Promise<Movie[]>=>{

    try {
       const KoMovies = await fetcher.get<KoTVResults>('discover/tv?with_original_language=ko&sort_by=vote_average.desc&vote_count.gte=100');

return KoMovies.results.map(MovieMapper.fromTVDBtoEntity);

    } catch (error) {
        console.log(error);
        throw new Error('fetching goes wrong with movies');
    }



};
