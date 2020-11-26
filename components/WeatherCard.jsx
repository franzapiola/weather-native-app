/* eslint-disable react/prop-types */
import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Card, Text } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/AntDesign';

//Redux
import { connect } from 'react-redux';
import { removeCard, addFavorite, removeFavorite } from '../redux/actions';

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
  closeButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardBody: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
});



const WeatherCard = ({ index, removeCard, expand, addFavorite, removeFavorite, favorites, data  }) => {
  const { name, main, weather } = data;

  const isFavorite = favorites.includes(name);

  const Header = () => (
    <View style={styles.headerContainer}>
      <Image
        style={styles.weatherIcon}
        source={{uri: `http://openweathermap.org/img/wn/${weather[0].icon}.png`}}
      />
      <Text category='h3'>{name}</Text>
      <Icon.Button
        style={styles.closeButton}
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
        <View
          onPress={expand}
          style={styles.cardBody}
        >
          <>
            <View style={{flex: .6}}>
              <Text>Temperatura: {main.temp}ºC</Text>
              <Text>S. térmica: {main.feels_like}ºC</Text>
            </View>
            <View style={{...styles.buttonsWrapper, flex: .4}}>
              <TouchableHighlight
                onPress={isFavorite ? ()=>removeFavorite(name) : ()=>addFavorite(name)}
                style={styles.cardBody}
              >
                <Icon
                  name={isFavorite ? 'heart' : 'hearto'}
                  color='#BE5041'
                  size={36}
                />
              </TouchableHighlight>
              <TouchableHighlight
                onPress={expand}
                style={styles.cardBody}
              >
                <Icon
                  name='infocirlce'
                  color='#0197AA'
                  size={36}
                />
              </TouchableHighlight>
            </View>
          </>
        </View>
      </Card>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    favorites: state.favs.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeCard: index => dispatch(removeCard(index)),
    addFavorite: name => dispatch(addFavorite(name)),
    removeFavorite: name => dispatch(removeFavorite(name))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherCard);
