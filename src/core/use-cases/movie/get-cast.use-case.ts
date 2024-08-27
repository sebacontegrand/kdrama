import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { MovieDBCast } from '../../../infraestructure/interfaces/movie-DB-cast-response';
import { CastMapper } from '../../../infraestructure/mappers/cast.mapper';
import { Cast } from '../../entities/cast.entity';

export const getMovieCastUseCase = async(fetcher:HttpAdapter,movieId:number):Promise<Cast[]>=>{

    try {
const{cast} = await fetcher.get<MovieDBCast>(`/${movieId}/credits`);
 const actors = cast.map(CastMapper.fromMovieDBCastToEntity);
 return actors;
    } catch (error) {
        throw new Error(`cannot get movie cast ${movieId}`);
    }
};
