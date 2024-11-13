// src/screens/CreateFundraiserScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { db } from '../services/firebase';

const CreateFundraiserScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [targetAmount, setTargetAmount] = useState('');

  const handleCreate = async () => {
    try {
      await db.collection('fundraisers').add({
        title,
        description,
        targetAmount: parseFloat(targetAmount),
        currentAmount: 0
      });
      Alert.alert('Fundraiser created successfully!');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Title" value={title} onChangeText={setTitle} />
      <TextInput style={styles.input} placeholder="Description" value={description} onChangeText={setDescription} />
      <TextInput style={styles.input} placeholder="Target Amount" value={targetAmount} onChangeText={setTargetAmount} keyboardType="numeric" />
      <Button title="Create" onPress={handleCreate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: { borderWidth: 1, padding: 8, marginBottom: 12 }
});

export default CreateFundraiserScreen;
