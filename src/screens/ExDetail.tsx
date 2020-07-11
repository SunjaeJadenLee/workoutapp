import React, {useState,useRef,useEffect} from 'react'
import { connect } from 'react-redux'
import { View, Text, SafeAreaView,Dimensions,Image, FlatList } from 'react-native'
import screenStyle from '../../utils/styles/screenContainer'
import textStyle from '../../utils/styles/textStyle'
import Header from '../components/ScreenHeader'
import HorizontalList from '../components/HorizontalList'
import PropTypes from 'prop-types'
import Tabs from '../components/Tabs'  

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const mocklists = [1,2,3,4,5]

const MyList = props => {
    const { theme,navigation,route } = props; 
    
    return (
        <View style={screenStyle({ theme }).container}>
            <SafeAreaView /> 
            <Header title={route&&route.params&&route.params.title&&route.params.title} navigation={navigation}/> 
            
        </View>
    )
}

const mapStateToProps = (state: any) => ({
    theme: state.main.theme
})

const mapDispatchToProps = (dispatch: any) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(MyList) 