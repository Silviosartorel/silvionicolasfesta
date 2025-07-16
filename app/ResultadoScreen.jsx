import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function ResultadoScreen() {
  const router = useRouter();
  const { pontos } = useLocalSearchParams();

  const mensagem = pontos >= 4
    ? 'Você é um(a) verdadeiro(a) caipira junino(a)! 💃🕺' : 'Treine mais com milho e fogueira! 🌽🔥';

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🎉 Resultado do Quiz 🎉</Text>
      <Text style={styles.pontos}>Você fez {pontos} ponto(s)!</Text>
      <Text style={styles.mensagem}>{mensagem}</Text>
      <Button title="Voltar para o início" onPress={() => router.push('/')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAF0E6', justifyContent: 'center', alignItems: 'center', padding: 20 },
  titulo: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  pontos: { fontSize: 22, marginBottom: 10 },
  mensagem: { fontSize: 18, textAlign: 'center', marginBottom: 30 }
});