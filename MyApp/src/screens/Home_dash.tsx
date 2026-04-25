// --------- Do not touch this file (this is for reference only) ---------

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.container}>

      {/* Header */}
      <Text style={styles.header}>Amanat</Text>

      {/* Banner */}
      <View style={styles.banner} />

      {/* Title */}
      <Text style={styles.title}>Rent Now</Text>
      <Text style={styles.subtitle}>
        Affordable gadget rentals available
      </Text>

      {/* Categories */}
      <Text style={styles.sectionTitle}>Categories</Text>

      <View style={styles.categories}>
        <Category name="All" active={true} />
        <Category name="Cameras"  />
        <Category name="Drones" />
        <Category name="Laptops" />
        <Category name="Gaming" />
      </View>

      {/* Featured */}
      <Text style={styles.sectionTitle}>Featured Near You</Text>

      <View style={styles.cardContainer}>
        <ProductCard
          name="Sony Alpha a7 III"
          price="Rs. 2,500 / day"
          image="https://imgs.search.brave.com/812qwlDYSX_eKV9tFQcQYq_JCjnVNza85-IeDJuOHdw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLmVi/YXlpbWcuY29tL2lt/YWdlcy9nL0FoNEFB/ZVN3NTUxcHVUOXEv/cy1sOTYwLndlYnA"
        />

        <ProductCard
          name="DJI Mavic Air 2"
          price="Rs. 4,000 / day"
          image="https://images.unsplash.com/photo-1508614589041-895b88991e3e"
        />
      </View>

    </ScrollView>
  );
};

export default App;

//////////////////////////////////////////////////////////////////

// 🔹 Category Component
const Category = ({ name, active }) => {
  return (
    <TouchableOpacity
      style={[
        styles.category,
        { backgroundColor: active ? '#2f6fed' : '#eee' },
      ]}
    >
      <Text style={{ color: active ? 'white' : 'black' }}>{name}</Text>
    </TouchableOpacity>
  );
};

//////////////////////////////////////////////////////////////////

// 🔹 Product Card Component
const ProductCard = ({ name, price, image }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.cardTitle}>{name}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
};

//////////////////////////////////////////////////////////////////

// 🔹 Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    marginTop: 40,
    backgroundColor: '#f5f5f5',
  },

  header: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  banner: {
    height: 150,
    borderWidth: 1,
    marginVertical: 15,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  subtitle: {
    color: 'gray',
    marginBottom: 15,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },

  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },

  category: {
    padding: 10,
    borderRadius: 10,
  },

  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  card: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,

    // Shadow
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },

  image: {
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },

  cardTitle: {
    fontWeight: 'bold',
  },

  price: {
    color: 'gray',
  },
});