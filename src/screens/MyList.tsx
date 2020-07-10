import React, {useState,useRef} from 'react'
import { connect } from 'react-redux'
import { View, Text, SafeAreaView,Dimensions,Image, FlatList } from 'react-native'
import screenStyle from '../../utils/styles/screenContainer'
import textStyle from '../../utils/styles/textStyle'
import Header from '../components/ScreenHeader'
import HorizontalList from '../components/HorizontalList'
import PropTypes from 'prop-types'
import Tabs from '../components/Tabs'
import AddButton from '../components/AddButton'
import ExList from '../components/ExList'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const mocklists = [1,2,3,4,5]

const MyList = props => {
    const { theme,navigation } = props; 
    const [selectedTab,setSelectedTab] = useState<number>(0);
    const lists = useRef();
    const onScrollBegin = (e) =>{
        
        let index = parseInt(e.nativeEvent.contentOffset.x / parseInt(e.nativeEvent.layoutMeasurement.width));
         setSelectedTab(index); 
    }

    return (
        <View style={screenStyle({ theme }).container}>
            <SafeAreaView /> 
            <Header title={'My List'} navigation={navigation}/>
            <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} fListRef={lists}/>
            <FlatList  
            style={{flexGrow:0}} 
            ref={lists}
            horizontal={true} 
            pagingEnabled={true} 
            data={mocklists}  
            renderItem={props=><ExList />}
            onMomentumScrollEnd={(e)=>onScrollBegin(e)}
            />
            <AddButton />
        </View>
    )
}

const mapStateToProps = (state: any) => ({
    theme: state.main.theme
})

const mapDispatchToProps = (dispatch: any) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(MyList) 