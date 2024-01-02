import {  View, Text } from "react-native"
import { styles } from "./styled"
import Paste from "../../../assets/Paste"

export function ListEmptyComponent() {
    return (

        <View style={styles.container}>
            <Paste />
            <Text style={styles.text}>
                Você ainda não tem tarefas cadastradas.
            </Text>
            <Text style={styles.textLigth}>
                    Crie tarefas e organize seus itens a fazer
                </Text>
        </View>
        
    )
}