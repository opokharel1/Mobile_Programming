Item 7</Text>
//         <Text style={styles.text}>Item 8</Text>

//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   upper:
//   {
//     marginTop: 55,
//     width: 400,
//     height: 200,
//     backgroundColor: 'green'
//   },
  
//   container: {
//     margin: 20,
//     height: 200,
//     width: 360
//   },
//   text: {
//     fontSize: 18,
//     padding: 10,
//     backgroundColor: 'lightgray',
//     marginBottom: 5,
//   },
// });

// const DATA = [
//   { id: '1', title: 'Item 1' },
//   { id: '2', title: 'Item 2' },
//   { id: '3', title: 'Item 3' },
//   { id: '4', title: 'Item 4' },
//   { id: '5', title: 'Item 5' },
// ];

// const App = () => {
//   return (
//     <FlatList
//       data={DATA} // The data array
//       keyExtractor={(item) => item.id} // Unique key for each item
//       renderItem={({ item }) => ( // Function to render each item
//         <View style={styles.item}>
//           <Text style={styles.text}>{item.title}</Text>
//         </View>
//       )}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   item: {
//     marginTop: 55,
//     padding: 20,
//     marginVertical: 5,
//     backgroundColor: '#f9c2ff',
//   },
//   text: {
//     fontSize: 18,
//   },
// });

// const DATA = [
//   {
//     title: 'Fruits',
//     data: ['Apple', 'Banana', 'Orange'],
//   },
//   {
//     title: 'Vegetables',
//     data: ['Carrot', 'Broccoli', 'Spinach'],
//   },
// ];

// const App = () => {
//   return (
//     <View style={styles.upper}>
//       {/* SectionList component for rendering grouped lists */}
//       <SectionList
//         // The sections prop takes an array of objects where each object represents a section of the list
//         sections={DATA}
//         // keyExtractor ensures each item has a unique key for React's rendering optimization
//         keyExtractor={(item, index) => item + index}
//         // renderSectionHeader defines how each section header should be displayed
//         renderSectionHeader={({ section: { title } }) => <Text style={styles.header}>{title}</Text>}
//         // renderItem defines how each individual item should be displayed in the list
//         renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
//       />
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   upper:{
//     marginTop: 55,
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//   },
//   header: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     backgroundColor: 'yellow',
//     padding: 10,
//   },
// });

// const App = () => {
//   const [isEnabled, setIsEnabled] = useState(false);

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>{isEnabled ? 'Switch is ON' : 'Switch is OFF'}</Text>
//       <Switch
//         value={isEnabled} // Current switch state
//         onValueChange={(newValue) => setIsEnabled(newValue)} // Toggle state
//       />
//     </View>
//   );
// };


// const App = () => {
//   const [count, setCount] = useState(2);
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Count: {count}</Text>
//       <Button title="Increase Count" onPress={() => setCount(count + 1)} />
//     </View>
//   );
// };


// const App = () => {
//   const [text, setText] = useState('');

//   return (
//     <View style={{ padding: 20, marginTop: 55 }}>
//       <Text>Enter something:</Text>
//       <TextInput
//         style={{ borderBottomWidth: 1, height: 40, marginTop: 10 }}
//         placeholder="Type here..."
//         value={text}
//         onChangeText={setText}
//       />
//       <Text>You typed: {text}</Text>
//     </View>
//   );
// };



// const App = () => {
//   const [isChecked, setIsChecked] = useState(true);

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <CheckBox value={isChecked} onValueChange={setIsChecked} />
//       <Text>{isChecked ? 'Checked' : 'Unchecked'}</Text>
//     </View>
//   );
// };


// const App = () => {
//   const [visible, setVisible] = useState(false);

//   return (
//     <View style={styles.container}>
//       <Button title="Open Modal" onPress={() => setVisible(true)} />
//       <Modal visible={visible} transparent animationType="slide">
//         <View style={styles.modalBackground}>
//           <View style={styles.modalContent}>
//             <Text style={styles.text}>This is a Modal!</Text>
//             <Button title="Close" onPress={() => setVisible(false)} />
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalBackground: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   modalContent: {
//     backgroundColor: 'white',
//     padding: 20,
//     borderRadius: 10,
//     width: 300,
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 18,
//     marginBottom: 10,
//   },
// });
//export default App;

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Hello React Native</Text>
//     </View>
//   );
// }



import {
  ActivityIndicator,
  Pressable,
  SafeAreaView,
  Platform,
  Dimensions,
  Linking,
  StatusBar,
} from 'react-native';
import styles from './styles/AppStyles';


// 🔹 1. Counter Component
const CounterExample = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.box}>
      <Text>Count: {count}</Text>
      <Button title="Increase" onPress={() => setCount(count + 1)} />
    </View>
  );
};


// 🔹 2. Text Input Component
const TextInputExample = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.box}>
      <TextInput
        style={styles.input}
        placeholder="Type here..."
        value={text}
        onChangeText={setText}
      />
      <Text>You typed: {text}</Text>
    </View>
  );
};

const ImageExample = () => {
  return (
    <View style={{ alignItems: 'center', marginTop: 20 }}>
      <Image 
        source={require('./assets/images/image.jpeg')}
        style={{ marginTop: 10, width: 200, height: 200, borderRadius: 10 }}
      />
    </View>
  );
};


// 🔹 3. Switch Component
const SwitchExample = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View style={styles.box}>
      <Switch value={isEnabled} onValueChange={setIsEnabled} />
      <Text>{isEnabled ? 'ON' : 'OFF'}</Text>
    </View>
  );
};


// 🔹 4. Pressable Component
const PressableExample = () => {
  return (
    <View style={styles.box}>

      <Pressable
        onPress={() => Alert.alert('Pressed')} // Normal tap