import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { Appbar } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content title="My Profile" subtitle="About Me" />
        </Appbar.Header>

        {/* Section 1 */}
        <View style={{ margin: 10, alignItems: 'center' }}>
          <Image source={require('./assets/img.png')} style={styles.MyImage} />
        </View>

        {/* Section 2 */}
        <View style={{ margin: 10, alignItems: 'center' }}>
          <Text>Hello, My name is Amar Choudary jeeva , and I am an Actor.</Text>
        </View>

        {/* Section 3 */}
        <View style={{ margin: 10, alignItems: 'center' }}>
          <Button
            title="Know More"
            onPress={() => alert('Thank you for your interest!')}
          />
        </View>

        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  MyImage: {
    height: 400,
    width: 300,
  },
});
