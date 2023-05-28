import {View, Text} from 'react-native';
import React from 'react';
import HomeMap from '../../components/HomeMap/HomeMap';
import CovidMessage from '../../components/CovidMessage/CovidMessage';
import HomeSearch from '../../components/HomeSearch/HomeSearch';

const HomeScreen = () => {
  return (
    <View>
      <HomeMap />
      <CovidMessage />
      <HomeSearch />
    </View>
  );
};

export default HomeScreen;
