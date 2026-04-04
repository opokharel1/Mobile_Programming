import { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';
import {TouchableOpacity, Alert, TextInput, Button, TouchableWithoutFeedback, Keyboard, TouchableHighlight, Modal, View, Text, Image, SectionList, Switch, StyleSheet, ScrollView, FlatList, Animated} from 'react-native';
import styles from "./styles/AppStyles";


const App = () => {
  return (
    <View style={{ backgroundColor: 'red', marginTop: 100, marginRight:2, padding: 20, borderRadius: 5 }}>
    </View>
  );
};


const App = () => {
  return (
    <View style={{ padding: 20, height: 200, width: 410, backgroundColor: 'grey', marginTop: 55 }}>
      <Text style={{ fontSize: 25, color: 'red', fontWeight: 'bold', margin: 50 }}>
        Presidential graduate school.
      </Text>
    </View>
  );
};

const App = () => {
  return (
    <View style={{ alignItems: 'center', marginTop: 20 }}>
      <Image 
        source={{ uri: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} 
        style={{ marginTop: 55, width: 200, height: 200, borderRadius: 100 }}
      />
    </View>
  );
};

const App = () => {
  return (
    <View style={{ alignItems: 'center', marginTop: 20 }}>
      <Image 
        source={require('./assets/images/image.png')}
        style={{ marginTop: 55, width: 200, height: 200, borderRadius: 100 }}
      />
    </View>
  );
};


const App = () => {
  return (
    <View style={{marginTop: 55, padding: 20 }}>
      <TextInput 
        style={{ borderWidth: 3, padding: 30, borderRadius: 100 }} 
        placeholder="Enter your name"
      />
    </View>
  );
};

const App = () => {
  return (
    <View style={{marginTop: 55, padding: 20, backgroundColor:'white' }}>
      <Button title="Click Me" onPress={() => Alert.alert('Congtatulations!')} />
    </View>
  );
};

TouchableOpacity reduces the opacity when pressed, giving a smooth fade effect.
const App = () => {
  return (
    <View style={{ paddingTop: 55, padding: 10 }}>
      <TouchableOpacity 
        style={{ backgroundColor: 'red', padding: 10, borderRadius: 20 }}
        onPress={() => Alert.alert('Custom Button Clicked!')}
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>Press Me</Text>
      </TouchableOpacity>
    </View>
  );
};


const App = () => {
  return (
      <View style={{ margin:60, padding: 20, alignItems: 'center' }}>
        <TouchableHighlight 
          style={{ backgroundColor: 'blue', padding: 15, borderRadius: 10 }}
          underlayColor="green"
          onPress={() => Alert.alert('Button Pressed!')}
        >
          <Text style={{ color: 'white', fontSize: 18, textAlign: 'center' }}>
            Press Me
          </Text>
        </TouchableHighlight>
      </View>
  );
};

TouchableWithoutFeedback captures taps outside an input field and is commonly used to dismiss the keyboard.
const App = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
        <TextInput 
          style={{ borderWidth: 1, padding: 10, borderRadius: 5 }} 
          placeholder="Type here..."
        />
      </View>
    </TouchableWithoutFeedback>
  );
};


const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, React Native!</Text>
      <Text style={styles.text1}>Hello, React Native!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    padding: 20, 
    backgroundColor: 'blue',
    marginTop: 55
  },
  text: { 
    fontSize: 18, 
    color: 'white' 
  },
  text1: { 
    fontSize: 18, 
    color: 'black' 
  },
});


const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxRed} />
      <View style={styles.boxGreen} />
      <View style={styles.boxBlue} />
      <View style={styles.boxGreen} />
      <View style={styles.boxRed} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column', // Aligns children in a row (horizontal)
    justifyContent: 'space-between', // Distributes items with space between them
    alignItems: 'center', // Aligns items vertically in the center
    padding: 20,
    marginTop: 55
  },
  boxRed: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  boxBlue: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
  boxGreen: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
  },
});


const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxRed} />
      <View style={styles.boxBlue} />
      <View style={styles.boxRed} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column', // Aligns children in a row (horizontal)
    alignItems: 'center', // Aligns items vertically in the center
    padding: 20,
    marginTop: 55
  },
  boxRed: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  boxBlue: {
    margin: 10,
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
});


const App = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>React Native</Text>
      <Text style={styles.description}>Build cross-platform mobile apps easily!</Text>
      <Button title="Learn More" onPress={() => Alert.alert('You clicked Learn More!')} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 20,
    margin: 60,
    borderRadius: 10,
    shadowColor: 'blue',
    shadowOpacity: 0.5,
    shadowRadius: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
});


const App = () => {
  return (
    <View>
      <View style={styles.upper}></View>
      <ScrollView style={styles.container}>
        <Text style={styles.text}>Item 1</Text>
        <Text style={styles.text}>Item 2</Text>
        <Text style={styles.text}>Item 3</Text>
        <Text style={styles.text}>Item 4</Text>
        <Text style={styles.text}>Item 5</Text>
        <Text style={styles.text}>Item 6</Text>
        <Text style={styles.text}>