import {StyleSheet, Dimensions} from 'react-native';
import {color, style} from './default';
import {moderateScale} from './UIScale';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
  },
  title: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    padding: moderateScale(10),
  },
  btnContainer: {
    backgroundColor: color.white,
    flexDirection: 'row',
    width: 50,
    justifyContent: 'center',
    padding: moderateScale(10),
    borderBottomWidth: 1,
    borderBottomColor: color.blue,
    marginHorizontal: moderateScale(5),
    fontWeight: 'bold',
  },
  chartContainer: {
    height: 200,
    width: width,
    justifyContent: 'center',
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
  buttonRow: {
    flexDirection: 'row',
  },
  loadingRow: {
    flexDirection: 'row',
  },
  chartRow: {
    flex: 1,
    width: width,
  },
});

export default styles;
