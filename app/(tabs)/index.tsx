import { Image, StyleSheet, Platform, Text, View, ScrollView, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { Bars3CenterLeftIcon, BellIcon } from 'react-native-heroicons/solid'
import  GradientButton  from '../../components/gradientButton';
import ProductCardNative from "../../components/ProductCardNative";
import Product from "../../components/Product";
import * as Icon from 'react-native-feather';
import { Colors } from '@/constants/Colors';
import { Feather } from '@expo/vector-icons';

const categories = ['Todos', 'Autos', 'Bicicletas', 'Ropa', 'Joyas', 'Motos']

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState('Action')

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => { 
      fetch('https://fakestoreapi.com/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
    }


    fetchProducts();

  }, []);
  
  /* colors={['rgba(58, 131, 244,0.4)', 'rgba(9, 181, 211, 0.4)']} */
  return (
    <LinearGradient
      colors={[]}
      className="w-full flex-1"
    >
    <View >
      <SafeAreaView>
        <View className="container">

          { /* Search Bar */ }
          <View className="p-4">
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-gray-500">Ubicación</Text>
                <View className="flex-row items-center">
                  
                  <Feather name="map-pin" size={16} color={Colors.default.green}/>
                  
                  <Text className="ml-1 text-md">Ciudad del Este, Py</Text>
                  <Feather name="chevron-down" size={16} color="black" />
                </View>
              </View>
              <Feather name="bell" size={24} color="black" />
            </View>
            <View className="flex-row items-center mt-4 bg-gray-100 p-1 rounded-lg bg-white">
              <Feather name="search" size={20} color="gray" />
              <TextInput
                placeholder="Search Furniture"
                className="flex-1 ml-2"
              />
              <View className="bg-green-600 p-2 rounded-lg">
                <Feather name="sliders" size={20} color={Colors.default.tertiary} />
              </View>
            </View>
          </View>

          <View className="pl-4">
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {
                categories.map( cat => {
                  if (cat == activeCategory) {
                    return (
                      <GradientButton containerClass="mr-2" value={cat} />
                    )
                    
                  } else {
                    return (
                      <TouchableOpacity onPress={() => setActiveCategory(cat)} key={cat} className="bg-green-600 p-2 px-4 rounded-full mr-2">
                        <Text className="text-green-50">
                        {cat}
                        </Text>
                      </TouchableOpacity>
                    )
                  }
                  
                }
                )
              }
            </ScrollView>
          </View>
          
          <View className="mt-3">
            <Text className="ml-4 text-xl font-bold " >Productos Cercanos</Text>
          </View>

          <View className="mx-auto mt-2">
          <FlatList
            data={products}
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            initialNumToRender={5}
            horizontal={false}
            numColumns={2}
            renderItem={({ item }) => (
            
            <View
              key={item.id}
            >  
              {/*<ProductCardNative 
                item={item}
              />*/}

              <Product item={item} />
              
            </View>

            )}
          />
          </View>
        </View>
      </SafeAreaView>
      </View>
      </LinearGradient>
  );
}


