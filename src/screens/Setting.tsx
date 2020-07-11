import React, {useState,useRef,useEffect} from 'react'
import { connect } from 'react-redux'
import { View, Text, SafeAreaView,Dimensions,Image, FlatList } from 'react-native'
import screenStyle from '../../utils/styles/screenContainer'
import textStyle from '../../utils/styles/textStyle'
import Header from '../components/ScreenHeader' 
import PropTypes from 'prop-types'  
import SettingItem from '../components/setting/SettingItem'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
 

const Setting = props => {
    const { theme,navigation,route } = props; 
    
    return (
        <View style={screenStyle({ theme }).container}>
            <SafeAreaView /> 
            <Header title={'Setting'} navigation={navigation} />
            <View style={{marginTop:40}}>
                <SettingItem text={'다크모드'} />
                <SettingItem text={'버전정보'} />
                <SettingItem text={'개발정보'} />
                <SettingItem text={'버그신고'} />
            </View> 
        </View>
    )
}

const mapStateToProps = (state: any) => ({
    theme: state.main.theme
})

const mapDispatchToProps = (dispatch: any) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Setting) 