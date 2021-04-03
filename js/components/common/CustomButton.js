import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {color} from '../../styles/default';
import {moderateScale} from '../../styles/UIScale';

const CustomButton = props => (
  <TouchableOpacity
    style={[
      styles.container,
      {backgroundColor: props.title == 'Sign Out' ? color.red : color.orange},
    ]}
    onPress={props.onPressButton}>
    <Text style={styles.title}>{props.title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    height: moderateScale(50),
    // backgroundColor: color.orange,
    borderRadius: moderateScale(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: moderateScale(18),
    color: color.white,
    fontWeight: 'bold',
  },
});

export default CustomButton;
