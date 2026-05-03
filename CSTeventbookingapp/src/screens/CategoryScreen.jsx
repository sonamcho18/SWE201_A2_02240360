import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import FacilityCard from '../components/FacilityCard';
import { facilities } from '../data/facilities';

const CategoryScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>All Facilities</Text>
        <Text style={styles.subtitle}>Choose a facility to book</Text>
      </View>
      <FlatList
        data={facilities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FacilityCard 
            facility={item} 
            onPress={() => navigation.navigate('Detail', { facility: item })} 
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#F8F9FA' 
  },
  header: { 
    padding: 20, 
    backgroundColor: '#FFFFFF', 
    borderBottomWidth: 1, 
    borderBottomColor: '#ECF0F1' 
  },
  title: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    color: '#2C3E50' 
  },
  subtitle: { 
    fontSize: 14, 
    color: '#7F8C8D', 
    marginTop: 4 
  },
  listContent: { 
    paddingVertical: 8 
  },
});

export default CategoryScreen;