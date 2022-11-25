import React from "react";
import { Button, Text, View } from "react-native";
import { RootStactNavigation } from "../navigator";

interface IProps {
    navigation: RootStactNavigation;
}

class Home extends React.Component<IProps> {

    onPress = () => {
        const { navigation } = this.props;
        navigation.navigate("Detail", {
            id: 100,
        });
    }

    render() {
        return (
            <View>
                <Text>Home</Text>
                <Button title="跳转到详情页" onPress={this.onPress} />
            </View>
        )
    }
}

export default Home;