import {useEffect, useState} from 'react';
import {Movie} from '../../core/entities/movie.entity';
import {moviesNowPlayingUseCase} from '../../core/use-cases/movies/now-playing.use-case';
import {
  movieDbFetcher,
  movieDbKOFetcher,
} from '../../config/adapters/movie-DB.adapter';
import {moviesUpComingCase} from '../../core/use-cases/movies/upComing.use-case';
import {moviesTopRatedCase} from '../../core/use-cases/movies/top-rated.use-case';
import {moviesPopular} from '../../core/use-cases/movies/popular.use-case';
import {koMoviesUseCase} from '../../core/use-cases/movies/korean-discover.use-case';

let popularPageNumber = 1;
export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [upComing, setUpComing] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [koTv, setKoTv] = useState<Movie[]>([]);
  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const [
      nowPlayingMovies,
      upComingMovies,
      topRatedMovies,
      popularMovies,
      trendingKoTv,
    ] = await Promise.all([
      moviesNowPlayingUseCase(movieDbFetcher),
      moviesUpComingCase(movieDbFetcher),
      moviesTopRatedCase(movieDbFetcher),
      moviesPopular(movieDbFetcher),
      koMoviesUseCase(movieDbKOFetcher),
    ]);
    setNowPlaying(nowPlayingMovies);
    setPopular(popularMovies);
    setUpComing(upComingMovies);
    setTopRated(topRatedMovies);
    setKoTv(trendingKoTv);
    setIsLoading(false);
  };
  return {
    isLoading,
    nowPlaying,
    upComing,
    topRated,
    popular,
    koTv,
    popularNextPage: async () => {
      popularPageNumber++;
      const popularMovies = await moviesPopular(movieDbFetcher, {
        page: popularPageNumber,
      });
      setPopular(prev => [...prev, ...popularMovies]);
    },
  };
};
