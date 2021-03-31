import React, {useState} from 'react';
import {Text, View, Image} from 'react-native';
import styles from '../../styles/cardList';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {color} from '../../styles/default';

const CardList = props => {
  const [isActive, setIsActive] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.type}>
          Stocks for{'\n'}
          {props.type} Investment
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <AntDesign
          onPress={() => setIsActive(!isActive)}
          name="heart"
          size={25}
          color={isActive ? color.red : color.black}
        />
      </View>
    </View>
  );
};

export default CardList;
