/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-shadow */
import {useEffect, useState} from 'react';
import {getMovieByIdUseCase} from '../../core/use-cases/movie/get-by-id.use-case';
import {
  movieDbFetcher,
  // movieDbKOFetcher,
} from '../../config/adapters/movie-DB.adapter';
import {fullMovie} from '../../core/entities/movie.entity';
import {Cast} from '../../core/entities/cast.entity';
import {getMovieCastUseCase} from '../../core/use-cases/movie/get-cast.use-case';
// import {getTVkoByIdUseCase} from '../../core/use-cases/movie/get-by-id-ko-use-case';

export const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movieById, setMovieById] = useState<fullMovie>();
  const [cast, setCast] = useState<Cast[]>();
  // const [TVkoSeries, setTVkoSeries] = useState<TVKo>();
  useEffect(() => {
    // loadKOTV();
    loadMovie();
  }, [movieId]);

  const loadMovie = async () => {
    setIsLoading(true);
    const FullMoviePromise = getMovieByIdUseCase(movieDbFetcher, movieId);
    const castPromise = getMovieCastUseCase(movieDbFetcher, movieId);

    const [FullMovie, cast] = await Promise.all([
      FullMoviePromise,
      castPromise,
    ]);

    setMovieById(FullMovie);
    setCast(cast);
    setIsLoading(false);
  };

  // const loadKOTV = async () => {
  //   setIsLoading(true);
  //   const TVkoPromise = getTVkoByIdUseCase(movieDbKOFetcher, movieId);
  //   const [TVkoSeries] = await Promise.all([TVkoPromise]);
  //   setTVkoSeries(TVkoSeries);
  //   setIsLoading(false);
  // };

  return {isLoading, movieById, cast};
};
