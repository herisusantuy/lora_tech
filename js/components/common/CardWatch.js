import React, {useState} from 'react';
import {Text, View, Image} from 'react-native';
import styles from '../../styles/cardWatch';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {color} from '../../styles/default';

const CardWatch = props => {
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
      <View style={styles.midContainer}></View>
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
