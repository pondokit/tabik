import React from 'react'
import { Text } from 'react-native'

export const Title = ({ 
    style,
    children,
    isheadline = false,
    isheadline2 = false,
    isheadline3 = false,
    isnormalBold = false,
    isnormalReguler = false,
    ismedium = false,
    isdescription = false,
    iscenter = false,
    issmall = false,
    issmallBold = false,
    whiteColor = false,
    isBold = false
 }) => {
    const { headline, headline2, headline3, normalBold, normalReguler, medium, description, small, blackColor, center, smallBold, whiteStyle } = styles
    return(
        <Text
            style={[
                isheadline ? headline :
                isheadline2 ? headline2 :
                isheadline3 ? headline3 :
                isnormalBold ? normalBold :
                ismedium ? medium :
                isdescription ? description :
                issmall ? small :
                issmallBold ? smallBold :
                isnormalReguler,
                iscenter && center,
                whiteColor ? whiteStyle : blackColor,
                isBold ? { fontWeight : 'bold' } : null,
                style
            ]}>
                {children}
            </Text>
    )
}

const styles = {
    headline : {
        fontSize : 34,
        fontWeight: 'bold',
    },
    headline2 : {
        fontSize : 24,
        fontWeight : '600'
    },
    headline3 : {
        fontSize : 18,
        fontWeight : '600',
    },
    normalBold : {
      fontSize : 16,
      fontWeight : '600',  
    },
    normalReguler : {
        fontSize : 16
    },
    medium : {
        fontSize : 14,
        fontWeight : '400'
    },
    description : {
        fontSize : 14,
    },
    small : {
       fontSize : 11 
    },
    blackColor : {
        color : '#000'
    },
    center : {
        alignSelf: 'center',
        textAlign : 'center'
    },
    smallBold : {
        fontSize : 11,
        fontWeight : 'bold'
    },
    whiteStyle : {
        color : '#fff'
    }

}