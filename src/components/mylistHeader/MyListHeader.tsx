import React, { useState,useEffect } from 'react'
import { connect } from 'react-redux'
import { View, FlatList,Dimensions,StyleSheet,Text,Image } from 'react-native'
import screenStyle from '../../../utils/styles/screenContainer'
import textStyle from '../../../utils/styles/textStyle'
import {colors,darkColor} from '../../../utils/styles/themeColor'
import {faBars,faCog} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import LinearGradient from 'react-native-linear-gradient' 
import PropTypes from 'prop-types' 
import SkeletonContent from 'react-native-skeleton-content-nonexpo'
import RenderItem from './HorizontalListItem'
import ExData from '../../../utils/workoutData.json'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Main = props => {
    const { theme,navigation,route,selectedPart } = props;
    const [loading,setLoading] = useState<boolean>(false);
    
    return (
        <View style={style(theme).container}>
            <Text style={style(theme).col1}>운동</Text>
            <Text style={style(theme).col2}>세트</Text>
            <Text style={style(theme).col3}>회수</Text>
        </View>
    )
}

const style = (theme) => StyleSheet.create({
    container:{ 
        backgroundColor: theme == 'dark'? darkColor.background:colors.background,
        height:height/24,
        width:width,
        flexDirection:'row'  
    }, 
    col1:{
        width:width/2,
        color: colors.theme,
        fontSize: 16,
        fontWeight:'700'
    },
    col2:{
        width:width/4,
        color: colors.theme,
        fontSize: 16,
        fontWeight:'700'
    },
    col3:{
        width:width/4,
        color: colors.theme,
        fontSize: 16,
        fontWeight:'700'
    }
})

const mapStateToProps = (state: any) => ({
    theme: state.main.theme
})

const mapDispatchToProps = (dispatch: any) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Main) 