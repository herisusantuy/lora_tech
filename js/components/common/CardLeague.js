import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from '../../styles/cardLeague';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {color} from '../../styles/default';

const CardLeague = props => {
  let pnlValue =
    props.league.pnl > 0 ? `+${props.league.pnl}%` : `${props.league.pnl}%`;
  let fontColor = props.league.username != 'Me' ? color.darkBlue : color.white;
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            props.league.username == 'Me' ? color.darkBlue : color.white,
        },
      ]}>
      <View style={styles.leftContainer}>
        <Text
          style={[
            styles.index,
            {
              color: fontColor,
            },
          ]}>
          {props.league.number}
        </Text>
        <FontAwesome5
          name="user-circle"
          size={20}
          color={color.darkBlue}
          style={[
            styles.icon,
            {
              color: fontColor,
            },
          ]}
        />
        <Text
          style={[
            {
              color: fontColor,
            },
          ]}>
          {props.league.username}
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <Text
          style={[
            styles.pnl,
            {
              color: props.league.pnl > 0 ? color.blue : color.red,
            },
          ]}>
          {pnlValue}
        </Text>
      </View>
    </View>
  );
};

export default CardLeague;
