//import libraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Dashboard = () => {
    const navigation = useNavigation();

    const onTaskListPressed = () => {
        navigation.navigate('TaskList');
    }
    const onVoiceNotesPressed = () => {
        navigation.navigate('VoiceNotes');
    }
    return (
 
        <View style={styles.container}>
            <View style={styles.tabWrapper}>
            <Text style={styles.sectionTitle}>Choose a Category</Text>
            </View>
            <View style={styles.tabs}>
            <TouchableOpacity style={styles.notesTab}>
                 <Text style = {styles.text} onPress={onTaskListPressed}>Text Notes</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.voiceTab}>
                 <Text style = {styles.text} onPress={onVoiceNotesPressed}>Voice Notes</Text> 
            </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    tabWrapper: {
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    tabs: {
        flex: 2,    
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    notesTab: {
        flex: 2,
        width: '100%',
        backgroundColor: '#3871F3',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        
    }, 
    voiceTab: {
        flex: 2,
        width: '100%',
        backgroundColor: '#510034',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    name: {
        fontSize: 22,
        fontWeight: "600",
        color: "white" 
    }, 
    numberCompany: {
        fontSize: 16,
        fontWeight: "200",
        color: "white" 
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#FFF",
        padding: 10,
        alignSelf: 'center',
    },

});

export default Dashboard;
