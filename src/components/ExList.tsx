import React,{useEffect,useState} from 'react'
import { connect } from 'react-redux'
import { View, Text, SafeAreaView,StyleSheet,Dimensions,Animated, TouchableWithoutFeedback,TouchableOpacity, FlatList } from 'react-native'
import screenStyle from '../../utils/styles/screenContainer'
import textStyle from '../../utils/styles/textStyle'
import {colors,darkColor} from '../../utils/styles/themeColor'
import {faBars,faCog} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome' 
import LinearGradient from 'react-native-linear-gradient' 
import PropTypes from 'prop-types' 
import ExListItem from './ExListItem'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const ExList = props => {
    const { theme,navigation,name,selected,setSelected,tabKey } = props;
  

    return (
             <View style={style(theme).container}>
                 <FlatList 
                 style={{flexGrow:0}} 
                 data={[1,2,3,4,5,6]}
                 renderItem={(props)=><ExListItem {...props}/>}
                 />
            </View>  
    )
}

const style = (theme) => StyleSheet.create({
    container:{ 
        backgroundColor: theme == 'dark'? darkColor.background:colors.background,
        // marginHorizontal:5, 
        // width:width,
        alignItems:'center'
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