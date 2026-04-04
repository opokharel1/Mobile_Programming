onLongPress={() => Alert.alert('Long Pressed')} // Hold press

        style={({ pressed }) => ({
          backgroundColor: pressed ? 'gray' : 'blue', // Change color
          padding: 15,
          borderRadius: 10,
          alignItems: 'center',
          transform: [{ scale: pressed ? 0.9 : 1 }], // Slight shrink effect
          opacity: pressed ? 0.7 : 1, // Fade effect
        })}
      >
        {({ pressed }) => (
          <Text style={{ color: 'white', fontSize: 16 }}>
            {pressed ? 'Pressing...' : 'Press Me'}
          </Text>
        )}
      </Pressable>

    </View>
  );
};



// 🔹 5. Modal Component
const ModalExample = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.box}>
      <Button title="Open Modal" onPress={() => setVisible(true)} />

      <Modal visible={visible} transparent animationType="slide">
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text>This is a Modal</Text>
            <Button title="Close" onPress={() => setVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};


// 🔹 6. Activity Indicator
const LoadingExample = () => {
  return (
    <View style={styles.box}>
      <ActivityIndicator size="large" color="blue" />
    </View>
  );
};



// 🔹 8. FlatList Component
const ListExample = () => {
  const DATA = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
  ];

  return (
    <View style={styles.box}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.title}</Text>
        )}
      />
    </View>
  );
};


// 🔹 9. Dimensions + Platform
const DeviceInfoExample = () => {
  const { width, height } = Dimensions.get('window');

  return (
    <View style={styles.box}>
      <Text>Width: {width}</Text>
      <Text>Height: {height}</Text>
      <Text>Platform: {Platform.OS}</Text>
    </View>
  );
};


// 🔹 10. Linking
const LinkingExample = () => {
  return (
    <View style={styles.box}>
      <Button title="Open Google" onPress={() => Linking.openURL('https://google.com')} />
    </View>
  );
};





// 🔹 MAIN APP
const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />

      <ScrollView>
        <Text style={styles.title}>React Native Components Demo</Text>

        {/* Call all components */}
        <CounterExample />
        <TextInputExample />
        <SwitchExample />
        <ImageExample/>
        <PressableExample />
        <ModalExample />
        <LoadingExample />
        <DeviceInfoExample />
        <LinkingExample />

      </ScrollView>

      <ListExample />
    </SafeAreaView>
  );
};


export default App;


// Card in the middle of the Screen.
// 2 input field inside the card. (Username and Password)
// 2 buttons(One cancel and another sign in)
// Cancel button should be outlined and Sign In button should be TouchableOpacity/Pressable
// On click on sign in button alert should be displayed as Signed In Successfully in modal.
// Modal needs to have close button where closing modal takes you back to sign in form.