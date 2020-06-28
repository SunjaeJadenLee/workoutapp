import React from 'react'
import { connect } from 'react-redux'
import { View, Text, SafeAreaView } from 'react-native'
import screenStyle from '../../utils/styles/screenContainer'
import textStyle from '../../utils/styles/textStyle'
import Header from '../components/ScreenHeader'
import PropTypes from 'prop-types'

const Main = props => {
    const { theme } = props;
    console.log(theme);
    return (
        <View style={screenStyle({ theme }).container}>
            <SafeAreaView /> 
            <Header />
        </View>
    )
}

const mapStateToProps = (state: any) => ({
    theme: state.main.theme
})

const mapDispatchToProps = (dispatch: any) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Main) 