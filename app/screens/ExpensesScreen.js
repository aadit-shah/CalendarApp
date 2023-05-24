import React from 'react'
import { Text, View, SafeAreaView} from 'react-native'
import { StyleSheet } from 'react-native'
export default function ExpensesScreen() {
  return (
    <SafeAreaView>
        <View
          style={{
            justifyContent: 'center',
            height: '100%',
          }}>
          <Text
            style={{
              textAlign: 'center',
            }}>
            ExpensesScreen
          </Text>
        </View>
      </SafeAreaView>
    
  )
}


