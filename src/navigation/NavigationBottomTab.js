import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import TopComicScreen from '../screens/topComic/index';
import { NavigationContainer } from '@react-navigation/native';

const MainBottomTab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <NavigationContainer>
            <MainBottomTab.Navigator>
                <MainBottomTab.Screen name="home" component={HomeScreen} />
                <MainBottomTab.Screen name="topRate" component={TopComicScreen} />
            </MainBottomTab.Navigator>
        </NavigationContainer>

    )
}
export default MainApp;
