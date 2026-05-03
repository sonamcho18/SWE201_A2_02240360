import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withRepeat, 
  withTiming, 
  withSpring, 
  Easing, 
  interpolate, 
  Extrapolate 
} from 'react-native-reanimated';

const { width } = Dimensions.get('window');

const AnimationDemoScreen = () => {
  const fadeAnim = useSharedValue(0);
  const scaleAnim = useSharedValue(1);
  const slideAnim = useSharedValue(-width);
  const progress = useSharedValue(0);

  useEffect(() => {
    fadeAnim.value = withTiming(1, { duration: 1000 });
    scaleAnim.value = withRepeat(
      withTiming(1.2, { duration: 800, easing: Easing.inOut(Easing.ease) }), 
      -1, 
      true
    );
    slideAnim.value = withSpring(0, { damping: 10, stiffness: 100 });
    progress.value = withRepeat(
      withTiming(1, { duration: 2000, easing: Easing.linear }), 
      -1, 
      true
    );
  }, []);

  const fadeStyle = useAnimatedStyle(() => ({ 
    opacity: fadeAnim.value 
  }));
  
  const scaleStyle = useAnimatedStyle(() => ({ 
    transform: [{ scale: scaleAnim.value }] 
  }));
  
  const slideStyle = useAnimatedStyle(() => ({ 
    transform: [{ translateX: slideAnim.value }] 
  }));
  
  const progressStyle = useAnimatedStyle(() => ({
    width: interpolate(progress.value, [0, 1], [0, width - 80], Extrapolate.CLAMP),
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Animation Showcase</Text>
      
      <Animated.View style={[styles.demoBox, fadeStyle]}>
        <Text style={styles.demoText}>Fade Animation</Text>
      </Animated.View>

      <Animated.View style={[styles.demoBox, scaleStyle]}>
        <Text style={styles.demoText}>Scale / Pulse Animation</Text>
      </Animated.View>

      <Animated.View style={[styles.demoBox, slideStyle]}>
        <Text style={styles.demoText}>Slide Animation</Text>
      </Animated.View>

      <View style={styles.loadingContainer}>
        <Text style={styles.loadingLabel}>Loading Progress Animation</Text>
        <View style={styles.progressBackground}>
          <Animated.View style={[styles.progressFill, progressStyle]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#F8F9FA', 
    alignItems: 'center', 
    paddingTop: 40 
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#2C3E50', 
    marginBottom: 30 
  },
  demoBox: { 
    width: 200, 
    height: 100, 
    backgroundColor: '#3498DB', 
    borderRadius: 12, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginVertical: 15 
  },
  demoText: { 
    color: '#FFFFFF', 
    fontWeight: '600', 
    fontSize: 14 
  },
  loadingContainer: { 
    marginTop: 30, 
    width: width - 80 
  },
  loadingLabel: { 
    fontSize: 14, 
    color: '#2C3E50', 
    marginBottom: 8, 
    textAlign: 'center' 
  },
  progressBackground: { 
    height: 8, 
    backgroundColor: '#ECF0F1', 
    borderRadius: 4, 
    overflow: 'hidden' 
  },
  progressFill: { 
    height: '100%', 
    backgroundColor: '#3498DB', 
    borderRadius: 4 
  },
});

export default AnimationDemoScreen;