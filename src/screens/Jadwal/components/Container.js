import React, { Component, Fragment } from 'react'
import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native'


class Container extends Component {
    
    constructor(props){
        super(props)
    }

    render() { 
        const { children, isNoPadding = false, layoutStyle, scrollViewStyle, isTransparent = false } = this.props
        return ( 
            <Fragment>
                <SafeAreaView style={{ flex : 1 }}>
                    <ScrollView style={{ flex : 1 }} contentContainerStyle={[scrollViewStyle]} showsVerticalScrollIndicator={false}>
                        <View style={[{ flex : 1 }, layoutStyle]}>
                            {children}
                        </View>
                    </ScrollView> 
                </SafeAreaView>
            </Fragment>
         );
    }
}

 
export { Container }