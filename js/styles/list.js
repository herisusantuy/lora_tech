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
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: moderateScale(10),
    paddingVertical: moderateScale(15),
    backgroundColor: 'grey',
    marginVertical: moderateScale(10),
  },
  detail: {
    marginHorizontal: moderateScale(10),
    fontSize: moderateScale(16),
    fontWeight: 'bold',
  },
});

export default styles;
