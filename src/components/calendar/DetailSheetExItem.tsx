import React, { useState,useEffect } from 'react'
import { connect } from 'react-redux'
import { View, FlatList,Dimensions,StyleSheet,Text,Image, TouchableWithoutFeedback, AsyncStorage, TouchableOpacity } from 'react-native'
import screenStyle from '../../../utils/styles/screenContainer'
import textStyle from '../../../utils/styles/textStyle'
import {colors,darkColor} from '../../../utils/styles/themeColor'
import {faBars,faCalendar,faCheck,faCog,faHome,faMinus,faPlus,faStream,faThLarge} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMinusSquare } from '@fortawesome/free-regular-svg-icons'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Main = props => {
    const { startDatePosition,theme, navigation, route,item,index,deleteEx,selectedDate,tempExList,picker,
            countClosed,tempIndex,setTempIndex } = props;
    const { name, set, count,check } = item
    const [isChecked,setIsChecked] = useState<boolean>(item.check)
    const [countType,setCountType] = useState('')


    useEffect(()=>{
        item.check = isChecked
        
        console.log(item)

        let datelistform = selectedDate.get('year')+'-'+selectedDate.get('month')+'-'+selectedDate.get('D')+'_list'
        
        AsyncStorage.setItem(datelistform,JSON.stringify(tempExList))

    },[isChecked])

    useEffect(()=>{
        console.log(props.count)
    },[props.count])

    useEffect(()=>{ 
        if (countClosed && index == tempIndex) {
            if(countType == 'set'){
                tempExList[index].set = props.count
            } 
            else if(countType == 'count'){
                tempExList[index].count = props.count
            }

            let datelistform = selectedDate.get('year') + '-' + selectedDate.get('month') + '-' + selectedDate.get('D') + '_list'

            AsyncStorage.setItem(datelistform, JSON.stringify(tempExList))
        }
    },[countClosed])

    return (
        <View style={style(theme).container}>
            <View style={style(theme).contentContainer}>
                <Image style={style(theme).image} source={{}} />
                <Text style={style(theme).name}>{name}</Text>
                <TouchableWithoutFeedback onPress={()=>{
                    picker.current.open()
                    setTempIndex(index)
                    setCountType('set')
                }}>
                    <Text style={style(theme).set}>{set}</Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=>{
                    picker.current.open()
                    setTempIndex(index)
                    setCountType('count')
                    }}>
                    <Text style={style(theme).count}>{count}</Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => deleteEx(index)}>
                    <View style={style(theme).delete}>
                        <FontAwesomeIcon icon={faMinusSquare} />
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=>setIsChecked(!isChecked)}>
                    <View style={style(theme).check}>
                        <FontAwesomeIcon color={isChecked?'rgb(129,235,154)':'#ccd'} icon={faCheck} />
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )


}

const style = (theme) => StyleSheet.create({
    container: { 
        backgroundColor:theme == 'dark'? darkColor.background:colors.background,
        width:'100%',
        height:height/15,
        justifyContent:'center'
    },
    contentContainer:{
        width:'100%',
        flexDirection:'row'
    },
    image:{
        width: width / 8
    },
    name:{
        width: width / 3,
        fontSize:16,
        fontWeight:'600'
    },
    set:{
       width: width / 8,
       fontSize:16,
       fontWeight:'500'
    },
    count:{
        width: width / 8,
        fontSize:16,
        fontWeight:'500'
    },
    delete:{
        width: width / 16
    },
    check:{
        width: width / 16,
        marginLeft: width / 16
    }
})

const mapStateToProps = (state: any) => ({
    theme: state.main.theme,
    count: state.main.count,
    countClosed: state.main.countClosed    
})

const mapDispatchToProps = (dispatch: any) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Main) 