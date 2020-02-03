import React from 'react'
import { StatusBar } from 'react-native'
import { View, Spinner } from 'native-base'

export const Loading = () => {
    return (
        <View style={{ flex : 1, justifyContent: 'center', alignItems : 'center' }}>
            <Spinner color={'green'} size={'small'} />
        </View>
    )
}