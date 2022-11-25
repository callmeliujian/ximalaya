import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { CardStyleInterpolators, createStackNavigator, HeaderStyleInterpolators, StackNavigationProp } from "@react-navigation/stack";
import BottomTabs from "../navigator/BottomTabs";
import Detail from "../pages/Detail";
import { Platform, StyleSheet } from "react-native";

export type RootStackParamList = {
    BottomTabs: {
        screen?: string;
    };
    Detail: {
        id: number;
    };
}

export type RootStactNavigation = StackNavigationProp<RootStackParamList>;

let Stack = createStackNavigator<RootStackParamList>();

class Navigator extends React.Component {
    render() {
        return (<NavigationContainer>
            <Stack.Navigator
                headerMode="float"
                screenOptions={{
                    headerTitleAlign: "center",
                    HeaderStyleInterpolators: HeaderStyleInterpolators.forUIKit,
                    CardStyleInterpolators: CardStyleInterpolators.forHorizontalIOS,
                    gestureEnabled: true,
                    gestureDirection: "horizontal",
                    headerStyle: {
                        // 平台选择
                        ...Platform.select({
                            android: {
                                elevation: 0,
                                borderBottomWidth: StyleSheet.hairlineWidth
                            },
                            ios: {

                            }
                        })
                    }
                }}
            >
                <Stack.Screen 
                    name="BottomTabs" 
                    component={BottomTabs} 
                />
                <Stack.Screen 
                    options={{ headerTitle: '详情页' }} 
                    name="Detail" 
                    component={Detail} 
                />
            </Stack.Navigator>
        </NavigationContainer>);
    }
}

export default Navigator;