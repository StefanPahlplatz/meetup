import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    height: '100%',
    width: '90%',
  },
  item: {
    marginVertical: 12,
  },
  iconClose: {
    marginLeft: 12,
  },
  buttonCreate: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: '10%',
  },
});

export default styles;
