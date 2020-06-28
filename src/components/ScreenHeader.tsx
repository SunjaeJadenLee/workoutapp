import React from 'react'
import { connect } from 'react-redux'
import { View, Text, SafeAreaView,StyleSheet,Dimensions,MaskedViewComponent } from 'react-native'
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
    const { theme } = props;
    return (
        <View style={style(theme).container}>
            <View style={style(theme).icons}>
                <FontAwesomeIcon size={20} style={style(theme).icon} icon={faBars} />
                <FontAwesomeIcon size={20} style={style(theme).icon} icon={faCog} />
            </View>
            <Text style={{ ...textStyle({ theme }).header, lineHeight: height / 18 }}>Header</Text>

        </View>
    )
}

const style = (theme) => StyleSheet.create({
    container:{
        backgroundColor: theme == 'dark'? darkColor.background:colors.background,
        height:height/18,
    },
    icons:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between'
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

export default connect(mapStateToProps, mapDispatchToProps)(Main) 