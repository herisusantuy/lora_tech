import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import League from './League';
import List from './List';
import WatchList from './WatchList';
import Profile from './Profile';
import Chart from './common/Chart';
const Home = props => (
  <ScrollView>
    <Profile name="HKD 102,000.00" value={31.2} />
    <Chart />
    <League />
    <List />
    <WatchList />
  </ScrollView>
);

export default Home;
