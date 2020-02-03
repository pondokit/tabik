import React from 'react'
import { ListItem, Left, Right } from 'native-base'
import { Title } from './Title'
import { ContainerSection } from './ContainerSection'
import Icon from 'react-native-vector-icons/Ionicons'

export const ValueSearch = ({ onPress, nama }) => {
    return(
        <ListItem button onPress={onPress} selected>
            <Left>
                <Title ismedium>{nama}</Title>
            </Left>
            <Right>
                <Icon color={'#000'} size={20} name="ios-arrow-forward" />
            </Right>
        </ListItem>
    )
}