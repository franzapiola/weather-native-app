/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getASFavs } from '../redux/actions';
import { StyleSheet, ImageBackground } from 'react-native';
import { Modal } from '@ui-kitten/components';

import SearchBar from './SearchBar';
import Cards from './Cards';
import MoreInfo from './MoreInfo';

const mapStateToProps = state => {
  return {
    citiesList: state.main.list,
    isFetching: state.main.isFetching,
    favsFetched: state.main.favsFetched,
    favorites: state.favs.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchFavoriteCities: arr => dispatch(getASFavs(arr))
  };
};

const Index = ({citiesList, isFetching, favorites, favsFetched, fetchFavoriteCities}) => {

  const [ state, setState ] = useState({
    showModal: false,
    modalData: null
  });

  const expand = modalData => {
    setState({
      showModal:true,
      modalData
    });
  };

  const hide = () => {
    setState({
      showModal: false,
      modalData: null
    });
  };


  useEffect(()=>{
    const get = async (arr) => await fetchFavoriteCities(arr);
    //Si la flag favsFetched está en false, y tenemos favoritos guardados, los buscamos automáticamente
    if(!favsFetched && favorites.length) {
      get(favorites);
    }
  }, [favsFetched, favorites]);

  return (
    // eslint-disable-next-line no-undef
    <ImageBackground style={styles.imgContainer} imageStyle={styles.img} source={require('../assets/clouds.jpg')}>
      <SearchBar />
      <Cards citiesList={citiesList} isFetching={isFetching} expand={expand}/>
      <Modal backdropStyle={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}} visible={state.showModal} onBackdropPress={hide}>
        <MoreInfo data={state.modalData} hide={hide}/>
      </Modal>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    flex: 1,
    margin: 10,
    marginTop: 5,
    padding: 5
  },
  img: {
    borderRadius: 5
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);