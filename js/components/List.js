import React from 'react';
import {Text, View, FlatList} from 'react-native';
import CardList from './common/CardList';
import styles from '../styles/list';

const types = ['3 Month', '1 Month', '2 Week', '1 Week'];
const List = props => {
  const renderList = ({item}) => <CardList type={item} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My List</Text>
      <FlatList
        data={types}
        renderItem={renderList}
        keyExtractor={item => item.number}
        horizontal
      />
    </View>
  );
};

export default List;
