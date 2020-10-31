import React, { useState,useEffect } from 'react'
import { connect } from 'react-redux'
import { View, FlatList,Dimensions,StyleSheet,Text,Image, TouchableWithoutFeedback, TouchableOpacity, AsyncStorage } from 'react-native'
import screenStyle from '../../../utils/styles/screenContainer'
import textStyle from '../../../utils/styles/textStyle'
import {colors,darkColor} from '../../../utils/styles/themeColor'
import {faBars,faCalendar,faCog,faHome,faStream,faThLarge} from '@fortawesome/free-solid-svg-icons'
import LinearGradient from 'react-native-linear-gradient' 
import PropTypes from 'prop-types'  
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import moment from 'moment' 
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Main = props => {
    const { theme, navigation, route,day,today,setToday,selectedDate,setSelectedDate,setDaySelection,daySelection,startDatePosition } = props;
    const [daySelectionInDay,setDaySelectionInDay] = useState(daySelection[startDatePosition+day])
    const [numberOfEx,setNumberOfEx] = useState<number>(0);

    useEffect(() => {
        let dateform = selectedDate.get('year')+'-'+selectedDate.get('month')+'-'+day
        let dayListform = dateform + '_list'
        AsyncStorage.getItem(dateform).then(result=>{
           setDaySelectionInDay(result)
        })

        AsyncStorage.getItem(dayListform).then(result=>{
            if(result){
                setNumberOfEx(JSON.parse(result).length)
            } else {
                setNumberOfEx(0)
            }
        })
    })

    const getBackgroundColor = () => { 
        if (daySelectionInDay) {
            switch (daySelectionInDay) {
                case '가슴':
                    return '#F5A9CB'
                case '등':
                    return '#9CCFE7'
                case '하체':
                    return '#977FD7'
                case '어깨':
                    return '#FFFFC2'
            }
        }
    }

    return (
        <TouchableOpacity 
        style={style(theme, day,selectedDate).container}
        onPress={()=>{
            let newDate = moment({year:selectedDate.get('year'),month:selectedDate.get('month'),day:day})
            day&&setSelectedDate(newDate)
        }}>
            <View >
                <Text style={style(theme, day,selectedDate).text}>{day ? day : ''}</Text>
                <View style={{...style(theme, day,selectedDate).selection,backgroundColor:getBackgroundColor()}}>
                    <Text style={style(theme, day,selectedDate).selectionText}>{daySelectionInDay}</Text>
                </View>
                {numberOfEx != 0 && <View style={style(theme, day, selectedDate).numberOfEx}>
                    <Text style={style(theme, day, selectedDate).numberOfExText}>{numberOfEx}</Text>
                </View>}
            </View>
        </TouchableOpacity> 
    )


}

const style = (theme,day,selectedDate) => StyleSheet.create({
    container:{ 
        backgroundColor:theme == 'dark'? darkColor.background:colors.background,
        height:height/10,
        width:'14.285%',
        // borderColor:'#ccc',
        // borderWidth:1
    }, 
    text:{
        backgroundColor: (moment(new Date()).get('D') == day)&&(selectedDate.get('month')==moment(new Date()).get('month'))? colors.theme :theme == 'dark'? darkColor.background:colors.background,
        color: (moment(new Date()).get('D') == day)&&(selectedDate.get('month')==moment(new Date()).get('month'))? colors.background :theme == 'dark'? darkColor.font:colors.font,
        textAlign:'center',
        fontWeight:'700',
        fontSize:12
    },
    selection:{
        width:'100%',
        height:15
    },
    selectionText:{
        lineHeight:15,
        color:'#fff',
        textAlign:'center'
    },
    numberOfEx:{
        alignItems:'center',
        justifyContent:'center',
        
    },
    numberOfExText:{
        textAlign:'center', 
        padding:2,
        marginTop:2,
        fontSize:10,
        borderRadius:20
    }
})

const mapStateToProps = (state: any) => ({
    theme: state.main.theme
})

const mapDispatchToProps = (dispatch: any) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Main) 