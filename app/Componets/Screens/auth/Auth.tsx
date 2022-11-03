import React, {FC, useState} from 'react';
import {Pressable, Text, View} from "react-native";
import {SubmitHandler, useForm} from "react-hook-form";
import {IAuthFormData} from "../../../../shared/types/auth.interface";
import Loader from "../../UI/Loader";

const Auth :FC= () => {

    const [isReg, setIsReg] = useState(false)

const {handleSubmit, reset, control} = useForm<IAuthFormData>({
    mode: 'onChange'
})

   const onSubmit:SubmitHandler<IAuthFormData> = ({email, password}) => {

   }
   const isLoading = false

    return (
        <View className='mx-10 items-center justify-center h-full '>
        <View className='w-9/12'>
<Text className='text-center text-white text-4xl font-bolt mb-2.5'>
    {isReg ? 'Register' : 'Login'}
</Text>
            {isLoading ? <Loader /> : <>
            <Pressable onPress={() => setIsReg(!isReg)}>
                <Text className='text-white opacity-30 text-right text-base mt-3'>
                    {isReg ? 'Login' : 'Register'}
                </Text>
            </Pressable>
            </>}
        </View>

        </View>
    );
};

export default Auth;