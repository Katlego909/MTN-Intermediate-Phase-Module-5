import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Task from '../components/Task';
import { useNavigation } from '@react-navigation/native';

const TasksList = () => {

    const navigation = useNavigation()

    const onAddTaskPressed = () => {
        navigation.navigate('AddTask');
    }

    return (
        <View style={styles.container}>

        <ScrollView
            contentContainerStyle={{
          flexGrow: 1
        }}>
            <View style={styles.tasksWrapper}>
            <Text style={styles.sectionTitle}>Today's tasks</Text>
               <View style={styles.items}>
                    <Task />
               </View> 
            </View>

        </ScrollView>

            <TouchableOpacity style={styles.floatBtn} onPress={() => onAddTaskPressed()}>
                <View>
                    <Text style={styles.addText}>+</Text>
                </View>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
    },
    tasksWrapper: {
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    items: {
        marginTop: 30,
    },
    floatBtn: {
            borderWidth: 2,
            borderColor: '#FFF',
            alignItems: 'center',
            width: 50,
            position: 'absolute',
            bottom: 20,
            right: 20,
            height: 50,
            backgroundColor: '#3871F3',
            borderRadius: 60,
            justifyContent: 'space-around',
            elevation: 5,
    },
    addText: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
      },
    
});

export default TasksList;
