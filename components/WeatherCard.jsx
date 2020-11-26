/* eslint-disable react/prop-types */
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Card, Text, Button } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/AntDesign';

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 5
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  weatherIcon: {
    width: 50
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const Header = ({name, img}) => (
  <View style={styles.headerContainer}>
    <Image
      style={styles.weatherIcon}
      source={{uri: `http://openweathermap.org/img/wn/${img}.png`}}
    />
    <Text category='h3'>{name}</Text>
    <View style={styles.buttonsContainer}>
      <Icon.Button
        style={styles.button}
        name='close'
        size={24}
        backgroundColor=''
        color='#BE5041'
      >
        <Text></Text>
      </Icon.Button>
    </View>
  </View>
);

const WeatherCard = ({ data }) => {
  const { name, main, sys, weather, wind } = data;
  return (
    <View style={styles.wrapper}>
      <Card header={()=><Header name={name} img={weather[0].icon}/>}>
      </Card>
    </View>
  );
};

export default WeatherCard;
