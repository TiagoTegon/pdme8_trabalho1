import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';

export default function Titulo() {
  return (
    <View style={styles.boxTitle}>
        <Text style={styles.textTitle}>Cálculo de Custo-Benefício Combustível</Text>
    </View>
  );
}
