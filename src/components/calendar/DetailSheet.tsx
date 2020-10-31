import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { View, FlatList, Dimensions, StyleSheet, Text, Image, TouchableWithoutFeedback, AsyncStorage, TouchableOpacity, Animated } from 'react-native'
import screenStyle from '../../../utils/styles/screenContainer'
import textStyle from '../../../utils/styles/textStyle'
import { colors, darkColor } from '../../../utils/styles/themeColor'
import { faBars, faCalendar, faCog, faHome, faPlus, faStream, faThLarge } from '@fortawesome/free-solid-svg-icons'
import LinearGradient from 'react-native-linear-gradient'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import moment from 'moment'
import DetailSheetExItem from './DetailSheetExItem'
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons'
import GestureRecognizer from 'react-native-swipe-gestures';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const weekday = ['', 'Mon', 'Tue', 'Wed', 'Tur', 'Fri', 'Sat', 'Sun']

const Main = props => {
    const { startDatePosition, theme, navigation, route, selectedDate,
        setSelectedDate, daySelection, setDaySelection, rbsheet, dayExList,
        setDayExList, deleteEx, picker, tempIndex, setTempIndex } = props;
    const [tempSelection, setTempSelection] = useState<string>();
    const [tempExList, setTempExList] = useState([]);
    const [swipeAnimation, setSwipeAnimation] = useState(new Animated.Value(0))
    const [swipeHeight, setSwipeHeight] = useState(height / 3)

    useEffect(() => {
        setTempExList(dayExList)
    })

    useEffect(() => {
        console.log(tempExList)
    }, [tempExList])

    const setSelection = (input: string) => {
        try {
            let temp = daySelection
            temp[startDatePosition + selectedDate.get('D')] = input
            setDaySelection(temp)
            setSelectedDate(moment().set({ year: selectedDate.get('year'), month: selectedDate.get('month'), D: selectedDate.get('D') }))
        } catch (error) {
            console.log(error)
        }

        let dateform = selectedDate.get('year') + '-' + selectedDate.get('month') + '-' + selectedDate.get('D')
        AsyncStorage.setItem(dateform, input).then(result => {
            setTempSelection(input)
        }).catch(error => {
            alert(error)
        })
    }

    useEffect(() => {
        let dateform = selectedDate.get('year') + '-' + selectedDate.get('month') + '-' + selectedDate.get('D')
        AsyncStorage.getItem(dateform).then(result => {
            setTempSelection(result)
        })

    }, [selectedDate])

    const swipeUp = () =>{
        Animated.parallel([
            Animated.timing(swipeAnimation,{
                toValue:-height/6,
                useNativeDriver:true,
                duration:500
            })
        ]).start()
        setSwipeHeight(height / 2)

    }
    const swipeDown = () =>{ 
        Animated.parallel([
            Animated.timing(swipeAnimation,{
                toValue:0,
                useNativeDriver:true,
                duration:500
            })
        ]).start()

        setTimeout(()=>{
            setSwipeHeight(height/3)
        },500) 
    }

    return (
        <Animated.View style={{...style(theme).container,transform:[{translateY:swipeAnimation}],height:swipeHeight}}>
            <GestureRecognizer 
            onSwipeUp={()=>{
                swipeUp()
            }}
            onSwipeDown={()=>{
                swipeDown()
            }}
            >
                <View style={{ width: '100%', height: height / 24, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{...style(theme).swipeIcon}} />
                </View>
            </GestureRecognizer>
            <View style={style(theme).headerContainer}>
                <View style={style(theme).todayContainer}>
                    <Text style={style(theme).todayNumber}>{selectedDate.get('D')}</Text>
                    <Text style={style(theme).todayDay}>{weekday[selectedDate.get('isoWeekday')]}</Text>
                </View>
                <View style={style(theme).selectContainer}>
                    <TouchableOpacity onPress={() => setSelection('가슴')}>
                        <Text style={{ ...style(theme).selectText, opacity: tempSelection == '가슴' ? 1 : 0.5, color: tempSelection == '가슴' ? '#F5A9CB' : '#181818', fontSize: tempSelection == '가슴' ? 18 : 14 }}>가슴</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelection('등')}>
                        <Text style={{ ...style(theme).selectText, opacity: tempSelection == '등' ? 1 : 0.5, color: tempSelection == '등' ? '#9CCFE7' : '#181818', fontSize: tempSelection == '등' ? 18 : 14 }}>등</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelection('하체')}>
                        <Text style={{ ...style(theme).selectText, opacity: tempSelection == '하체' ? 1 : 0.5, color: tempSelection == '하체' ? '#977FD7' : '#181818', fontSize: tempSelection == '하체' ? 18 : 14 }}>하체</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelection('어깨')}>
                        <Text style={{ ...style(theme).selectText, opacity: tempSelection == '어깨' ? 1 : 0.5, color: tempSelection == '어깨' ? '#FFFFC2' : '#181818', fontSize: tempSelection == '어깨' ? 18 : 14 }}>어깨</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { rbsheet.current.open() }}>
                        <FontAwesomeIcon icon={faPlusSquare} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={style(theme).contentContainer}>
                <FlatList
                    style={{height:height,flex:1}}
                    contentContainerStyle={{ flexGrow:0,paddingBottom:60 }}
                    showsVerticalScrollIndicator={false}
                    data={tempExList}
                    renderItem={({ item, index }) => <DetailSheetExItem 
                    picker={picker} tempExList={tempExList} key={index} item={item} 
                    index={index} deleteEx={deleteEx} selectedDate={selectedDate}
                    tempIndex={tempIndex} setTempIndex={setTempIndex}
                    />}
                />
            </View>
        </Animated.View>
    )


}

const style = (theme) => StyleSheet.create({
    container: {
        backgroundColor: theme == 'dark' ? darkColor.background : colors.background
    },
    headerContainer: {
        flexDirection: 'row',
    },
    selectContainer: {
        flexDirection: 'row',
        // backgroundColor:'#ccc',
        alignItems: 'center'
    },
    selectText: {
        width: width / 6,
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '700'
    },
    todayContainer: {
        // backgroundColor:'#fff',
        width: width / 8,
        justifyContent: 'center'
    },
    todayNumber: {
        fontSize: 28,
        fontWeight: '700',
        textAlign: 'center'
    },
    todayDay: {
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center'
    },
    contentContainer: {
        flex: 1,
        height:height
    },
    swipeIcon:{
        width:30,
        height:5,
        backgroundColor:'#ccc'
    }
})

const mapStateToProps = (state: any) => ({
    theme: state.main.theme
})

const mapDispatchToProps = (dispatch: any) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Main) 