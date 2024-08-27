/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {useMovies} from '../../hooks/useMovies';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PosterCarroussel} from '../../components/movies/PosterCarroussel';
import {HorizontalCarroussel} from '../../components/movies/HorizontalCarroussel';
import {FullScreenLoader} from '../../components/loader/FullScreenLoader';

export const HomeScreen = () => {
  const {
    isLoading,
    // nowPlaying,
    popular,
    // topRated,
    // upComing,
    popularNextPage,
    koTv,
  } = useMovies();

  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return <FullScreenLoader />;
  }
  return (
    <ScrollView>
      <View style={{marginTop: top + 20, paddingBottom: 30}}>
        <PosterCarroussel movies={koTv} title={'KDramas top-rated'} />

        <HorizontalCarroussel
          movies={popular}
          title={'Popular world'}
          loadNextPage={popularNextPage}
        />
        {/* <HorizontalCarroussel movies={topRated} title={'Best Rated Ever'} />
        <HorizontalCarroussel movies={upComing} title={'Upcoming'} /> */}
      </View>
    </ScrollView>
  );
};
