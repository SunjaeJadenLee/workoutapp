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

const AddButton = props => {
    const { theme,navigation,name,selected,setSelected,tabKey } = props;
    const [animatedVal,setAnimatedVal] = useState(new Animated.Value(0));
     

    return (
        <TouchableOpacity>
            <LinearGradient start={{x:0,y:0}} end={{x:1,y:0}} colors={['#FF76AA',colors.theme]} style={style(theme).container}>
                <Text style={style(theme).text}>add your exercise</Text>
            </LinearGradient> 
        </TouchableOpacity>
    )
}

const style = (theme) => StyleSheet.create({
    container:{ 
        backgroundColor: theme == 'dark'? darkColor.background:colors.background,
        height:height/24,   
        width:width/3,
        borderRadius:5,
        marginLeft:'auto',
        marginRight:'auto'
    },  
    text:{
        lineHeight:height/24,
        textAlign:'center',
        color:'#fff'
    }
})

const mapStateToProps = (state: any) => ({
    theme: state.main.theme
})

const mapDispatchToProps = (dispatch: any) => ({

})

AddButton.propTypes = {
    name: PropTypes.string,
    selected: PropTypes.number,
    tabKey: PropTypes.number,
    setSelected: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(AddButton) 