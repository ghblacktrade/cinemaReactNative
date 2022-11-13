import React, {FC} from 'react';
import {Controller} from "react-hook-form";
import {IField} from "./filed.interface";

const Field = <T extends Record<string, any>>({
                                                  control,
                                                  rules,
                                                  name,
                                                  className,
                                                  ...rest
                                              }: IField<T>): JSX.Element => {
    return (
        <Controller control={control} name={name} rules={rules} render={
            ({field: {value, onChange, onBlur}}) => <>

            </>
        } />


    );
};

export default Field;