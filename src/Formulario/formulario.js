import React, { useState } from 'react';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ResultadoCustoBeneficio from '../ResultadoCustoBeneficio/resultadoCustoBeneficio';
import styles from './style';

export default function Formulario() {

    const [valorAlcool, setValorAlcool] = useState(null);
    const [valorGasolina, setValorGasolina] = useState(null);
    const [consumoAlcool, setConsumoAlcool] = useState(null);
    const [consumoGasolina, setConsumoGasolina] = useState(null);
    const [mensagem, setMensagem] = useState("Preencha todos os campos");
    const [msgCombustivel, setMsgCombustivel] = useState(null);

    function calculaCustoBeneficio() {
        if((valorAlcool / consumoAlcool) < (valorGasolina / consumoGasolina)) {
            return setMsgCombustivel("Álcool");
        } else {
            return setMsgCombustivel("Gasolina");
        }
    }

    function validaCustoBeneficio() {
        if(valorAlcool != null && valorGasolina != null && consumoAlcool != null && consumoAlcool != null) {
            calculaCustoBeneficio();
            setMensagem("É mais vantajoso usar ");
            return
        }

        setMsgCombustivel(null);
        setMensagem("Preencha todos os campos");
    }

    function limparCampos() {
        setValorAlcool(null);
        setValorGasolina(null);
        setConsumoAlcool(null);
        setConsumoGasolina(null);
        setMensagem("Preencha todos os campos");
        setMsgCombustivel(null);
    }

  return (
    <View style={styles.formContext}>
        <View style={styles.form}>
            <Text style={styles.formLabel}>Valor do Álcool:</Text>
            <TextInput
                style={styles.input}
                onChangeText={setValorAlcool}
                value={valorAlcool}
                placeholder="Ex: 4,39"
                keyboardType="numeric"
            />

            <Text style={styles.formLabel}>Valor da Gasolina:</Text>
            <TextInput 
                style={styles.input}
                onChangeText={setValorGasolina}
                value={valorGasolina}
                placeholder="Ex: 5,69"
                keyboardType="numeric"
            />

            <Text style={styles.formLabel}>Consumo com Álcool:</Text>
            <TextInput
                style={styles.input} 
                onChangeText={setConsumoAlcool}
                value={consumoAlcool}
                placeholder="Ex: 8,5"
                keyboardType="numeric"
            />

            <Text style={styles.formLabel}>Consumo com Gasolina:</Text>
            <TextInput
                style={styles.input} 
                onChangeText={setConsumoGasolina}
                value={consumoGasolina}
                placeholder="Ex: 10,2"
                keyboardType="numeric"
            />
        </View>
        <View style={styles.buttons}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    validaCustoBeneficio()
                }}
            >
                <Text style={styles.formTextButton}>Calcular Custo-Benefício</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    limparCampos()
                }}
            >
                <Text style={styles.formTextButton}>Limpar Campos</Text>
            </TouchableOpacity>    
        </View>
        <ResultadoCustoBeneficio
            mensagem={mensagem}
            combustivel={msgCombustivel}
        />
    </View>
  );
}
