import React from 'react';
import * as RN from 'react-native';
import { Button, Card } from 'react-native-elements';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
  NavigationTransitionProps,
} from 'react-navigation';
import { ROUTE } from './App';

interface Props extends NavigationTransitionProps {
  id: string;
  title: string;
  price: string;
  image: RN.ImageURISource;
  color: string;
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export default class ItemCard extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  public render = (): JSX.Element => (
    <Card title={this.props.title} image={this.props.image}>
      <Button
        buttonStyle={{
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
          backgroundColor: this.props.color,
        }}
        title={this.props.price}
        onPress={() => this.props.navigation.navigate(ROUTE.Details, { id: this.props.id })}
      />
    </Card>
  );
}
