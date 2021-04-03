import React from 'react';
import {Text, View, FlatList} from 'react-native';
import CardWatch from './common/CardWatch';
import styles from '../styles/list';
import {dataChart} from '../data/data_chart';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomButton from './common/CustomButton';

const WatchList = props => {
  const renderWatch = dataChart
    .splice(0, 3)
    .map((item, index) => <CardWatch key={index} item={item} />);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Watch List</Text>
      {renderWatch}
      <View style={styles.detailContainer}>
        <Text style={styles.detail}>More</Text>
        <AntDesign name="doubleright" size={15} />
      </View>
      <View style={{padding: 15, marginBottom: 15}}>
        <CustomButton
          title="Sign Out"
          onPressButton={() => props.navigation.pop()}
        />
      </View>
    </View>
  );
};

export default WatchList;
