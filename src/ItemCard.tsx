import React from 'react';
import * as RN from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';

interface Props {
  title: string;
  price: string;
  image: RN.ImageURISource;
}

export default class ItemCard extends React.Component<Props> {
  public render = (): JSX.Element => (
    <Card title={this.props.title} image={this.props.image}>
      <Button
        // icon={<Icon name='coins' type='font-awesome' color='white' size='20' />}
        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
        title={this.props.price}
      />
    </Card>
  );
}
