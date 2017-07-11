import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.1,
    paddingLeft: 16,
    paddingBottom: 15,
    alignItems: 'flex-start',
  },
  title: {
    color: '$whiteColor',
    fontSize: 25,
    fontFamily: 'monserrat-regular',
  },
  contentContainer: {
    flex: 1,
  },
  meetupCard: {
    marginVertical: 8,
    width: 175,
    marginHorizontal: 5,
    backgroundColor: '$redColor', // give this a font.
  },
  meetupCardTopContainer: {
    flex: 1,
    position: 'relative',
  },
  meetupCardTitle: {
    position: 'absolute',
    color: '$whiteColor',
    top: '5%',
    left: '5%',
    fontFamily: 'monserrat-bold',
  },
  meetupCardBottomContainer: {
    flex: 0.4,
    backgroundColor: '$whiteColor',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  meetupCardMetaName: {
    fontSize: 15,
    fontFamily: 'monserrat-regular',
  },
  meetupCardMetaDate: {
    fontSize: 13,
    fontFamily: 'monserrat-light',
  },
});

export default styles;
