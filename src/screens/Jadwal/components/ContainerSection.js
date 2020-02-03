import React from 'react';
import { View} from 'react-native'

const ContainerSection = ({ children, style, isRow = false}) => {
    return(
        <View style={[styles.containerStyle, style, isRow && {flexDirection : 'row'}]}>
            {children}
        </View>
    )
}

const styles = {
    containerStyle : {
        marginVertical: 15,
        marginHorizontal: 15,
    }
}

export { ContainerSection }