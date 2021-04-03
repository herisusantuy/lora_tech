import React, {useState} from 'react';
import {Text, View, Image} from 'react-native';
import styles from '../../styles/cardWatch';
import {color} from '../../styles/default';
import Chart from './Chart';
import {generateData, getDataBasedOnRange} from '../../util/generate';

const CardWatch = props => {
  const [displayData, setDisplayData] = useState(getDataBasedOnRange(90));
  let pnlValue =
    props.item.potential_max_loss > 0
      ? `+${props.item.potential_max_loss.toFixed(2)}%`
      : `${props.item.potential_max_loss.toFixed(2)}%`;
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>{props.item.bot_type}</Text>
        <Text style={styles.company}>Company {props.item.bot_type}</Text>
      </View>
      <View style={[styles.midContainer]}>
        {/* <Chart displayData={displayData} style={{height: 50, width: 100}} /> */}
      </View>
      <View style={styles.rightContainer}>
        <Text
          style={[
            styles.percent,
            {
              color:
                props.item.potential_max_loss > 0 ? color.darkBlue : color.red,
            },
          ]}>
          {pnlValue}
        </Text>
        <Text style={styles.value}>{props.item.spot_price}</Text>
      </View>
    </View>
  );
};

export default CardWatch;
