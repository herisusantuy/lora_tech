import React, {useState, useEffect} from 'react';
import {Text, View, FlatList, TouchableOpacity, Dimensions} from 'react-native';
import styles from '../../styles/cardChart';
import {color} from '../../styles/default';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {dataChart} from '../../data/data_chart';
import Chart from '../common/Chart';
import {generateData, getDataBasedOnRange} from '../../util/generate';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';

const {width} = Dimensions.get('window');
const CardChart = props => {
  const [intervals, setIntervals] = useState([
    {name: '1D', status: true},
    {name: '1W', status: false},
    {name: '1M', status: false},
    {name: '3M', status: false},
    {name: 'ALL', status: false},
  ]);
  const [displayData, setDisplayData] = useState(generateData());
  const renderLeague = ({item}) => {
    const chooseButton = btn => {
      let newIntervals = intervals.map(interval =>
        Object.assign(interval, {status: interval.name == btn ? true : false}),
      );
      setIntervals(newIntervals);
      let days =
        btn == '1D'
          ? 1
          : btn == '1W'
          ? 7
          : btn == '1M'
          ? 30
          : btn == '3M'
          ? 90
          : 1;
      setDisplayData(getDataBasedOnRange(days));
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
      <View style={styles.chartContainer}>
        <ReactNativeZoomableView
          maxZoom={1.5}
          minZoom={0.5}
          zoomStep={0.5}
          initialZoom={1}
          bindToBorders={true}>
          <Chart displayData={displayData} />
        </ReactNativeZoomableView>
      </View>
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

export default CardChart;
