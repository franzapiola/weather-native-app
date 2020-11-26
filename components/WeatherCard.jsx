/* eslint-disable react/prop-types */
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Card, Text } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/AntDesign';

//Redux
import { connect } from 'react-redux';
import { removeCard } from '../redux/actions';

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



const WeatherCard = ({ index, data, removeCard }) => {
  const { name, main, sys, weather, wind } = data;
  
  const Header = () => (
    <View style={styles.headerContainer}>
      <Image
        style={styles.weatherIcon}
        source={{uri: `http://openweathermap.org/img/wn/${weather[0].icon}.png`}}
      />
      <Text category='h3'>{name}</Text>
      <Icon.Button
        style={styles.button}
        name='close'
        size={24}
        backgroundColor=''
        color='#BE5041'
        onPress={()=>removeCard(index)}
      >
        <Text></Text>
      </Icon.Button>
    </View>
  );

  return (
    <View style={styles.wrapper}>
      <Card header={Header}>
      </Card>
    </View>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    removeCard: index => dispatch(removeCard(index))
  };
};

export default connect(null, mapDispatchToProps)(WeatherCard);
