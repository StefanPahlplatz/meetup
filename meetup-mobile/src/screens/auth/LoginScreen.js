import React, { Component } from 'react';
import { Facebook, Google } from 'expo';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LoadingScreen } from '../../commons';

import { login } from './actions';

import Fonts from '../../../constants/Fonts';
import Colors from '../../../constants/Colors';
import fbConfig from '../../../constants/fbConfig';
import googleConfig from '../../../constants/googleConfig';

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
  justifyContent: space-around;
  alignItems: center;
  flex: 1;
  backgroundColor: ${({ color }) => color};
  flexDirection: row;
  paddingHorizontal: 10;
`;

@connect(state => ({
  isLoading: state.user.isLoading,
}), { login })
class LoginScreen extends Component {
  onLoginPress = (name) => {
    name === 'facebook' ? this.loginWithFacebook() : this.loginWithGoogle();
  }

  async loginWithFacebook() {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(fbConfig.APP_ID, {
      permissions: ['public_profile', 'email'],
    });

    if (type === 'success') {
      this.props.login(token, 'facebook');
    } else {
      throw new Error('Something wrong with facebook auth!');
    }
  }

  async loginWithGoogle() {
    try {
      const result = await Google.logInAsync({
        androidClientId: googleConfig.CLIENT_ID_ANDROID,
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
        this.props.login(result.accessToken, 'google');
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  }

  render() {
    if (this.props.isLoading) {
      return <LoadingScreen color={Colors.redColor} />;
    }

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
          <Button color="#db3236" onPress={() => this.onLoginPress('google')}>
            <Text style={Fonts.authButton}>Connect with</Text>
            <MaterialCommunityIcons name="google" size={30} color="#fff" />
          </Button>
          <Button color="#3b5998" onPress={() => this.onLoginPress('facebook')}>
            <Text style={Fonts.authButton}>Connect with</Text>
            <MaterialCommunityIcons name="facebook" size={30} color="#fff" />
          </Button>
        </BottomButtonWrapper>

      </FlexContainer>
    );
  }
}

export default LoginScreen;
