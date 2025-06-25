import React, { useState, useRef } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { Camera } from 'expo-camera';

const COMIDAS_JUNINAS = [
  { id: '1', nome: 'Pipoca 🍿', preco: 5, imagem: require('./assets/pipoca.jpg'), ingredientes: 'Milho, óleo, sal' },
  { id: '2', nome: 'Canjica 🥣', preco: 7, imagem: require('./assets/canjica.jpg'), ingredientes: 'Milho branco, leite, açúcar' },
  { id: '3', nome: 'Maçã do amor 🍎', preco: 4, imagem: require('./assets/maca.jpg'), ingredientes: 'Maçã, açúcar, corante' },
  { id: '4', nome: 'Pamonha 🌽', preco: 6, imagem: require('./assets/pamonha.jpg'), ingredientes: 'Milho, leite, açúcar' },
  { id: '5', nome: 'Quentão 🍷', preco: 8, imagem: require('./assets/quentao.jpg'), ingredientes: 'Gengibre, açúcar, suco de uva' },
];

export default function App() {
  const [favoritos, setFavoritos] = useState([]);
  const [showCamera, setShowCamera] = useState(false);
  const cameraRef = useRef(null);

  const alternarFavorito = (id) => {
    setFavoritos((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  const tirarFoto = async () => {
    if (cameraRef.current) {
      const foto = await cameraRef.current.takePictureAsync();
      console.log('Foto tirada:', foto.uri);
      setShowCamera(false);
    }
  };

  if (showCamera) {
    return (
      <Camera style={{ flex: 1 }} ref={cameraRef}>
        <View style={{ flex: 1, justifyContent: 'flex-end', margin: 20 }}>
          <Button title="Tirar Foto" onPress={tirarFoto} />
        </View>
      </Camera>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🎉 Cardápio Junino 🎉</Text>
      <FlatList
        data={COMIDAS_JUNINAS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.imagem} style={styles.imagem} />
            <View style={styles.info}>
              <Text style={styles.nome}>{item.nome} – R${item.preco}</Text>
              <Text style={styles.ingredientes}>Ingredientes: {item.ingredientes}</Text>
              <TouchableOpacity onPress={() => alternarFavorito(item.id)}>
                <Text style={styles.favorito}>{favoritos.includes(item.id) ? '❤️ Favorito' : '🤍 Marcar favorito'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <Button title="📷 Registrar consumo" onPress={() => setShowCamera(true)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 40, paddingHorizontal: 10 },
  titulo: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  card: { flexDirection: 'row', marginBottom: 15, backgroundColor: '#fdf0d5', borderRadius: 10, overflow: 'hidden' },
  imagem: { width: 100, height: 100 },
  info: { flex: 1, padding: 10 },
  nome: { fontSize: 18, fontWeight: 'bold' },
  ingredientes: { fontSize: 12, color: '#555', marginTop: 4 },
  favorito: { marginTop: 8, fontSize: 14 },
});
