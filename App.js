import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import * as React from 'react';
import * as Speech from 'expo-speech';
import { useState } from 'react';

export default function App() {

  const [teksti, setTeksti] = useState('');

  const muutaPuheeksi = () => {
    Speech.speak(teksti);
    console.log(teksti);
  };


  return (
    <View style={styles.container}>
      <TextInput
      keyboardType='default'
      style={{fontSize:18, width:200, borderColor: 'gray', borderWidth:1}}
      onChangeText={teksti => setTeksti(teksti)}
      value={teksti}
      />
      <Button title="Press to hear text" onPress={muutaPuheeksi} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
