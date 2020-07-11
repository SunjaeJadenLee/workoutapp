import React from 'react'
import { connect } from 'react-redux'
import { View, Text, SafeAreaView,StyleSheet,Dimensions,MaskedViewComponent, TouchableWithoutFeedback } from 'react-native'
import screenStyle from '../../utils/styles/screenContainer'
import textStyle from '../../utils/styles/textStyle'
import {colors,darkColor} from '../../utils/styles/themeColor'
import {faBars,faCog} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import LinearGradient from 'react-native-linear-gradient' 
import PropTypes from 'prop-types' 

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Main = props => {
    const { theme,navigation,title } = props;
    return (
        <View style={style(theme).container}>
            <View style={style(theme).icons}>
                <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
                    <View>
                        <FontAwesomeIcon size={height / 36} style={style(theme).icon} icon={faBars} />
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.jumpTo('Setting')}>
                    <View>
                        <FontAwesomeIcon size={height / 36} style={style(theme).icon} icon={faCog} />
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View style={{ height: height / 18 }}>
                <Text style={{ ...textStyle({ theme }).header, lineHeight: height / 18, }}>{title}</Text>
            </View>
        </View>
    )
}

const style = (theme) => StyleSheet.create({
    container:{ 
        backgroundColor: theme == 'dark'? darkColor.background:colors.background,
        height:height/12, 
        
    },
    icons:{
        width:'100%',
        height:height/30,
        flexDirection:'row',
        justifyContent:'space-between', 
    },
    icon:{
        color:theme == 'dark'? darkColor.font:colors.font
    }
})

const mapStateToProps = (state: any) => ({
    theme: state.main.theme
})

const mapDispatchToProps = (dispatch: any) => ({

})

Main.propTypes = {
    title: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(Main) 