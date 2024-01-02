import React from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";

import { styles } from "./styled";
import Plus from "../../assets/Plus";
import { ListEmptyComponent } from "../components/ListEmpty";


import RocketSVG from "../../assets/Rocket";
import { Tasks } from '../components/Tasks';



export function Home () {
    const [newTask, setNewTask] = React.useState('')
    const [tasks, setTasks] = React.useState<string[]>([])
    const [finishedTask, setFinishedTask] = React.useState<number[]>([])


    function handleAddTask() {
        if(!newTask) Alert.alert('Insira a descrição da tarefa')
        setTasks(prevState => [...prevState, newTask])
        setNewTask('')
    }

    function handleDeleteTask(taskName: string, index: number) {
        Alert.alert(`Remover tarefa`, `Tem certeza que deseja remover a tarefa "${taskName}"`, [
            {
                text: 'Não',
                onPress: () => {},
                style: 'cancel'
            },
            {
                text: 'Sim',
                onPress: () => {
                    const removeItem = finishedTask.filter(item => item !== index)
                    setFinishedTask(removeItem)
                    const tasksFromRemoved = tasks.filter(task => task !== taskName)
                    setTasks(tasksFromRemoved)
                },
                style: 'default'
            }
        ])
        
    }

    function handleFinishedTask(index: number) {
        const finishedFiltered = finishedTask.includes(index)
        if(!finishedFiltered) {
            setFinishedTask(prevState => [...prevState, index])
        } else {
            const removeItem = finishedTask.filter(item => item !== index)
            setFinishedTask(removeItem)
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <RocketSVG />
            </View>

            <View style={styles.containerList}>
                <View style={styles.inputWithBtn}>
                    <TextInput 
                        style={styles.input} 
                        value={newTask} 
                        placeholder="Adicione uma nova tarefa" 
                        placeholderTextColor={'#808080'}
                        onChangeText={setNewTask}
                    />
                    <TouchableOpacity onPress={handleAddTask}>
                        <Text>
                            <Plus />
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.list}>
                    <View style={styles.listHeader}>
                        <View style={styles.createdView}>
                            <Text style={styles.createdText}>Criadas</Text>
                            <Text style={styles.count}>{tasks.length}</Text>
                        </View>
                        <View style={styles.finishedView}>
                            <Text style={styles.finishedText}>Concluídas</Text>
                            <Text style={styles.count}>{finishedTask.length}</Text>
                        </View>
                    </View>

                    <View >
                        <FlatList 
                            data={tasks} 
                            renderItem={({item, index})=> 
                            <Tasks item={item} 
                            removeItem={handleDeleteTask}
                            finishedTask={handleFinishedTask}
                            index={index} 
                        />}
                            ListEmptyComponent={ListEmptyComponent}
                        />
                    </View>
                </View>
            </View>
           
        </View>
    )
}