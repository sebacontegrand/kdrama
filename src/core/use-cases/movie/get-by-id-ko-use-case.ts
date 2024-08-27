import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { tvKO } from '../../../infraestructure/interfaces/tv-DB-KO-response';
import { MovieMapper } from '../../../infraestructure/mappers/movie.mapper';
import {  TVKo } from '../../entities/movie.entity';

export const getTVkoByIdUseCase = async(fetcher:HttpAdapter,movieId:number):Promise<TVKo>=>{

    try {
        const moviesById = await fetcher.get<tvKO>(`/tv/${movieId}`);



        const koreanTV = MovieMapper.fromTVDBtoEntity(moviesById);



        return koreanTV;



    } catch (error) {
        throw new Error(`cannot get movie by ${movieId} id`);
    }
};
