import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import League from './League';
import List from './List';
import WatchList from './WatchList';
const Home = props => (
  <ScrollView>
    <League />
    <List />
    <WatchList />
  </ScrollView>
);

export default Home;
