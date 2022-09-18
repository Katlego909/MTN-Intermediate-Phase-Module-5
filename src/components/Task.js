import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db, getTasks } from '../screens/firebase';


const Task = () => {

    const [tasks, setTasks] = useState();

    useEffect( () => {
      db.collection('tasks').onSnapshot({
        next: querySnapshot => {
         const tasks = querySnapshot.docs.map(docSnapshot => ({
            id: docSnapshot.id,
            name: docSnapshot.data().name,
            createdAt: docSnapshot.data().createdAt,
            completedAt: docSnapshot.data().completedAt,
          }))  
          setTasks(tasks)
        },
        error: (error) => console.log(error)
      }) 
      getTasks().then(tasks => setTasks(tasks))
    }, [setTasks])

  return (
   
    <View>
       {
        tasks?.map(task => <View key={task.id} style={styles.taskItem}>
            <View>
                <Text style={styles.text}>
                {task.name}</Text>
            </View>
            <View style={styles.circular}></View>
        </View> )
        }
    </View>
  );
};

const styles = StyleSheet.create({
    
    taskItem: {
        backgroundColor: '#3871F3',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FFF',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#FFF',
        borderWidth: 2,
        borderRadius: 5,
      },
})

export default Task;