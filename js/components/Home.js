import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import League from './League';
import List from './List';
import WatchList from './WatchList';
import Profile from './Profile';
import CardChart from './common/CardChart';

const Home = props => {
  return (
    <View style={{paddingBottom: 70}}>
      <Profile name="HKD 102,000.00" value={31.2} />
      <ScrollView nestedScrollEnabled={true} style={{marginBottom: 20}}>
        <CardChart />
        <League />
        <List />
        <WatchList navigation={props.navigation} />
      </ScrollView>
    </View>
  );
};

export default Home;
