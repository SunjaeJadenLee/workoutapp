import React, { useState,useEffect } from 'react'
import { connect } from 'react-redux'
import { View, FlatList,Dimensions,StyleSheet,Text,Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import screenStyle from '../../../utils/styles/screenContainer'
import textStyle from '../../../utils/styles/textStyle'
import {colors,darkColor} from '../../../utils/styles/themeColor'
import {faBars,faCalendar,faCog,faHome,faStream,faThLarge} from '@fortawesome/free-solid-svg-icons'
import LinearGradient from 'react-native-linear-gradient' 
import PropTypes from 'prop-types'  
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Main = props => {
    const { theme,navigation,route,index,state,label,isFocused } = props;
    

    const returnIcon = (label: string) => {
        if(label == 'Main'){
            return (<FontAwesomeIcon size={20} color={isFocused? colors.theme: theme == 'dark'? colors.background : darkColor.background} icon={faThLarge}/>)
        } else if(label == 'MyList'){
            return (<FontAwesomeIcon size={20} color={isFocused? colors.theme: theme == 'dark'? colors.background : darkColor.background} icon={faStream}/>)
        } else if(label == 'Setting'){
            return (<FontAwesomeIcon size={20} color={isFocused? colors.theme: theme == 'dark'? colors.background : darkColor.background} icon={faCog}/>)
        } else if(label == 'Calendar'){
            return (<FontAwesomeIcon size={20} color={isFocused? colors.theme: theme == 'dark'? colors.background : darkColor.background} icon={faCalendar}/>)
        }
    }

    useEffect(()=>{
    },[])
    return (
        <TouchableOpacity onPress={() => {
            const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
            }
        }}>
            <View style={style(theme,isFocused).container}>
                {returnIcon(label)}
                {/* <Text>{label}</Text> */}
            </View>
        </TouchableOpacity>
    )
}

const style = (theme,isFocused) => StyleSheet.create({
    container:{ 
        backgroundColor:theme == 'dark'? darkColor.background:'#fff',
        height:height/24,
        width:width/4,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:10,
    }, 
})

const mapStateToProps = (state: any) => ({
    theme: state.main.theme
})

const mapDispatchToProps = (dispatch: any) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Main) 