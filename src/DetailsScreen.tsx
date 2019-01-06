import React from 'react';
import { Dimensions, Image, Picker, Text, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import { HeaderBackButton, NavigationTransitionProps } from 'react-navigation';
import { COLOR } from './App';
import { Item, itemList } from './HomeScreen';

export default class DetailsScreen extends React.Component<NavigationTransitionProps, {}> {
  private static navigationOptions = ({ navigation, navigationOptions }) => ({
    headerLeft: (
      <View style={{ flexDirection: 'row', alignSelf: 'baseline' }}>
        <HeaderBackButton onPress={navigation.goBack} tintColor="white" />
        {/* {navigationOptions.headerLeft} */}
        <Icon
          name="menu"
          color="white"
          size={30}
          iconStyle={{ marginBottom: -45 }}
          onPress={() => navigation.toggleDrawer()}
        />
      </View>
    ),
  });
  private item: Item;
  private imageWidth: number;
  private imageHeight: number;

  constructor(props: NavigationTransitionProps) {
    super(props);

    const id = props.navigation.getParam('id', 'NO-ID');
    const itemTemp = itemList.find(item => item.id === id);
    if (itemTemp !== undefined) {
      this.item = itemTemp;
    } else {
      throw new Error(`No item information found for id: ${id}`);
    }

    this.imageWidth = Dimensions.get('window').width - 20;
    this.imageHeight = (this.imageWidth * 9) / 16;
  }

  public render = () => (
    <View style={{ flex: 1, marginHorizontal: 10 }}>
      <Text
        style={{ color: COLOR.primaryText, fontSize: 20, marginVertical: 20, fontWeight: 'bold' }}
      >
        {this.item.title}
      </Text>
      <Image
        source={this.item.image}
        style={{
          width: this.imageWidth,
          height: this.imageHeight,
          borderWidth: 1,
          borderColor: COLOR.secondary,
        }}
      />
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ color: COLOR.secondaryText, fontSize: 20, marginVertical: 20 }}>Price:</Text>
        <Text style={{ color: COLOR.error, fontSize: 30, marginVertical: 15, marginLeft: 10 }}>
          {this.item.price}
        </Text>
      </View>
      <Text style={{ color: COLOR.primaryText, fontSize: 18 }}>{this.item.description}</Text>
      <Dropdown
        label="Quantity"
        fontSize={18}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => ({ value: n }))}
        containerStyle={{ width: this.imageWidth / 2 }}
        value="1"
      />
      <Button
        icon={{ name: 'shopping-cart', color: 'white', size: 30 }}
        title="Add to Cart"
        titleStyle={{ fontSize: 30, fontWeight: 'bold' }}
        buttonStyle={{ backgroundColor: COLOR.secondary, height: 60 }}        
      />
    </View>
  );
}
