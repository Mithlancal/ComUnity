// src/components/FundraiserCard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FundraiserCard = ({ fundraiser }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{fundraiser.title}</Text>
      <Text>{fundraiser.description}</Text>
      <Text>Target: ${fundraiser.targetAmount}</Text>
      <Text>Raised: ${fundraiser.currentAmount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { padding: 16, marginBottom: 16, backgroundColor: '#fff', borderRadius: 8, shadowColor: '#000', shadowOpacity: 0.2 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 }
});

export default FundraiserCard;
