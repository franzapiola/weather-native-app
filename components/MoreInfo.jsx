/* eslint-disable react/prop-types */
import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { Card, Text } from '@ui-kitten/components';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5
  },
  cardBody: {
    height: Dimensions.get('screen').height * 0.45
  },
  first: {
    flex: 1,
    flexDirection: 'row'
  },
  second: {
    flex: 1.5,
    alignItems: 'center'
  },
  third: {
    backgroundColor: 'yellow',

  },
  iconWrapper: {
    alignItems: 'center'
  },
  weatherIcon: {
    width: 100,
  }
});

export default function MoreInfo({ data }) {
  console.log(data);
  const { name, main, clouds, weather, sys, wind } = data;

  const Header = () => (
    <View style={styles.headerContainer}>
      <Text category='h1'>{`${name}, ${sys.country}`}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <Card style={{padding: 5}} header={Header}>
        <View style={styles.cardBody}>
          <View style={styles.first}>
            <Image
              style={styles.weatherIcon}
              source={{uri: `http://openweathermap.org/img/wn/${weather[0].icon}.png`}}
            />
            <View style={{alignSelf: 'center'}}>
              <Text category='h5'>{weather[0].description.charAt(0).toUpperCase() + weather[0].description.slice(1)}</Text>
              <Text>{`${clouds.all}% nublado`}</Text>
            </View>
          </View>
          <View style={styles.second}>
            <Text category='h6'>Temperatura: {main.temp}ºC</Text>
            <Text>Min: {main.temp_min}ºC</Text>
            <Text>Máx: {main.temp_max}ºC</Text>
            <Text>S. térmica: {main.feels_like}ºC</Text>
            <Text>Humedad al {main.humidity}%</Text>
            <Text>Presión atm. {main.pressure} hPa</Text>
            <Text>Vientos: {wind.speed} m/s</Text>
          </View>
          <View style={styles.third}>

          </View>
        </View>
      </Card>
    </View>
  );
}
