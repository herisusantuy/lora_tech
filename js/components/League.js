import React from 'react';
import {Text, View, FlatList} from 'react-native';
import CardLeague from './common/CardLeague';
import {myLeagueData} from '../data/my_league';
import styles from '../styles/league';

myLeagueData.sort((a, b) => b.pnl - a.pnl);
let displayLeague = [];
for (let i = 0; i < 4; i++) {
  if (i < 3) {
    let obj = myLeagueData[i];
    obj.number = i + 1;
    displayLeague.push(obj);
  } else {
    if (myLeagueData[i].username != 'Me') {
      let idx = myLeagueData.findIndex(l => l.username == 'Me');
      let obj = myLeagueData[idx];
      obj.number = idx + 1;
      displayLeague.push(obj);
    }
  }
}

const League = props => {
  const renderLeague = displayLeague.map((item, index) => (
    <CardLeague key={index} league={item} />
  ));

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>My League</Text>
        <Text style={{fontWeight: 'bold'}}>2021 Apr</Text>
      </View>
      {renderLeague}
    </View>
  );
};

export default League;
