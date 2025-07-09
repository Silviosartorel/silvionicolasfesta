import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function PescariaScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🎣 Bem-vindo ao Jogo da Pescaria!</Text>
      <Button title="Voltar ao Cardápio" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ADD8E6' },
  text: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});
