import React, { useEffect, useState, useRef, createRef } from 'react'
import { connect } from 'react-redux'
import { View, Text, SafeAreaView, Dimensions, Image, AsyncStorage } from 'react-native'
import screenStyle from '../../utils/styles/screenContainer'
import textStyle from '../../utils/styles/textStyle'
import Header from '../components/ScreenHeader'
import HorizontalList from '../components/horizontalList/HorizontalList'
import PropTypes from 'prop-types'
import Calendar from '../components/calendar/Calendar'
import Day from '../components/calendar/Day'
import moment from 'moment'
import DetailSheet from '../components/calendar/DetailSheet'
import CalendarModal from '../components/calendar/CalendarModal'
import RBSheet from 'react-native-raw-bottom-sheet'
import VerticalBottomList from '../components/verticalList/VerticalBottomList'
import ExData from '../../utils/workoutData.json'
import Exercise from '../model/Exercise'
import SearchInput from '../components/verticalList/SearchInput'
import { Picker } from 'react-native-wheel-pick'
import colors from '../../utils/styles/themeColor'
import { setCount, setCountClosed } from '../../utils/actions/MainAction'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Main = props => {
    const { theme, navigation, route, count, setCount, setCountClosed } = props;
    const [numOfDays, setNumOfDays] = useState([])
    const [today, setToday] = useState(moment(new Date()))
    const [selectedDate, setSelectedDate] = useState<moment.Moment>(today)
    const [startDatePosition, setStartDatePosition] = useState<number>(today.set({ D: 1 }).day())
    const [openModal, setOpenModal] = useState(false);
    const [daySelection, setDaySelection] = useState<string[]>(Array((startDatePosition + today.daysInMonth())).fill(''))
    const [currentBottomList, setCurrentBottomList] = useState(ExData[0]);
    const [dayExList, setDayExList] = useState([]);
    const [exData, setExData] = useState(ExData);
    const [searchText, setSearchText] = useState('');
    const [countSheetClosed, setCountSheetClosed] = useState(true);
    const [tempIndex,setTempIndex] = useState<number>(-1)

    const rbsheet = useRef();
    const picker = useRef();

    const addExToMyList = (ex: string) => {
        let datelistform = selectedDate.get('year') + '-' + selectedDate.get('month') + '-' + selectedDate.get('D') + '_list'
        AsyncStorage.getItem(datelistform).then(result => {
            if (result) {
                let list = JSON.parse(result)
                console.log(list)
                let newExer = new Exercise(ex, 0, 0, 0, false)
                list.push(newExer)
                AsyncStorage.setItem(datelistform, JSON.stringify(list)).then(result2 => {
                    setDayExList(list)
                })
            } else {
                let exer = new Exercise(ex, 0, 0, 0, false)
                let list = [exer]
                AsyncStorage.setItem(datelistform, JSON.stringify(list)).then(result2 => {
                    setDayExList(list)
                })
            }

            setSelectedDate(moment().set({ year: selectedDate.get('year'), month: selectedDate.get('month'), D: selectedDate.get('D') }))
        })
        rbsheet.current.close()
    }

    const deleteEx = (ind: number) => {
        let datelistform = selectedDate.get('year') + '-' + selectedDate.get('month') + '-' + selectedDate.get('D') + '_list'

        let list = dayExList.filter((value, index) => index != ind)
        AsyncStorage.setItem(datelistform, JSON.stringify(list)).then(result => {
            setDayExList(list)
            setSelectedDate(moment().set({ year: selectedDate.get('year'), month: selectedDate.get('month'), D: selectedDate.get('D') }))
        })
    }

    // const setExCount = (type,index) =>{
    //     if(type == 'set'){
    //         let datelistform = selectedDate.get('year')+'-'+selectedDate.get('month')+'-'+selectedDate.get('D')+'_list'

    //         let list = dayExList
    //         list[index].set = count

    //         AsyncStorage.setItem(datelistform,JSON.stringify(list)).then(result=>{
    //             setDayExList(list)
    //             setSelectedDate(moment().set({year:selectedDate.get('year'),month:selectedDate.get('month'),D:selectedDate.get('D')}))
    //         })
    //     } else {

    //     }
    // }

    useEffect(() => {

    }, [searchText])

    useEffect(() => {
        setNumOfDays([...Array(startDatePosition), ...Array(today.daysInMonth()).keys()].map(i => i + 1))
    }, [])

    useEffect(() => {
        setNumOfDays([...Array(startDatePosition), ...Array(selectedDate.daysInMonth()).keys()].map(i => i + 1))

        let datelistform = selectedDate.get('year') + '-' + selectedDate.get('month') + '-' + selectedDate.get('D') + '_list'
        AsyncStorage.getItem(datelistform).then(result => {
            if (result) {
                setDayExList(JSON.parse(result))
            } else {
                setDayExList([])
            }
        })
    }, [selectedDate])



    return (
        <View style={screenStyle({ theme }).container}>
            <SafeAreaView />
            <Header title={'Calendar'} navigation={navigation} route={route} calendar={true} openModal={openModal} setOpenModal={setOpenModal} />
            <Calendar daySelection={daySelection} setDaySelection={setDaySelection} startDatePosition={startDatePosition} numOfDays={numOfDays} setToday={setToday} today={today} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            <DetailSheet rbsheet={rbsheet} daySelection={daySelection} setDaySelection={setDaySelection}
                startDatePosition={startDatePosition} selectedDate={selectedDate} setSelectedDate={setSelectedDate}
                dayExList={dayExList} setDayExList={setDayExList} deleteEx={deleteEx} picker={picker}
                setCount={setCount}
                tempIndex={tempIndex} setTempIndex={setTempIndex}
            />
            <CalendarModal openModal={openModal} setOpenModal={setOpenModal} selectedDate={selectedDate} setSelectedDate={setSelectedDate} startDatePosition={startDatePosition} setStartDatePosition={setStartDatePosition} />
            <RBSheet
                dragFromTopOnly
                ref={rbsheet}
                customStyles={{ container: { backgroundColor: 'rgb(235,235,235)' } }}
                height={height / 2}
                openDuration={300}
                closeOnDragDown={true}
                closeDuration={300}
            >
                <SearchInput searchText={searchText} setSearchText={setSearchText} />
                <VerticalBottomList currentBottomList={currentBottomList} addExToMyList={addExToMyList} />
            </RBSheet>
            <RBSheet
                dragFromTopOnly
                ref={picker}
                customStyles={{ container: { backgroundColor: 'rgb(235,235,235)' } }}
                height={height / 4}
                openDuration={300}
                closeOnDragDown={true}
                closeDuration={300}
                onOpen={() => setCountClosed(false)}
                onClose={() => {
                    setCountClosed(true)
                    setTempIndex(-1)
                    setCount(0)
                }}
            >
                <Picker
                    style={{ backgroundColor: colors.background, width: width, height: height / 4 }}
                    selectedValue={0}
                    pickerData={[...Array(100).keys()]}
                    onValueChange={value => { setCount(value) }}
                    itemSpace={30} // this only support in android
                />
            </RBSheet>
        </View>
    )
}

const mapStateToProps = (state: any) => ({
    theme: state.main.theme,
    count: state.main.count,
    countClosed: state.main.countClosed
})

const mapDispatchToProps = (dispatch: any) => ({
    setCount: (count) => dispatch(setCount(count)),
    setCountClosed: (closed) => dispatch(setCountClosed(closed))
})

export default connect(mapStateToProps, mapDispatchToProps)(Main) 