import React from "react";
import { Pressable } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons'
import { styles } from "./styled";



export function CustomCheckBox ({onChange}: {onChange: (isChecked: boolean) => void}) {
    const [checked, setChecked] = React.useState(false)

    function onToggleCheckBox() {
        setChecked(!checked)
        onChange(!checked)
    }
    return (
        <Pressable onPress={onToggleCheckBox} style={[styles.checboxBase, checked && styles.checkboxChecked]}>
            {checked && <Ionicons name="checkmark" size={12} color={'white'}/>}
        </Pressable>
    )
}