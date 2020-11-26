/* eslint-disable react/prop-types */
import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import WeatherCard from './WeatherCard';
import { Spinner } from '@ui-kitten/components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default function Cards({citiesList, isFetching}) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {citiesList.map((obj, i) => (
        <WeatherCard index={i} key={i} data={obj}/>
      ))}
      <View style={{alignSelf:'center'}}>
        {
          isFetching &&
          <Spinner
            size='giant'
          />
        }
      </View>
    </ScrollView>
  );
}
