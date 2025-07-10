import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableWithoutFeedback,
  Button,
  Image
} from 'react-native';
import { useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window');

const peixeImagem = require('../assets/peixe.png'); // Pode trocar por outro

export default function PescariaScreen() {
  const router = useRouter(); // ✅ usar expo-router aqui
  const [pontuacao, setPontuacao] = useState(0);
  const [peixeX, setPeixeX] = useState(Math.random() * (width - 100));
  const [peixeY, setPeixeY] = useState(new Animated.Value(-100));

  const animarPeixe = () => {
    setPeixeX(Math.random() * (width - 100));
    peixeY.setValue(-100);
    Animated.timing(peixeY, {
      toValue: height,
      duration: 3000,
      useNativeDriver: true
    }).start(() => animarPeixe());
  };

  const pescar = () => {
    setPontuacao((prev) => prev + 1);
    animarPeixe();
  };

  useEffect(() => {
    animarPeixe();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.pontuacao}>🎯 Pontuação: {pontuacao}</Text>
      
      <TouchableWithoutFeedback onPress={pescar}>
        <Animated.View
          style={[styles.peixe, {
            transform: [
              { translateX: peixeX },
              { translateY: peixeY }
            ]
          }]}
        >
          <Image source={peixeImagem} style={styles.imagem} />
        </Animated.View>
      </TouchableWithoutFeedback>

      <View style={styles.btnVoltar}>
          
      <Button title="Voltar para o Cardápio" onPress={() => router.push('/')} />
      <Button title="❓ Fazer Quiz Junino ❓" onPress={() => router.push('QuizScreen')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4682B4',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  pontuacao: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 10
  },
  peixe: {
    position: 'absolute',
    width: 100,
    height: 100
  },
  imagem: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'white'
  },
  btnVoltar: {
    position: 'absolute',
    bottom: 30
  }
});
