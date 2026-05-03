import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Animated, { useAnimatedStyle, withSpring, useSharedValue } from 'react-native-reanimated';

const FacilityCard = ({ facility, onPress }) => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.97);
  };

  const handlePressOut = () => {
    scale.value = withSpring(1);
  };

  return (
    <Animated.View style={[styles.card, animatedStyle]}>
      <TouchableOpacity
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={0.9}
      >
        <View style={styles.cardContent}>
          <View style={styles.iconContainer}>
            <Icon name="event-seat" size={32} color="#2C3E50" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{facility.name}</Text>
            <Text style={styles.description} numberOfLines={2}>
              {facility.description}
            </Text>
            <View style={styles.detailsRow}>
              <Icon name="people" size={16} color="#7F8C8D" />
              <Text style={styles.detailText}>{facility.capacity}</Text>
              <Icon name="attach-money" size={16} color="#7F8C8D" style={{ marginLeft: 12 }} />
              <Text style={styles.detailText}>Nu.{facility.price}/hr</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardContent: {
    flexDirection: 'row',
    padding: 16,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ECF0F1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#7F8C8D',
    marginBottom: 8,
  },
  detailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    fontSize: 12,
    color: '#7F8C8D',
    marginLeft: 4,
    marginRight: 8,
  },
});

export default FacilityCard;