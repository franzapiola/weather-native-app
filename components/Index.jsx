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
  const image = { uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn2.cloudpro.co.uk%2Fsites%2Fcloudprod7%2Ffiles%2Fclouds.jpg&f=1&nofb=1'};

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
    <ImageBackground style={styles.imgContainer} imageStyle={styles.img} source={image}>
      <SearchBar />
      <Cards citiesList={citiesList} isFetching={isFetching} expand={expand}/>
      <Modal visible={state.showModal} onBackdropPress={hide}>
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