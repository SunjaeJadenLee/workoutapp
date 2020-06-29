import React from 'react'
import { connect } from 'react-redux'
import { View, Text, SafeAreaView } from 'react-native'
import screenStyle from '../../utils/styles/screenContainer'
import textStyle from '../../utils/styles/textStyle'
import Header from '../components/ScreenHeader'
import HorizontalList from '../components/HorizontalList'
import PropTypes from 'prop-types'

const Main = props => {
    const { theme } = props; 
    return (
        <View style={screenStyle({ theme }).container}>
            <SafeAreaView /> 
            <Header />
            <HorizontalList /> 
        </View>
    )
}

const mapStateToProps = (state: any) => ({
    theme: state.main.theme
})

const mapDispatchToProps = (dispatch: any) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Main) 