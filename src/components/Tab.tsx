import React,{useEffect,useState} from 'react'
import { connect } from 'react-redux'
import { View, Text, SafeAreaView,StyleSheet,Dimensions,Animated, TouchableWithoutFeedback,TouchableOpacity } from 'react-native'
import screenStyle from '../../utils/styles/screenContainer'
import textStyle from '../../utils/styles/textStyle'
import {colors,darkColor} from '../../utils/styles/themeColor'
import {faBars,faCog} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome' 
import LinearGradient from 'react-native-linear-gradient' 
import PropTypes from 'prop-types' 

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Tab = props => {
    const { theme,navigation,name,selected,setSelected,tabKey,fListRef } = props;
    const [animatedVal,setAnimatedVal] = useState(new Animated.Value(0));
    const interporate = animatedVal.interpolate({
        inputRange:[-100,0,50,100],
        outputRange:[-60,0,30,100], 
    })
    useEffect(() => {
        if (selected == tabKey) {
            Animated.timing(animatedVal, {
                toValue: 100,
                duration: 1000,
                useNativeDriver: false
            }).start()
        } else {
            Animated.timing(animatedVal, {
                toValue: 0,
                duration: 500,
                useNativeDriver: false
            }).start()
        }
    }, [selected])

    return (
        <TouchableOpacity onPress={()=>{
            setSelected(tabKey);
            fListRef.current.scrollToIndex({index:tabKey,animated:true})
            console.log(tabKey)
            }}>
            <View style={style(theme).container}>
                <Text style={{ ...style(theme).text, color: tabKey === selected ? 'rgb(0,0,0)' : 'rgb(190,190,190)' }}>{name}</Text>
                <Animated.View style={{backgroundColor:colors.theme,height:5,width:interporate}}/>
            </View> 
        </TouchableOpacity>
    )
}

const style = (theme) => StyleSheet.create({
    container:{ 
        backgroundColor: theme == 'dark'? darkColor.background:colors.background,
        height:height/12,  
        marginHorizontal:5,
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
    name: PropTypes.string,
    selected: PropTypes.number,
    tabKey: PropTypes.number,
    setSelected: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Tab) 