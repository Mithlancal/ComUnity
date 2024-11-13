// src/screens/HomeScreen.js
import React, { useEffect, useState } from 'react';
import { View, FlatList, Button, StyleSheet } from 'react-native';
import { db } from '../services/firebase';
import FundraiserCard from '../components/FundraiserCard';

const HomeScreen = ({ navigation }) => {
  const [fundraisers, setFundraisers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await db.collection('fundraisers').get();
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setFundraisers(data);
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Button title="Create New Fundraiser" onPress={() => navigation.navigate('CreateFundraiser')} />
      <FlatList
        data={fundraisers}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <FundraiserCard fundraiser={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 }
});

export default HomeScreen;
