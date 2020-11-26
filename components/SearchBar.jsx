import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Input, Button } from '@ui-kitten/components';

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

function SearchBar() {
  const [ value, setValue ] = React.useState('');
  const onSubmit = string => {
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
        onPress={() => onSubmit(value)}
      >

      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'flex-start',
    width: Dimensions.get('window').width * 0.95,

    flexDirection: 'row'
  },
  input: {
    flex: 0.9
  },
  button: {
    flex: 0.1
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);