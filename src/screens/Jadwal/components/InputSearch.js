import React from 'react'
import { ContainerSection } from './ContainerSection'
import { Item, Icon, Input } from 'native-base'

export const InputSearch = ({
    onSubmitEditing,
    onChangeText,
    value
}) => {
    const { styleRounded, inputStyle } = styles
    return(
        <ContainerSection>
            <Item rounded style={styleRounded}>
                <Icon name="ios-search" />
                <Input 
                    onChangeText={onChangeText}
                    value={value}
                    onSubmitEditing={onSubmitEditing}
                    style={inputStyle} 
                    placeholder="Cari kota..." />
            </Item>
        </ContainerSection>
    )
}

const styles = {
    styleRounded : {
        paddingHorizontal : 15,
        backgroundColor : '#f4f4f4'
    },
    inputStyle : {
        fontSize : 14,
        color : '#000'
    }
}