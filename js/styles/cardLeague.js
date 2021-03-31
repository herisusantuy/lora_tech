import {StyleSheet} from 'react-native';
import {color, style} from './default';
import {moderateScale} from './UIScale';

const styles = StyleSheet.create({
  container: {
    paddingVertical: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderColor: color.darkBlue,
  },
  leftContainer: {
    flex: 7,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: moderateScale(10),
  },
  rightContainer: {
    flex: 3,
    paddingHorizontal: moderateScale(10),
  },
  index: {
    marginRight: moderateScale(15),
    fontWeight: 'bold',
  },
  icon: {
    marginRight: moderateScale(15),
    fontWeight: 'bold',
  },
  line: {
    borderWidth: 1,
    height: 0.1,
    width: '100%',
  },
  pnl: {
    fontWeight: 'bold',
    textAlign: 'right',
  },
});

export default styles;
