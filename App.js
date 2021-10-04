import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Titulo from './src/Titulo/titulo';
import Formulario from './src/Formulario/formulario';

export default function App() {
  return (
    <View style={styles.container}>
      <Titulo />
      <Formulario />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fce8fb',
    paddingTop: 30,
  },
});
