import {StyleSheet} from 'react-native';
import {color, style} from './default';
import {moderateScale} from './UIScale';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    padding: moderateScale(30),
  },
  topContainer: {
    flex: 3,
    justifyContent: 'flex-end',
  },
  middleContainer: {
    flex: 3,
    justifyContent: 'center',
  },
  bottomContainer: {
    flex: 3,
    justifyContent: 'flex-start',
  },
  greeting: {
    fontWeight: 'bold',
    fontSize: moderateScale(36),
  },
  input: {
    backgroundColor: color.softGrey,
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    color: color.black,
    fontSize: 14,
  },
  errMsg: {
    color: color.red,
    marginVertical: moderateScale(15),
  },
});

export default styles;
