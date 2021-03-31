import React from 'react';
import {Text, View, FlatList} from 'react-native';
import CardLeague from './common/CardLeague';
import {myLeagueData} from '../data/my_league';
import styles from '../styles/league';

let displayLeage = [];
for (let i = 0; i < 4; i++) {
  if (i < 3) {
    let obj = myLeagueData[i];
    obj.number = i + 1;
    displayLeage.push(obj);
  } else {
    if (myLeagueData[i].username != 'Me') {
      let idx = myLeagueData.findIndex(l => l.username == 'Me');
      let obj = myLeagueData[idx];
      obj.number = idx + 1;
      displayLeage.push(obj);
    }
  }
}

const League = props => {
  const renderLeague = ({item}) => <CardLeague league={item} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My League</Text>
      <FlatList
        data={displayLeage}
        renderItem={renderLeague}
        keyExtractor={item => item.number}
      />
    </View>
  );
};

export default League;
