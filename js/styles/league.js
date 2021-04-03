import {StyleSheet} from 'react-native';
import {color, style} from './default';
import {moderateScale} from './UIScale';

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
  },
  title: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    padding: moderateScale(10),
  },
  topContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: moderateScale(10),
  },
});

export default styles;
