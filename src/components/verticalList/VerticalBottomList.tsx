import React, { useState,useEffect } from 'react'
import { connect } from 'react-redux'
import { View, FlatList,Dimensions,StyleSheet,Text, AsyncStorage } from 'react-native'
import screenStyle from '../../../utils/styles/screenContainer'
import textStyle from '../../../utils/styles/textStyle'
import {colors,darkColor} from '../../../utils/styles/themeColor'
import {faBars,faCog} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import LinearGradient from 'react-native-linear-gradient' 
import PropTypes from 'prop-types'  
import VerticalBottomListItem from './VerticalBottomCategory';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height; 

const Main = props => {
    const {theme,loading,navigation,route,selected,currentBottomList,addExToMyList} = props; 

    return (
        <View style={style(theme).container}>
            <FlatList   
                showsVerticalScrollIndicator={false}  
                contentInsetAdjustmentBehavior={'automatic'}
                data={Object.keys(currentBottomList).slice(0,Object.keys(currentBottomList).length-1)}
                renderItem={(props)=><VerticalBottomListItem sublist={Object.values(currentBottomList)[props.index]} addExToMyList={addExToMyList} {...props}/>}
            />
        </View>
    )
}

const style = (theme) => StyleSheet.create({
    container:{ 
        backgroundColor: theme == 'dark'? darkColor.background:colors.background, 
    }, 
})

const mapStateToProps = (state: any) => ({
    theme: state.main.theme
})

const mapDispatchToProps = (dispatch: any) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Main) 