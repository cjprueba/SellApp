import React from "react";
import { Image, TouchableWithoutFeedback, View, Text } from "react-native";
export default function ProductCardNative({item}) {

    return (
        <TouchableWithoutFeedback>
            <View className=" mt-3 ml-2 bg-white rounded-3xl shadow-lg w-44 h-68">
                <Image className=" w-full mx-auto aspect-square  rounded-t-3xl" source={{ uri: item.image }}/>
                <View className="px-3 pb-4 space-y-2">
                    <Text className="text-lg font-bold pt-2">Gs. {item.price}</Text>
                    <View className="">
                        <Text className="text-xs" numberOfLines={1} ellipsizeMode="tail">
                            <Text className="text-gray-700" >{item.title}</Text>
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}