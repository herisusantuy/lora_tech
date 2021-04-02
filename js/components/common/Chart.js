import React, {useState, useEffect} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import styles from '../../styles/chart';
import {color} from '../../styles/default';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Chart = props => {
  const [intervals, setIntervals] = useState([
    {name: '1D', status: false},
    {name: '1W', status: false},
    {name: '1M', status: false},
    {name: '3M', status: false},
    {name: 'ALL', status: false},
  ]);

  const renderLeague = ({item}) => {
    const chooseButton = btn => {
      let newIntervals = intervals.map(interval => {
        if (interval.name == btn) {
          interval.status = true;
        } else {
          interval.status = false;
        }
        return interval;
      });
      setIntervals(newIntervals);
    };
    return (
      <TouchableOpacity
        style={[
          styles.btnContainer,
          {
            borderBottomColor: item.status ? color.blue : color.white,
          },
        ]}
        onPress={() => chooseButton(item.name)}>
        <Text
          style={{
            color: item.status ? color.darkBlue : color.black,
            fontWeight: item.status ? 'bold' : 'normal',
          }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}></View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <FlatList
          data={intervals}
          renderItem={renderLeague}
          keyExtractor={(item, index) => index}
          horizontal
        />
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.detail}>Detail</Text>
        <AntDesign name="doubleright" size={15} />
      </View>
    </View>
  );
};

export default Chart;
