import React, { useState,useEffect } from 'react'
import { connect } from 'react-redux'
import { View, FlatList,Dimensions,StyleSheet,Text,Image } from 'react-native'
import screenStyle from '../../../utils/styles/screenContainer'
import textStyle from '../../../utils/styles/textStyle'
import {colors,darkColor} from '../../../utils/styles/themeColor' 
import {faBars,faCog} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome' 
import PropTypes from 'prop-types'  
import VerticalBottomListItem from './VerticalBottomCategory';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height; 

const Main = props => {
    const { theme, loading, navigation, route, item, index,addExToMyList } = props; 
    return (
        <TouchableWithoutFeedback onPress={()=>addExToMyList(item)}>
            <View style={style(theme).container}>
                <Text style={style(theme).text}>{item}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const style = (theme) => StyleSheet.create({
    container:{ 
        backgroundColor: theme == 'dark'? darkColor.background:'rgb(225,225,225)', 
        height:height/15,
        width:width,
        paddingHorizontal:0.1*width,
        justifyContent:'center',
        // marginLeft:0.05*width,
        borderBottomWidth:0.5,
        borderBottomColor:'rgb(195,195,195)'
    }, 
    text:{
        fontSize:14,
        fontWeight:'500'
    }
})

const mapStateToProps = (state: any) => ({
    theme: state.main.theme
})

const mapDispatchToProps = (dispatch: any) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Main) 