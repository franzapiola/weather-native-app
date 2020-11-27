/* eslint-disable react/prop-types */
import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Input, Button, Text } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/AntDesign';

//Redux
import { connect } from 'react-redux';
import { search } from '../redux/actions';

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    search: city => dispatch(search(city)),
    searchFailed: () => dispatch({ type: 'FINISH_SEARCH'})
  };
};

function SearchBar({ search, searchFailed, isFetching }) {
  const [ state, setState ] = React.useState({
    value: '',
    error: ''
  });

  const showError = string => {
    if(state.error) return;

    setState({
      ...state,
      error: string
    });
    setTimeout(()=>{
      setState({
        ...state,
        error: ''
      });
    }, 4000);
  };

  const onSearch = city => {
    search(city)
      .then(()=>{
        setState({
          ...state,
          value: ''
        });
      })
      .catch( err => {
        searchFailed();

        if(err.response.data.cod == 404){
          showError('No se encontró la ciudad...');
        } else showError('Hubo un problema con la búsqueda...');
      });
  };
  return (
    <>
      <View style={styles.wrapper}>
        <Input
          style={styles.input}
          value={state.value}
          size='large'
          placeholder='Busca una ciudad...'
          onChangeText={nextValue => setState({
            ...state,
            value: nextValue
          })}
          editable={!isFetching}
        />
        <Button
          style={styles.button}
          appearance='outline'
          onPress={() => onSearch(state.value)}
          disabled={isFetching}
        >
          <Icon name="search1" size={24} color="#0E0A5B" />
        </Button>
      </View>
      <View>
        <Text style={styles.error}>{state.error}</Text>
      </View>
    </>
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
  },
  error: {
    color: '#DB4023',
    fontWeight: 'bold',
    alignSelf: 'center'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);