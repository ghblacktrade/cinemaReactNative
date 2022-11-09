import React, {FC} from 'react';
import {Pressable, Text, View} from "react-native";
import {useTypedNavigation} from "../../../hooks/useTypedNavigation";

const Home: FC = () => {
    const {navigate} = useTypedNavigation()
    return (
        <View className='mr-10 p-20'>
            <Text>
                Home
            </Text>
            <Pressable onPress={() => navigate('Auth')}>
                <Text style={{color: 'black'}}>Go to login!</Text>
            </Pressable>
        </View>
    );
};

export default Home;