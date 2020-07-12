import React,{useEffect,useState} from 'react'
import { connect } from 'react-redux'
import { View, Text, SafeAreaView,StyleSheet,Dimensions,Animated, TouchableWithoutFeedback,TouchableOpacity } from 'react-native'
import screenStyle from '../../../utils/styles/screenContainer'
import textStyle from '../../../utils/styles/textStyle'
import {colors,darkColor} from '../../../utils/styles/themeColor' 
import LinearGradient from 'react-native-linear-gradient' 
import PropTypes from 'prop-types' 

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Tab = props => {
    const { theme,navigation,text } = props;
    const [toggle,setToggle] = useState<boolean>(false);
    const [animatedVal,setAnimatedVal] = useState(new Animated.Value(0));
    
    const toggleButton = (onoff) =>{
        setToggle(onoff);
        if(onoff){
            Animated.timing(animatedVal,{
                toValue:width/12-3,
                duration:300,
                useNativeDriver:true
            }).start();
        } else {
            Animated.timing(animatedVal,{
                toValue:0,
                duration:300,
                useNativeDriver:true
            }).start();
        }
    }

    return (
        <TouchableWithoutFeedback onPress={()=>toggleButton(!toggle)}>
            <View style={{...style(theme).container,opacity:toggle?1:0.5}}>
                <Animated.View style={{...style(theme).circle,transform:[{translateX:animatedVal}]}}>

                </Animated.View>
            </View>
        </TouchableWithoutFeedback> 
    )
}

const style = (theme) => StyleSheet.create({
    container:{ 
        // backgroundColor: theme == 'dark'? darkColor.background:colors.background,
        width:width/6,
        height:height/24,
        backgroundColor:colors.theme,
        borderRadius:height/48,
        borderWidth:2,
        borderColor:colors.theme
    },
    circle:{
        width:(height/24)-4,
        height:(height/24)-4,
        backgroundColor: theme == 'dark'? darkColor.background:colors.background,
        borderRadius:height/48
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