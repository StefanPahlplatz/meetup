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
    fontFamily: 'montserrat',
  },
  contentContainer: {
    flex: 1,
  },
  meetupCard: {
    marginVertical: 8,
    width: 175,
    marginHorizontal: 5,
    backgroundColor: '$redColor',
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
    fontFamily: 'montserrat-bold',
  },
  meetupCardBottomContainer: {
    flex: 0.4,
    backgroundColor: '$whiteColor',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  meetupCardMetaName: {
    fontSize: 15,
    fontFamily: 'montserrat',
  },
  meetupCardMetaDate: {
    fontSize: 13,
    fontFamily: 'montserrat-light',
  },
});

export default styles;
