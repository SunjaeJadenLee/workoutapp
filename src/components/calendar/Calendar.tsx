import React, { useState,useEffect } from 'react'
import { connect } from 'react-redux'
import { View, FlatList,Dimensions,StyleSheet,Text,Image, TouchableWithoutFeedback } from 'react-native'
import screenStyle from '../../../utils/styles/screenContainer'
import textStyle from '../../../utils/styles/textStyle'
import {colors,darkColor} from '../../../utils/styles/themeColor'
import {faBars,faCalendar,faCog,faHome,faStream,faThLarge} from '@fortawesome/free-solid-svg-icons'
import LinearGradient from 'react-native-linear-gradient' 
import PropTypes from 'prop-types'  
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Day from './Day'
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Main = props => {
    const { theme, navigation, route,numOfDays,setToday,today,selectedDate,setSelectedDate,startDatePosition,daySelection,setDaySelection } = props;
    
    return (
        <View style={style(theme).container}>
            <View style={style(theme).header}>
                {['일', '월', '화', '수', '목', '금', '토'].map((value: string, index: number) => <View style={style(theme).headerCol}>
                    <Text style={style(theme).headerColText}>{value}</Text>
                </View>)}
            </View>
            <View style={style(theme).dayContainer}>
            {numOfDays.map((value:number,index:number)=><Day startDatePosition={startDatePosition} daySelection={daySelection} setDaySelection={setDaySelection} day={value} selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>)}
            </View>
        </View>
    )
}

const style = (theme) => StyleSheet.create({
    container:{ 
        backgroundColor:theme == 'dark'? darkColor.background:colors.background,
        height:height/2,
        width:'100%',
        // flexWrap:'wrap'
    }, 
    dayContainer:{
        width:'100%',
        flexDirection:'row',
        // justifyContent:'center',
        flexWrap:'wrap',
        // backgroundColor:'#fff'
    },
    header: {
        width:'100%',
        height: height/ 24,
        flexDirection:'row',
    },
    headerCol:{
        width:'14.285%',
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',
    },
    headerColText:{
        fontWeight:'700'
    }
})

const mapStateToProps = (state: any) => ({
    theme: state.main.theme
})

const mapDispatchToProps = (dispatch: any) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Main) 