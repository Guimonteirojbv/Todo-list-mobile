import React from "react"

import { Text, TouchableOpacity, View } from "react-native"
import { CustomCheckBox } from "../customCheckBox"
import { styles } from "./styled"
import { Feather } from '@expo/vector-icons'; 


type Task = {
    item: string;
    removeItem: (itemName: string, index: number) => void;
    index: number;
    finishedTask: (index: number) => void;
}

export function Tasks({item, removeItem, index, finishedTask}: Task) {
    const [checked, setIsChecked] = React.useState(false)
    
    function handleChangeCheckBox(newState: boolean) {
        setIsChecked(newState)
        finishedTask(index)
    }
    return (
        <View style={styles.container}>
            <CustomCheckBox  onChange={handleChangeCheckBox}/>
            <Text style={[styles.descriptionTask, checked && styles.descriptionTaskFinished]}>{item}</Text>
            <TouchableOpacity onPress={() => removeItem(item, index)}>
                <Feather name="trash-2" size={16} color={'#808080'}/>
            </TouchableOpacity>
        </View>
    )
}