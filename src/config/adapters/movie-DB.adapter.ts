
import { THE_MOVIE_DB_KEY } from '@env';
import { AxiosAdapter } from './http/axios.adapter';

export const movieDbFetcher = new AxiosAdapter({
    baseUrl:'https://api.themoviedb.org/3/movie',
    params:{
        api_key:THE_MOVIE_DB_KEY,
    },

});
export const movieDbKOFetcher = new AxiosAdapter({
    baseUrl:'https://api.themoviedb.org/3',
    params:{
        api_key:THE_MOVIE_DB_KEY,
    },

});
