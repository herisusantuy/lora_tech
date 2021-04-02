import React from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import {color, style} from '../styles/default';
import {moderateScale} from '../styles/UIScale';

const Profile = props => {
  let pnlValue =
    props.value > 0
      ? `+${props.value.toFixed(2)}%`
      : `${props.value.toFixed(2)}%`;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Portfolio</Text>
      <View style={styles.subContainer}>
        <Text style={styles.name}>{props.name}</Text>
        <Text
          style={[
            styles.percent,
            {
              color: props.value > 0 ? color.darkBlue : color.red,
            },
          ]}>
          {pnlValue}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    paddingHorizontal: moderateScale(10),
    borderBottomWidth: 1,
    borderBottomColor: color.darkBlue,
    paddingVertical: moderateScale(15),
  },
  title: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: moderateScale(5),
  },
  name: {
    color: color.darkBlue,
    fontSize: 20,
    fontWeight: 'bold',
  },
  percent: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Profile;
