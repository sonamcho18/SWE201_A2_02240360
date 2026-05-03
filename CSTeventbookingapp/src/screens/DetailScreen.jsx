import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  Alert, 
  PanResponder, 
  Animated 
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomButton from '../components/CustomButton';

const DetailScreen = ({ route, navigation }) => {
  const { facility } = route.params;
  const [isBooked, setIsBooked] = useState(false);
  const [swipeX] = useState(new Animated.Value(0));

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      if (gestureState.dx > 0 && gestureState.dx < 200) {
        swipeX.setValue(gestureState.dx);
      }
    },
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dx > 150) {
        handleBooking();
        Animated.spring(swipeX, { 
          toValue: 0, 
          useNativeDriver: false 
        }).start();
      } else {
        Animated.spring(swipeX, { 
          toValue: 0, 
          useNativeDriver: false 
        }).start();
      }
    },
  });

  const handleBooking = () => {
    setIsBooked(true);
    Alert.alert(
      'Booking Confirmed', 
      `${facility.name} has been booked successfully!`,
      [{ text: 'OK', onPress: () => navigation.goBack() }]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imagePlaceholder}>
        <Icon name="event-available" size={80} color="#BDC3C7" />
        <Text style={styles.imageLabel}>{facility.name}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.name}>{facility.name}</Text>
        <Text style={styles.description}>{facility.description}</Text>

        <View style={styles.infoSection}>
          <View style={styles.infoRow}>
            <Icon name="people" size={20} color="#3498DB" />
            <Text style={styles.infoText}>Capacity: {facility.capacity}</Text>
          </View>
          <View style={styles.infoRow}>
            <Icon name="attach-money" size={20} color="#3498DB" />
            <Text style={styles.infoText}>Price: Nu.{facility.price} / hour</Text>
          </View>
          <View style={styles.infoRow}>
            <Icon name="access-time" size={20} color="#3498DB" />
            <Text style={styles.infoText}>Availability: {facility.availability}</Text>
          </View>
        </View>
      </View>

      {/* Footer with swipe to book */}
      <View style={styles.footer}>
        {!isBooked ? (
          <View style={styles.swipeContainer}>
            <Text style={styles.swipeHint}>Swipe right to book</Text>
            <Animated.View 
              {...panResponder.panHandlers} 
              style={[styles.swipeButton, { transform: [{ translateX: swipeX }] }]}
            >
              <Icon name="chevron-right" size={24} color="#FFFFFF" />
            </Animated.View>
          </View>
        ) : (
          <CustomButton title="Booked ✓" onPress={() => {}} variant="secondary" />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#F8F9FA' 
  },
  imagePlaceholder: { 
    height: 200, 
    backgroundColor: '#ECF0F1', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  imageLabel: { 
    marginTop: 12, 
    fontSize: 18, 
    fontWeight: '600', 
    color: '#7F8C8D' 
  },
  content: { 
    padding: 20,
    paddingBottom: 0,
  },
  name: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    color: '#2C3E50' 
  },
  description: { 
    fontSize: 16, 
    color: '#7F8C8D', 
    marginTop: 8, 
    lineHeight: 22 
  },
  infoSection: { 
    marginTop: 20, 
    padding: 16, 
    backgroundColor: '#FFFFFF', 
    borderRadius: 12 
  },
  infoRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 12 
  },
  infoText: { 
    fontSize: 14, 
    color: '#2C3E50', 
    marginLeft: 12 
  },
  footer: {
    padding: 20,
    paddingTop: 0,
    marginTop: 'auto',
  },
  swipeContainer: { 
    backgroundColor: '#FFFFFF', 
    borderRadius: 12, 
    padding: 16, 
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  swipeHint: { 
    fontSize: 14, 
    color: '#7F8C8D', 
    marginBottom: 12,
    fontWeight: '500',
  },
  swipeButton: { 
    width: 60, 
    height: 60, 
    borderRadius: 30, 
    backgroundColor: '#3498DB', 
    justifyContent: 'center', 
    alignItems: 'center', 
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});

export default DetailScreen;