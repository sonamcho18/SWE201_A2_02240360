import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Profile data with your name
const profile = {
  name: 'Sonam Choki',
  email: '02240360@cst.edu',
  studentId: '02240360',
  department: 'Software Engineering',
};

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Icon name="person" size={60} color="#FFFFFF" />
        </View>
        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.email}>{profile.email}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Student Information</Text>
        <View style={styles.infoCard}>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Student ID</Text>
            <Text style={styles.infoValue}>{profile.studentId}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Department</Text>
            <Text style={styles.infoValue}>{profile.department}</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Past Booking</Text>
        <View style={styles.statsCard}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>3</Text>
            <Text style={styles.statLabel}>Total Bookings</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Hours Used</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#F8F9FA' 
  },
  header: { 
    backgroundColor: '#2C3E50', 
    padding: 32, 
    alignItems: 'center', 
    borderBottomLeftRadius: 24, 
    borderBottomRightRadius: 24 
  },
  avatar: { 
    width: 100, 
    height: 100, 
    borderRadius: 50, 
    backgroundColor: '#3498DB', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 16 
  },
  name: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#FFFFFF' 
  },
  email: { 
    fontSize: 14, 
    color: '#BDC3C7', 
    marginTop: 4 
  },
  section: { 
    padding: 20 
  },
  sectionTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#2C3E50', 
    marginBottom: 12 
  },
  infoCard: { 
    backgroundColor: '#FFFFFF', 
    borderRadius: 12, 
    padding: 16 
  },
  infoItem: { 
    marginBottom: 12 
  },
  infoLabel: { 
    fontSize: 12, 
    color: '#7F8C8D', 
    marginBottom: 4 
  },
  infoValue: { 
    fontSize: 16, 
    color: '#2C3E50', 
    fontWeight: '500' 
  },
  statsCard: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    backgroundColor: '#FFFFFF', 
    borderRadius: 12, 
    padding: 20 
  },
  statItem: { 
    alignItems: 'center' 
  },
  statNumber: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    color: '#3498DB' 
  },
  statLabel: { 
    fontSize: 12, 
    color: '#7F8C8D', 
    marginTop: 4 
  },
});

export default ProfileScreen;