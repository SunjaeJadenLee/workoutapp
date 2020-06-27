import React from 'react'
import {connect} from 'react-redux'
import { View,Text,SafeAreaView } from 'react-native'
import screenStyle from '../../utils/styles/screenContainer'
import PropTypes from 'prop-types'

const Main = Props =>{
    return(
        <View style={screenStyle.container}> 
            <SafeAreaView />
            <Text>text</Text>
        </View>
    )
}

const mapStateToProps = (state:any) =>({
    
})

const mapDispatchToProps = (dispatch:any) =>({

})

export default connect(mapStateToProps,mapDispatchToProps)(Main) 