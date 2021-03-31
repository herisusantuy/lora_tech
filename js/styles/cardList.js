import {StyleSheet, Dimensions} from 'react-native';
import {color, style} from './default';
import {moderateScale} from './UIScale';
export const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    backgroundColor: color.blue,
    height: moderateScale(180),
    width: 0.7 * width,
    marginHorizontal: moderateScale(10),
    borderRadius: 10,
    padding: moderateScale(15),
    flexDirection: 'row',
  },
  leftContainer: {
    flex: 8,
    justifyContent: 'flex-end',
  },
  rightContainer: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  type: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    color: color.white,
  },
});

export default styles;
