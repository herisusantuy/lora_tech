import {StyleSheet, Dimensions} from 'react-native';
import {color, style} from './default';
import {moderateScale} from './UIScale';
export const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    flexDirection: 'row',
    padding: moderateScale(10),
    borderTopWidth: 1,
    borderTopColor: color.darkBlue,
  },
  leftContainer: {
    flex: 3,
    alignItems: 'flex-start',
  },
  midContainer: {
    flex: 4,
  },
  rightContainer: {
    flex: 3,
    alignItems: 'flex-end',
  },
  title: {
    fontWeight: 'bold',
  },
  company: {},
  percent: {
    fontWeight: 'bold',
  },
});

export default styles;
