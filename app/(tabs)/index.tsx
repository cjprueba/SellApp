import { Image, StyleSheet, Platform, Text, View, ScrollView, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { Bars3CenterLeftIcon, BellIcon } from 'react-native-heroicons/solid'
import  GradientButton  from '../../components/gradientButton';
import ProductCardNative from "../../components/ProductCardNative";
import * as Icon from 'react-native-feather';

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
          <View className="flex-row justify-between items-center px-4 pb-2 ">
            <View className="flex-row flex-1 items-center p-3 rounded-full border border-slate-300">
                <Icon.Search  height="25" weight="25" stroke="gray"/>
                <TextInput placeholder="Búsqueda" className="ml-2 flex-1" />
                <View className="flex-row items-center space-x-1 border-0">
                  <Icon.MapPin height="25" weight="25" stroke="gray"/>
                  <Text className="text-slate-300" >CDE, Py</Text>
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
                      <TouchableOpacity onPress={() => setActiveCategory(cat)} key={cat} className="bg-blue-200 p-3 px-4 rounded-full mr-2">
                        <Text>
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
            <Text className="ml-4 text-2xl font-bold" >Productos Cercanos</Text>
          </View>

          <View className="mt-2">
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
              <ProductCardNative 
                item={item}
              />
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


