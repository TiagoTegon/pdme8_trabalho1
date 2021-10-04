import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';

export default function ResultadoCustoBeneficio(props) {
  return (
    <View style={styles.resultado}>
        <Text style={styles.textMensagem}>{props.mensagem}</Text>
        <Text style={styles.textCombustivel}>{props.combustivel}</Text>
    </View>
  );
}