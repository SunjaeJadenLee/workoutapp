import React,{useEffect,useState} from 'react'
import { connect } from 'react-redux'
import { View, Text, SafeAreaView,StyleSheet,Dimensions,Animated, TouchableWithoutFeedback,TouchableOpacity } from 'react-native'
import screenStyle from '../../../utils/styles/screenContainer'
import textStyle from '../../../utils/styles/textStyle'
import {colors,darkColor} from '../../../utils/styles/themeColor'
import {faBars,faCog} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome' 
import LinearGradient from 'react-native-linear-gradient' 
import PropTypes from 'prop-types' 

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Tab = props => {
    const { theme,navigation, } = props;
    
    return ( 
            <View style={style(theme).container}>
            </View>  
    )
}

const style = (theme) => StyleSheet.create({
    container:{ 
        backgroundColor: theme == 'dark'? darkColor.background:colors.background,
    },  
})

const mapStateToProps = (state: any) => ({
    theme: state.main.theme
})

const mapDispatchToProps = (dispatch: any) => ({

})

Tab.propTypes = {
    name: PropTypes.string,
    selected: PropTypes.number, 
}

export default connect(mapStateToProps, mapDispatchToProps)(Tab) 