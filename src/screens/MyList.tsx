import React from 'react'
import { connect } from 'react-redux'
import { View, Text, SafeAreaView,Dimensions,Image } from 'react-native'
import screenStyle from '../../utils/styles/screenContainer'
import textStyle from '../../utils/styles/textStyle'
import Header from '../components/ScreenHeader'
import HorizontalList from '../components/HorizontalList'
import PropTypes from 'prop-types'
import Tabs from '../components/Tabs'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const MyList = props => {
    const { theme,navigation } = props; 
    return (
        <View style={screenStyle({ theme }).container}>
            <SafeAreaView /> 
            <Header title={'My List'} navigation={navigation}/>
            <Tabs />
        </View>
    )
}

const mapStateToProps = (state: any) => ({
    theme: state.main.theme
})

const mapDispatchToProps = (dispatch: any) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(MyList) 