import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';


const VoiceNotes = () => {
    const [recording, setRecording] = React.useState();
    const [recordings, setRecordings] = React.useState([]);
    const [message, setMessage] = React.useState("");

  async function startRecording() {
    try {
      const permission = await Audio.requestPermissionsAsync();

      if (permission.status === "granted") {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true
        });
        
        const { recording } = await Audio.Recording.createAsync(
          Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
        );

        setRecording(recording);
      } else {
        setMessage("Please grant permission to app to access microphone");
      }
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    setRecording(undefined);
    await recording.stopAndUnloadAsync();

    let updatedRecordings = [...recordings];
    const { sound, status } = await recording.createNewLoadedSoundAsync();
    updatedRecordings.push({
      sound: sound,
      duration: getDurationFormatted(status.durationMillis),
      file: recording.getURI()
    });

    setRecordings(updatedRecordings);
  }

  function getDurationFormatted(millis) {
    const minutes = millis / 1000 / 60;
    const minutesDisplay = Math.floor(minutes);
    const seconds = Math.round((minutes - minutesDisplay) * 60);
    const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutesDisplay}:${secondsDisplay}`;
  }

  function getRecordingLines() {
    return recordings.map((recordingLine, index) => {
        return (     
            <View key={index} style={styles.row}>
            <Text style={styles.fill}>Recording {index + 1} - {recordingLine.duration}</Text>
                <View style={styles.row}>
                    <Button style={styles.playButton} onPress={() => recordingLine.sound.replayAsync()} title="Play"></Button>
                </View>
            </View>
      );
    });
  }

  return (
    <View style={styles.container}>

    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>
    
            <View style={styles.notesWrapper}>
            <Text style={styles.sectionTitle}>Recorded Memos</Text>
                <View style={styles.items}>
                    <Text>{message}</Text>
                    {getRecordingLines()}
                </View>
            </View>

        </ScrollView>

        <View style={styles.recButton}>
        <Button title={recording ? 'Stop Recording' : 'Start Recording'} onPress={recording ? stopRecording : startRecording} />
            <StatusBar style="auto" />

        <TouchableOpacity>
        <Text {...recording ? 'Stop Recording' : 'Start Recording'} onPress={recording ? stopRecording : startRecording}/>
        </TouchableOpacity>    
        </View> 
    </View>
        
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  notesWrapper: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fill: {
    flex: 1,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#3871F3',
    backgroundColor: '#FFF',
  },
  button: {
    margin: 15,
  },
  recButton: {
    width: '100%',
    bottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default VoiceNotes;
