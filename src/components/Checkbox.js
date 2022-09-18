import React, { useState } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons'

const CheckBox = (props) => {

    const [ isChecked, setChecked ] = useState<Boolean>(value)

    return (
        <TouchableOpacity onPress={() => setChecked(!isChecked)}>
        isChecked
            ? <Feather name={'checked-square'} size={24} color={'black'} />
            : <Feather name={'square'} size={24} color={'black'} />
        </TouchableOpacity>
    );
};

export default CheckBox;
 