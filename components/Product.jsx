import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'; // Using Expo Icons for icons

const ProductCard = ({ item }) => {
  return (
    <View className="bg-white p-4 rounded-lg shadow-lg m-2 w-40">
      <Image
        source={{ uri: item.image }}
        className="h-32 w-full rounded-lg"
        resizeMode="contain"
      />
      <Text className="text-xs font-bold mt-2" numberOfLines={1}>{item.title}</Text>
      <Text className="text-gray-600">Gs. {item.price}</Text>
      <View className="flex-row items-center justify-between mt-2">
        <View className="flex-row items-center">
          <Feather name="map-pin" size={16} color="gold" />
          <Text className="ml-1">1 Km.</Text>
        </View>
        <TouchableOpacity>
          <Feather name="heart" size={20} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCard;