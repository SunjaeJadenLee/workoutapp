import React,{useEffect,useState} from 'react'
import { connect } from 'react-redux'
import { View, Text, SafeAreaView,StyleSheet,Dimensions,Animated, TouchableWithoutFeedback,TouchableOpacity } from 'react-native'
import screenStyle from '../../../utils/styles/screenContainer'
import textStyle from '../../../utils/styles/textStyle'
import {colors,darkColor} from '../../../utils/styles/themeColor'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome' 
import LinearGradient from 'react-native-linear-gradient' 
import PropTypes from 'prop-types' 
import ToggleButton from './ToggleButton'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Tab = props => {
    const { theme,navigation,text } = props;
    
    const displayItem = (text) =>{
        switch(text){
            case '다크모드':
                return(<ToggleButton />)
            case '버전정보':
                return(<Text style={{fontSize:14,fontWeight:'bold'}}>v1.0.1</Text>)
            default:
                return(<View>
                    <FontAwesomeIcon icon={faAngleRight}/>
                </View>)

        }
    }

    return ( 
            <View style={style(theme).container}>
                <Text style={style(theme).text}>{text}</Text>
                {displayItem(text)}
            </View>  
    )
}

const style = (theme) => StyleSheet.create({
    container:{ 
        backgroundColor: theme == 'dark'? darkColor.background:colors.background,
        marginHorizontal:20,
        height:height/6,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },  
    text:{
        fontSize:16,
        fontWeight:'bold'
    }
})

const mapStateToProps = (state: any) => ({
    theme: state.main.theme
})

const mapDispatchToProps = (dispatch: any) => ({

})

Tab.propTypes = {
    text: PropTypes.string, 
}

export default connect(mapStateToProps, mapDispatchToProps)(Tab) 