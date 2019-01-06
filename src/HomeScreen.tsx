import React from 'react';
import * as RN from 'react-native';
import { Image } from 'react-native';
import * as RNE from 'react-native-elements';
import { ListItem } from 'react-native-elements';
import { NavigationTransitionProps } from 'react-navigation';
import { COLOR, ROUTE } from './App';

export default class HomeScreen extends React.Component<NavigationTransitionProps, {}> {
  private static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => <RNE.Icon name="home" />,
  });

  constructor(props: NavigationTransitionProps) {
    super(props);
  }

  public render = (): JSX.Element => (
    <RN.View style={{ flex: 1 }}>
      {/* <RN.FlatList
        data={itemList}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <RNE.Card title={item.title} image={item.image}>
            <RNE.Button
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
                backgroundColor: COLOR.primary,
              }}
              title={item.price}
              onPress={() => this.props.navigation.navigate(ROUTE.Details, { id: item.id })}
            />
          </RNE.Card>
        )}
      /> */}
      {itemList.map(item => (
        <RNE.ListItem
          key={item.id}
          title={item.title}
          leftElement={<RN.Image source={item.image} style={{ width: 80, height: 80 }} />}
          subtitle={item.price}
          onPress={() => this.props.navigation.navigate(ROUTE.Details, { id: item.id })}
        />
      ))}
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

export interface Item {
  id: string;
  title: string;
  price: string;
  image: RN.ImageURISource;
  description: string;
}

export const itemList: Item[] = [
  {
    id: 'cat',
    title: '他人のネコ',
    price: '$1000',
    image: { uri: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Cat_scratching.jpg' },
    description: '可愛い他人のネコ。欲しかったらお金を積もう。',
  },
  {
    id: 'goldfish',
    title: '金魚',
    price: '$2',
    image: {
      uri:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Here_they_are%21%21_Part_1_%283161323177%29.jpg/800px-Here_they_are%21%21_Part_1_%283161323177%29.jpg',
    },
    description: 'ふつうの金魚。水槽に入れよう。',
  },
  {
    id: 'small-shrimp',
    title: '小さいエビ',
    price: '$1.5',
    image: { uri: 'https://cdn.pixabay.com/photo/2017/08/04/12/01/shrimp-2579959_960_720.jpg' },
    description: '赤と白のエビ。縁起がいいね。',
  },
  {
    id: 'dwarf-paffer',
    title: 'アベニーパファー',
    price: '$5',
    image: {
      uri:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Carinotetraodon_travancoricus_by_OpenCage.jpg/320px-Carinotetraodon_travancoricus_by_OpenCage.jpg',
    },
    description: '世界で一番小さい淡水フグ。貝類が好き。',
  },
];
