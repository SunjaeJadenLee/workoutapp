import React, { useState,useEffect } from 'react'
import { connect } from 'react-redux'
import { View, FlatList,Dimensions,StyleSheet,Text,Animated ,TouchableWithoutFeedback} from 'react-native'
import screenStyle from '../../../utils/styles/screenContainer'
import textStyle from '../../../utils/styles/textStyle'
import {colors,darkColor} from '../../../utils/styles/themeColor'
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import LinearGradient from 'react-native-linear-gradient' 
import PropTypes from 'prop-types'  
import VerticalBottomSublistItem from './VerticalBottomSublistItem' 
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height; 

const VerticalBottomListItem = props => {
    const { theme, navigation, item, index, sublist  } = props; 
    const [toggle,setToggle] = useState(false);
    const [animatedVal,setAnimatedVal] = useState(new Animated.Value(0));
    const toggleButton = (onoff) =>{
        console.log(sublist.length)
        setToggle(onoff);
        if (onoff) { 
            Animated.timing(animatedVal, {
                toValue: (height / 15) * sublist.length-1,
                duration: 300,
                useNativeDriver: false
            }).start();
        } else { 
            Animated.timing(animatedVal, {
                toValue: 0,
                duration: 300,
                useNativeDriver: false
            }).start(); 
        }
        
    }
    return (
        <View style={style(theme).container}>
            <TouchableWithoutFeedback onPress={()=>toggleButton(!toggle)}>
                <View style={style(theme).category}>
                    <Text style={style(theme).text}>{item}</Text>
                    <View>
                        <FontAwesomeIcon icon={faAngleDown} />
                    </View>
                </View>
            </TouchableWithoutFeedback>  
                <Animated.FlatList 
                data={sublist} 
                style={{height:animatedVal}} 
                renderItem={(props)=><VerticalBottomSublistItem {...props}/>}
                /> 
            
        </View>
    )
}

const style = (theme) => StyleSheet.create({
    container:{ 
        backgroundColor: theme == 'dark'? darkColor.background:colors.background,
        // justifyContent:'center',
        alignItems:'center',
        justifyContent:'space-between', 
    }, 
    text:{
        fontSize:16,
        fontWeight:'700'
    },
    category:{
        backgroundColor: theme == 'dark'? darkColor.background:colors.background,
        width:width-(0.1*width),
        height:height/15,
        // justifyContent:'center',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row'
    }
})

const mapStateToProps = (state: any) => ({
    theme: state.main.theme
})

const mapDispatchToProps = (dispatch: any) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(VerticalBottomListItem) 