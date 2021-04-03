import React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import {
  VictoryBar,
  VictoryLine,
  VictoryChart,
  VictoryTheme,
} from 'victory-native';
import styles from '../../styles/chart';
import {color} from '../../styles/default';
const {width} = Dimensions.get('window');

const Chart = props => (
  <View
    style={[
      styles.container,
      {
        height: props.style && props.style.height ? props.style.height : 200,
        width: props.style && props.style.width ? props.style.width : width,
      },
    ]}>
    <VictoryLine
      maxDomain={{y: 2500}}
      minDomain={{y: 1000}}
      animate={{
        duration: 1000,
        onLoad: {duration: 1000},
      }}
      interpolation="natural"
      style={{
        data: {stroke: color.blue},
        parent: {border: '1px solid #ccc'},
        height: props.style && props.style.height ? props.style.height : 500,
        width: props.style && props.style.width ? props.style.width : width,
      }}
      data={props.displayData}
    />
  </View>
);

export default Chart;
