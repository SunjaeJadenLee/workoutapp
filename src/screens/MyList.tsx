import React, {useState,useRef, useEffect} from 'react'
import { connect } from 'react-redux'
import { View, Text, SafeAreaView,Dimensions,Image, FlatList, AsyncStorage } from 'react-native'
import screenStyle from '../../utils/styles/screenContainer'
import textStyle from '../../utils/styles/textStyle'
import Header from '../components/ScreenHeader'
import HorizontalList from '../components/horizontalList/HorizontalList'
import PropTypes from 'prop-types'
import Tabs from '../components/tab/Tabs'
import AddButton from '../components/AddButton'
import ExList from '../components/exList/ExList'
import RBSheet from 'react-native-raw-bottom-sheet'
import ExData from '../../utils/workoutData.json'
import VerticalBottomList from '../components/verticalList/VerticalBottomList'
import MyListHeader from '../components/mylistHeader/MyListHeader'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

// const mocklists = [1,2,3,4,5]

const MyList = props => {
    const { theme,navigation } = props; 
    const [data,setData] = useState<string[]>([])
    const [selectedTab,setSelectedTab] = useState<number>(0);
    const [currentBottomList,setCurrentBottomList] = useState(ExData[0]);
    const lists = useRef();
    const rbsheet = useRef();

    useEffect(()=>{
        AsyncStorage.getItem('mylist').then(list =>{
            console.log(list)
            try{
                if(list == null || JSON.parse(list) == null || JSON.parse(list)  == ''){
                    setData([])
                } else { 
                    setData(JSON.parse(list))
                }
            }catch(error){
            //    alert(error)
            }
            
        })
    },[])

    const addExToMyList = (ex : string) =>{
        let temp = [...data,ex]
        AsyncStorage.setItem('mylist',JSON.stringify(temp)).then(ex=>{
            setData(temp)
        })

        rbsheet.current.close()
    }
    // useEffect(()=>{
    //     console.log(currentBottomList);
    // },[currentBottomList])

    
    //Swipe flatlist
    const onScrollBegin = (e) =>{
        
        let index: number = parseInt(e.nativeEvent.contentOffset.x / parseInt(e.nativeEvent.layoutMeasurement.width));
         setSelectedTab(index); 
         setCurrentBottomList(ExData[index]);
    }

    return (
        <View style={screenStyle({ theme }).container}>
            <SafeAreaView /> 
            <Header title={'My List'} navigation={navigation}/>
            <Tabs
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
                fListRef={lists}
            />
            {/* <MyListHeader /> */}
            <FlatList  
            style={{flexGrow:0}} 
            ref={lists}
            horizontal={true} 
            pagingEnabled={true} 
            data={data}  
            renderItem={props=><ExList data={data} />}
            onMomentumScrollEnd={(e)=>onScrollBegin(e)}
            />
            <AddButton rbsheet={rbsheet}/>
            <RBSheet 
            dragFromTopOnly
            ref={rbsheet} 
            customStyles={{container:{backgroundColor:'rgb(235,235,235)'}}}
            height={height/2}
            openDuration={300}
            closeOnDragDown={true}
            closeDuration={300}  
            >
                <VerticalBottomList currentBottomList={currentBottomList} addExToMyList={addExToMyList}/>
            </RBSheet>
        </View>
    )
}

const mapStateToProps = (state: any) => ({
    theme: state.main.theme
})

const mapDispatchToProps = (dispatch: any) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(MyList) 