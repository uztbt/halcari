import React from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator,
  NavigationContainer,
} from 'react-navigation';
import DetailsScreen from './DetailsScreen';
import HomeScreen from './HomeScreen';
import LogoTitle from './LogoTitle';
import ModalScreen from './ModalScreen';

export enum ROUTE {
  Items = 'Items',
  Home = 'Home',
  Details = 'Details',
}

export enum COLOR {
  darkPrimary = '#C2185B',
  lightPrimary = '#F8BBD0',
  primary = '#E91E63',
  darkSecondary = '#0288D1',
  lightSecondary = '#B3E5FC',
  secondary = '#03A9F4',
  text = '#FFFFFF',
  accent = '#00BCD4',
  primaryText = '#212121',
  secondaryText = '#757575',
  dividerColor = '#BDBDBD',
  error = '#B00020',
}

const MainStack: NavigationContainer = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({ navigation }) => ({
      headerTitle: (
        <TouchableOpacity onPress={() => navigation.navigate('Items')}>
          <LogoTitle />
        </TouchableOpacity>
      ),
      headerLeft: (
        <Icon
          name="menu"
          color="white"
          size={30}
          iconStyle={{ marginLeft: 10 }}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
      headerRight: (
        <Icon
          name="shopping-cart"
          color="white"
          size={30}
          iconStyle={{ marginRight: 10 }}
          onPress={() => Alert.alert('This is the cart button!')}
        />
      ),
      headerStyle: {
        backgroundColor: COLOR.darkPrimary,
      },
      headerTintColor: COLOR.text,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }),
  }
);

const RootStack: NavigationContainer = createDrawerNavigator(
  {
    Main: {
      screen: MainStack,
    },
    Modal: {
      screen: ModalScreen,
    },
  },
  {}
);

const AppContainer: NavigationContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  public render = () => <AppContainer />;
}
