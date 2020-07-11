import React from 'react'
import { connect } from 'react-redux'
import { View, Text, SafeAreaView,Dimensions,Image } from 'react-native'
import screenStyle from '../../utils/styles/screenContainer'
import textStyle from '../../utils/styles/textStyle'
import Header from '../components/ScreenHeader'
import HorizontalList from '../components/horizontalList/HorizontalList'
import PropTypes from 'prop-types'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Main = props => {
    const { theme,navigation,route } = props; 
    return (
        <View style={screenStyle({ theme }).container}>
            <SafeAreaView /> 
            <Header title={'Main'} navigation={navigation} route={route}/>
            <View style={{marginVertical:40}}>
                <View style={{width:'100%',justifyContent:'center',alignItems:'center'}}>
                    <Image style={{width:width,height:height*0.38}} source={require('../../resources/images/body.png')}/>
                </View>
            </View>
            <HorizontalList route={route} navigation={navigation}/> 
        </View>
    )
}

const mapStateToProps = (state: any) => ({
    theme: state.main.theme
})

const mapDispatchToProps = (dispatch: any) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Main) 