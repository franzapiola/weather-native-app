import React from 'react';
import { useSelector } from 'react-redux';
import { View, Dimensions, StyleSheet, ImageBackground } from 'react-native';

const image = { uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn2.cloudpro.co.uk%2Fsites%2Fcloudprod7%2Ffiles%2Fclouds.jpg&f=1&nofb=1'}

const Index = () => {
  const cardsList = useSelector( state => state.list);

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imgContainer} imageStyle={styles.img} source={image}>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5
  },
  imgContainer: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width * 0.95,
  },
  img: {
    borderRadius: 5
  }
});

export default Index;