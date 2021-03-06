import React,{useEffect,useState} from 'react'
import { connect } from 'react-redux'
import { View, Text, SafeAreaView,StyleSheet,Dimensions,Animated, TouchableWithoutFeedback,TouchableOpacity, FlatList } from 'react-native'
import screenStyle from '../../../utils/styles/screenContainer'
import textStyle from '../../../utils/styles/textStyle'
import {colors,darkColor} from '../../../utils/styles/themeColor'
import {faBars,faCog} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome' 
import LinearGradient from 'react-native-linear-gradient' 
import PropTypes from 'prop-types' 
import DraggerbleFlatList from 'react-native-draggable-flatlist'
import ExListItem from './ExListItem'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const ExList = props => {
    const { theme,navigation,name,selected,setSelected,tabKey,data } = props;
  

    return (
             <View style={style(theme).container}> 
                 <DraggerbleFlatList 
                 activationDistance={5}
                 showsVerticalScrollIndicator={false}
                 style={{flexGrow:0}}  
                 data={data}
                 renderItem={(props)=><ExListItem {...props}/>}
                 keyExtractor={(item, index) => `draggable-item-${item.key}`}
                 />
            </View>  
    )
}

const style = (theme) => StyleSheet.create({
    container:{ 
        backgroundColor: theme == 'dark'? darkColor.background:colors.background, 
        // marginHorizontal:5, 
        // width:width, 
        alignItems:'center', 
        height:height/3,  
        overflow:'scroll',
        width:width-(0.1*width)
    },  
})

const mapStateToProps = (state: any) => ({
    theme: state.main.theme
})

const mapDispatchToProps = (dispatch: any) => ({

})

ExList.propTypes = {
    name: PropTypes.string,
    selected: PropTypes.number,
    tabKey: PropTypes.number,
    setSelected: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(ExList) 