import React, { useState,useEffect,useRef, createRef } from 'react'
import { connect } from 'react-redux'
import { View, FlatList,Dimensions,StyleSheet,Text,Image, TouchableWithoutFeedback, TouchableOpacity, } from 'react-native'
import screenStyle from '../../../utils/styles/screenContainer'
import textStyle from '../../../utils/styles/textStyle'
import {colors,darkColor} from '../../../utils/styles/themeColor'
import {faBars,faCalendar,faCog,faHome,faStream,faThLarge} from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'  
import moment from 'moment'  
import Modal from 'react-native-modal'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Main = props => {
    const {theme, navigation, route, openModal, setOpenModal, selectedDate,setSelectedDate,startDatePosition,setStartDatePosition } = props;
    const [months,setMonths] = useState([])
    const [year,setYear] = useState(selectedDate.get('year'))
    const [firstAnimation,setFirstAnimation] = useState(true);
    const flatListRef = useRef();


    useEffect(()=>{ 
        let temp = []
        for(let i = -12;i<36;i++){
            let m = Math.abs(((selectedDate.get('month') + i) % 12) + 1)
            temp.push(m)
        }
        setMonths(temp) 
    }, [])

    useEffect(()=>{
        if(firstAnimation){
            setTimeout(()=>{
                if(flatListRef.current != undefined || flatListRef.current != null){
                flatListRef.current.scrollToIndex({animated:true,index:34})
                setFirstAnimation(false)
            } 
            },500)
        }
    })

    const setYearAndMonth = (month) =>{
        let newDate = moment().set({year:year,month:month - 1,D:1})
        setStartDatePosition(newDate.day())
        console.log(newDate.day()-1)
        setSelectedDate(newDate)
        setOpenModal(false)
    }


    return (
        <Modal isVisible={openModal} onBackdropPress={() => setOpenModal(false)} onDismiss={()=>{
            setFirstAnimation(true)
        }}>
            <View style={style(theme).container}>
                <View style={style(theme).yearContainer}>
                    <Text style={style(theme).yearText}>{year}</Text>
                </View>
                <View style={style(theme).monthContainer}>
                    <FlatList  
                    ref={flatListRef}
                    onScroll={(e)=>{ 
                        if(e.nativeEvent.contentOffset.x > 2500){
                            setYear(selectedDate.get('year')+1)
                        }
                        if(e.nativeEvent.contentOffset.x < 2500){
                            setYear(selectedDate.get('year'))
                        }
                        if(e.nativeEvent.contentOffset.x < 1679){
                            setYear(selectedDate.get('year')-1)
                        } 
                        
                        if(e.nativeEvent.contentOffset.x < 843){
                            setYear(selectedDate.get('year')-2)
                        } 
                    }}
                    getItemLayout={(data, index) => {
                        return {
                            length: width/6,
                            offset: (width/6) * index,
                            index: index
                        }
                    }}
                    scrollEventThrottle={0.1}
                    horizontal={true}
                    data={months}
                    renderItem={({item,index})=><TouchableOpacity onPress={()=>{
                        setYearAndMonth(item)
                    }}>
                        <Text style={{...style(theme).month,color:(selectedDate.get('year')==year)&&(selectedDate.get('month')+1==item)?colors.theme:'#000'}}>{item}</Text>
                        </TouchableOpacity>}
                     />
                
                </View>
            </View>
        </Modal>
    )


}

const style = (theme) => StyleSheet.create({
    container:{ 
        backgroundColor:theme == 'dark'? darkColor.background:colors.background,
        height:height/8,
        width: width - (0.1*width),
    }, 
    yearContainer:{
        height:height/16,
        width: width - (0.1*width),
    },
    yearText:{
        textAlign:'center',
        lineHeight:height/16,
        color:colors.theme,
        fontSize:20,
        fontWeight:'700'
    },
    monthContainer:{
        height:height/16,
        width: width - (0.1*width),
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:(0.1*width)
    },
    month:{
        width:width/6,
        textAlign:'center',
        lineHeight:height/16,
        fontSize:16,
        fontWeight:'600'
    }
})

const mapStateToProps = (state: any) => ({
    theme: state.main.theme
})

const mapDispatchToProps = (dispatch: any) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Main) 