import React, { useState,useEffect } from 'react'
import { connect } from 'react-redux'
import { View, FlatList,Dimensions,StyleSheet,Text,Animated ,TouchableWithoutFeedback, TextInput} from 'react-native'
import screenStyle from '../../../utils/styles/screenContainer'
import textStyle from '../../../utils/styles/textStyle'
import {colors,darkColor} from '../../../utils/styles/themeColor'
import {faAngleDown, faSearch} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import LinearGradient from 'react-native-linear-gradient' 
import PropTypes from 'prop-types'  
import VerticalBottomSublistItem from './VerticalBottomSublistItem' 
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height; 

const VerticalBottomListItem = props => {
    const { theme, navigation,searchText,setSearchText } = props; 
  
    return (
        <View style={style(theme).container}>
            <FontAwesomeIcon icon={faSearch}/>
            <TextInput value={searchText} onChangeText={(e)=>setSearchText(e)} style={style(theme).input} placeholder={'search...'}/>
        </View>
    )
}

const style = (theme) => StyleSheet.create({
    container:{ 
        backgroundColor: theme == 'dark'? darkColor.background:colors.background,
        flexDirection:'row',
        paddingHorizontal:20
    },
    input:{
        paddingHorizontal:20
    }
})

const mapStateToProps = (state: any) => ({
    theme: state.main.theme
})

const mapDispatchToProps = (dispatch: any) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(VerticalBottomListItem) 