import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Formik } from 'formik';
import { db } from './firebase';
import { useNavigation } from '@react-navigation/native';

const AddTask = (props) => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>New Task</Text></View>
      <View style={styles.tasksWrapper}>
        <Formik 
          initialValues={{name: ''}}
          onSubmit={(values) => {
            db.collection('tasks').add({
              name: values.name,
              createdAt: new Date,
              completedAt: null,
            }).then(result => navigation.navigate('TasksList'))
              .catch(err => console.log(err))
          }}
        > 
           {({
            values, 
            handleChange,
            handleSubmit}) => (
                <View>
                  <TextInput 
                    style={styles.textInput}
                    onChangeText={handleChange('name')}
                    placeholder={'Write Task'}
                    value={values.name}
                    autoFocus={true} />
                    <View style={styles.btn}>
                      <Button title={'Add'} onPress={handleSubmit} />
                    </View>
              </View>
            )
            }
        </Formik>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop:20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    width: '100%',
    padding: 10,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: 'gray',
    backgroundColor: '#FFF',
    paddingHorizontal: 5,
    marginVertical: 5,
    marginBottom: 10,
  },
  btn: {
    borderRadius: 10,
  }

})

export default AddTask