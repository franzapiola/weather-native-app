import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, ImageBackground } from 'react-native';

import SearchBar from './SearchBar';
import Cards from './Cards';
const image = { uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn2.cloudpro.co.uk%2Fsites%2Fcloudprod7%2Ffiles%2Fclouds.jpg&f=1&nofb=1'};

const Index = () => {
  const citiesList = useSelector( state => state.list);
  const isFetching = useSelector( state => state.isFetching);
  // console.log(citiesList);
  return (
    <ImageBackground style={styles.imgContainer} imageStyle={styles.img} source={image}>
      <SearchBar />
      <Cards citiesList={citiesList} isFetching={isFetching}/>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    flex: 1,
    margin: 10,
    marginTop: 5,
    padding: 5
  },
  img: {
    borderRadius: 5
  }
});

export default Index;