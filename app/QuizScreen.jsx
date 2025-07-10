import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const perguntas = [
  { pergunta: 'Qual a origem da Festa Junina?', opcoes: ['Estados Unidos', 'Brasil', 'Europa', 'África'], resposta: 'Europa' },
  { pergunta: 'Qual é uma dança típica das festas juninas?', opcoes: ['Samba', 'Quadrilha', 'Forró eletrônico', 'Bossa Nova'], resposta: 'Quadrilha' },
  { pergunta: 'Qual desses é um prato típico da festa junina?', opcoes: ['Feijoada', 'Pipoca', 'Sushi', 'Pizza'], resposta: 'Pipoca' },
  { pergunta: 'Quem são os santos homenageados nas festas juninas?', opcoes: ['Pedro, João e Antônio', 'Lucas, Marcos e João', 'Francisco, Paulo e Pedro', 'José, Tiago e André'], resposta: 'Pedro, João e Antônio' },
  { pergunta: 'O que se costuma usar na decoração das festas juninas?', opcoes: ['Balões e bandeirinhas', 'Pisca-pisca', 'Confete e serpentina', 'Árvores de Natal'], resposta: 'Balões e bandeirinhas' }
];

export default function QuizScreen() {
  const router = useRouter();
  const [indice, setIndice] = useState(0);
  const [pontos, setPontos] = useState(0);

  const responder = (opcao) => {
    const acertou = opcao === perguntas[indice].resposta;
    const novaPontuacao = pontos + (acertou ? 1 : 0);

    if (indice + 1 < perguntas.length) {
      setPontos(novaPontuacao);
      setIndice(indice + 1);
    } else {
      // Redireciona para a tela de resultado passando a pontuação
      router.push({ pathname: '/ResultadoScreen', params: { pontos: novaPontuacao } });
    }
  };

  const perguntaAtual = perguntas[indice];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>❓ Quiz Junino ❓</Text>
      <Text style={styles.pergunta}>{perguntaAtual.pergunta}</Text>
      {perguntaAtual.opcoes.map((opcao, i) => (
        <TouchableOpacity key={i} style={styles.botao} onPress={() => responder(opcao)}>
          <Text style={styles.textoBotao}>{opcao}</Text>
        </TouchableOpacity>
      ))}
      <Text style={styles.progresso}>Pergunta {indice + 1} de {perguntas.length}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFDAB9', padding: 20, justifyContent: 'center' },
  titulo: { fontSize: 26, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#8B0000' },
  pergunta: { fontSize: 20, marginBottom: 10, fontWeight: 'bold' },
  botao: { backgroundColor: '#FF7F50', padding: 12, borderRadius: 10, marginVertical: 6 },
  textoBotao: { color: 'white', fontSize: 16, textAlign: 'center' },
  progresso: { marginTop: 20, fontSize: 14, textAlign: 'center' }
});