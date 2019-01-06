import React from 'react';
import { Image } from 'react-native';

export default class LogoTitle extends React.Component {
  public render() {
    return <Image source={require('./../assets/logo.png')} style={{ width: 170, height: 110 }} />;
  }
}
