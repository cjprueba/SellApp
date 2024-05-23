import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

export default function GradientButton(props) {
  return (
    <View
        className={`rounded-full bg-slate-600 ${props.containerClass}`}
    >
        <TouchableOpacity className={`p-2 px-4  ${props.buttonClass}`}>
            <Text className="text-white font-bold">
                {props.value}
            </Text>
        </TouchableOpacity>

    </View>
  )
}