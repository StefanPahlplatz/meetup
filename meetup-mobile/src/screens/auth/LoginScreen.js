import React, { Component } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

import Fonts from '../../../constants/Fonts';
import Colors from '../../../constants/Colors';

const FlexContainer = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
`;

const MeetupText = styled.Text`
  fontSize: 18;
  fontFamily: montserrat-bold;
  color: ${Colors.redColor};
`;

const BottomButtonWrapper = styled.View`
  flex: 0.2;
  flexDirection: row;
`;

const Button = styled.TouchableOpacity`
  justifyContent: center;
  alignItems: center;
  flex: 1;
  backgroundColor: ${({ color }) => color};
`;

class LoginScreen extends Component {
  render() {
    return (
      <FlexContainer>

        <FlexContainer>
          <Text style={Fonts.authTitle}>Meetup Me</Text>
        </FlexContainer>

        <FlexContainer>
          <FlexContainer>
            <Text style={Fonts.authWelcomeTitle}>Welcome</Text>
          </FlexContainer>

          <FlexContainer>
            <Text style={Fonts.authWelcomeText}>
              Start managing your <MeetupText>Meetups</MeetupText> quickly and efficiently
            </Text>
          </FlexContainer>
        </FlexContainer>

        <BottomButtonWrapper>
          <Button color={Colors.signUpButtonColor}>
            <Text style={Fonts.authButton}>Sign Up</Text>
          </Button>
          <Button color={Colors.signInButtonColor}>
            <Text style={Fonts.authButton}>Sign In</Text>
          </Button>
        </BottomButtonWrapper>

      </FlexContainer>
    );
  }
}

export default LoginScreen;
