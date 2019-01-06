import React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationTransitionProps } from 'react-navigation';

export default class ModalScreen extends React.Component<NavigationTransitionProps, {}> {
  public render = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button title="dismiss" onPress={() => this.props.navigation.goBack()} />
    </View>
  );
}
