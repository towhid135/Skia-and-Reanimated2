import {Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
export default Rp = value => {
  return width * (value / 1000);
};
