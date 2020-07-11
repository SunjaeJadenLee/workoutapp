import React, {useState,useRef,useEffect} from 'react'
import { connect } from 'react-redux'
import { View, Text, SafeAreaView,Dimensions,Image, FlatList } from 'react-native'
import screenStyle from '../../utils/styles/screenContainer'
import textStyle from '../../utils/styles/textStyle'
import Header from '../components/ScreenHeader' 
import PropTypes from 'prop-types'  

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
 

const Setting = props => {
    const { theme,navigation,route } = props; 
    
    return (
        <View style={screenStyle({ theme }).container}>
            <SafeAreaView /> 
            <Header title={'Setting'} navigation={navigation}/> 
            <Text>다크모드</Text>
            <Text>버전정보</Text>
            <Text>개발정보</Text>
            <Text>버그신고</Text>
        </View>
    )
}

const mapStateToProps = (state: any) => ({
    theme: state.main.theme
})

const mapDispatchToProps = (dispatch: any) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Setting) 