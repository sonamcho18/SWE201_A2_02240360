import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming, 
  FadeInDown 
} from 'react-native-reanimated';
import { facilities } from '../data/facilities';

const HomeScreen = ({ navigation }) => {
  const fadeOpacity = useSharedValue(0);

  useEffect(() => {
    fadeOpacity.value = withTiming(1, { duration: 800 });
  }, []);

  const animatedHeader = useAnimatedStyle(() => ({
    opacity: fadeOpacity.value,
  }));

  const featuredFacilities = facilities.slice(0, 3);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Animated.View style={[styles.header, animatedHeader]}>
        <Text style={styles.greeting}>Hello, Sonam Choki</Text>
        <Text style={styles.subtitle}>Book campus facilities easily</Text>
      </Animated.View>

      <View style={styles.quickActions}>
        <TouchableOpacity 
          style={styles.actionCard} 
          onPress={() => navigation.navigate('Categories')}
        >
          <Icon name="apps" size={32} color="#3498DB" />
          <Text style={styles.actionText}>Browse All</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.actionCard} 
          onPress={() => navigation.navigate('Profile')}
        >
          <Icon name="person" size={32} color="#3498DB" />
          <Text style={styles.actionText}>My Bookings</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.featuredSection}>
        <Text style={styles.sectionTitle}>Featured Facilities</Text>
        {featuredFacilities.map((facility, index) => (
          <Animated.View 
            key={facility.id} 
            entering={FadeInDown.delay(index * 100).duration(400)}
          >
            <TouchableOpacity
              style={styles.featuredCard}
              onPress={() => navigation.navigate('Detail', { facility })}
            >
              <View style={styles.featuredIcon}>
                <Icon name="location-city" size={40} color="#2C3E50" />
              </View>
              <View style={styles.featuredInfo}>
                <Text style={styles.featuredTitle}>{facility.name}</Text>
                <Text style={styles.featuredPrice}>Nu.{facility.price}/hour</Text>
              </View>
              <Icon name="chevron-right" size={24} color="#BDC3C7" />
            </TouchableOpacity>
          </Animated.View>
        ))}
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
    padding: 24, 
    paddingTop: 48, 
    backgroundColor: '#FFFFFF', 
    borderBottomLeftRadius: 24, 
    borderBottomRightRadius: 24 
  },
  greeting: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    color: '#2C3E50' 
  },
  subtitle: { 
    fontSize: 16, 
    color: '#7F8C8D', 
    marginTop: 4 
  },
  quickActions: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    padding: 20 
  },
  actionCard: { 
    backgroundColor: '#FFFFFF', 
    padding: 16, 
    borderRadius: 12, 
    alignItems: 'center', 
    width: '40%', 
    elevation: 2 
  },
  actionText: { 
    marginTop: 8, 
    fontSize: 14, 
    color: '#2C3E50', 
    fontWeight: '500' 
  },
  featuredSection: { 
    paddingHorizontal: 20, 
    paddingBottom: 30 
  },
  sectionTitle: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    color: '#2C3E50', 
    marginBottom: 16 
  },
  featuredCard: { 
    backgroundColor: '#FFFFFF', 
    borderRadius: 12, 
    padding: 16, 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 12, 
    elevation: 2 
  },
  featuredIcon: { 
    width: 60, 
    height: 60, 
    borderRadius: 30, 
    backgroundColor: '#ECF0F1', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginRight: 16 
  },
  featuredInfo: { 
    flex: 1 
  },
  featuredTitle: { 
    fontSize: 16, 
    fontWeight: '600', 
    color: '#2C3E50' 
  },
  featuredPrice: { 
    fontSize: 14, 
    color: '#3498DB', 
    marginTop: 4 
  },
});

export default HomeScreen;