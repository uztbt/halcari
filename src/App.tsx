import React from 'react';
import * as RN from 'react-native';
import * as RNE from 'react-native-elements';
import ItemCard from './ItemCard';

export default class App extends React.Component {
  public render = (): JSX.Element => (
    <RN.View>
      <RNE.Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'ニシカリ', style: styles.headerTitle }}
        rightComponent={{ icon: 'shopping-cart', color: '#fff' }}
      />
      <RN.FlatList
        data={itemList}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <ItemCard title={item.title} image={item.image} price={item.price} />
        )}
      />
    </RN.View>
  );
}

const styles = {
  headerTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
};

const itemList = [
  {
    title: '他人のネコ',
    price: '$1000',
    image: { uri: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Cat_scratching.jpg' },
  },
  {
    title: '金魚',
    price: '$2',
    image: {
      uri:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Here_they_are%21%21_Part_1_%283161323177%29.jpg/800px-Here_they_are%21%21_Part_1_%283161323177%29.jpg',
    },
  },
  {
    title: '小さいエビ',
    price: '$1.5',
    image: { uri: 'https://cdn.pixabay.com/photo/2017/08/04/12/01/shrimp-2579959_960_720.jpg' },
  },
  {
    title: 'アベニーパファー',
    price: '$5',
    image: {
      uri:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Carinotetraodon_travancoricus_by_OpenCage.jpg/320px-Carinotetraodon_travancoricus_by_OpenCage.jpg',
    },
  },
];
