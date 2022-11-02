import React, {FC, useState} from 'react';
import {Text} from "react-native";
import {useForm} from "react-hook-form";

const Auth :FC= () => {

    const [isReg, setIsReg] = useState(false)

const {} = useForm({
    mode: 'onChange'
})
    return (
        <Text>
Auth
        </Text>
    );
};

export default Auth;