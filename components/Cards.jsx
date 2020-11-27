/* eslint-disable react/prop-types */
import React from 'react';
import { View, ScrollView } from 'react-native';
import WeatherCard from './WeatherCard';
import { Spinner } from '@ui-kitten/components';

export default function Cards({citiesList, isFetching, expand}) {
  return (
    <ScrollView >
      {citiesList.map((obj, i) => (
        <WeatherCard index={i} key={i} data={obj} expand={()=>expand(obj)}/>
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
