/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Input, Button } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/AntDesign';

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    test: () => dispatch(()=>{return {};})
  };
};

function SearchBar({ isFetching }) {
  const [ value, setValue ] = React.useState('');
  const onSearch = string => {
    console.log(string);
    setValue('');
  };
  return (
    <View style={styles.wrapper}>
      <Input
        style={styles.input}
        value={value}
        size='large'
        placeholder='Busca una ciudad...'
        onChangeText={nextValue => setValue(nextValue)}
      />
      <Button
        style={styles.button}
        appearance='outline'
        onPress={() => onSearch(value)}
        disabled={isFetching}
      >
        <Icon name="search1" size={24} color="#0E0A5B" />
      </Button>
    </View>
  );
}


const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'flex-start',
    width: Dimensions.get('window').width * 0.95,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    flex: 0.9,
  },
  button: {
    flex: 0.1,
    borderRadius: 5,
    height: Dimensions.get('window').height * 0.07
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);