import React from 'react';
import {Text, View, FlatList} from 'react-native';
import CardWatch from './common/CardWatch';
import styles from '../styles/list';
import {dataChart} from '../data/data_chart';

const WatchList = props => {
  const renderWatch = ({item, index}) => <CardWatch key={index} item={item} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Watch List</Text>
      <FlatList
        data={dataChart.splice(0, 15)}
        renderItem={renderWatch}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

export default WatchList;
