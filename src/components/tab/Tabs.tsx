import React,{useState} from 'react'
import { connect } from 'react-redux'
import { View, Text, SafeAreaView,StyleSheet,Dimensions,MaskedViewComponent, TouchableWithoutFeedback } from 'react-native'
import screenStyle from '../../../utils/styles/screenContainer'
import textStyle from '../../../utils/styles/textStyle'
import {colors,darkColor} from '../../../utils/styles/themeColor'
import {faBars,faCog} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import LinearGradient from 'react-native-linear-gradient' 
import PropTypes from 'prop-types' 
import Tab from './Tab'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Tabs = props => {
    const { theme,navigation,title,selectedTab,setSelectedTab,fListRef } = props;

    return (
        <View style={style(theme).container}>
            <Tab key={0} tabKey={0} selected={selectedTab} setSelected={setSelectedTab} name={'cheast'} fListRef={fListRef}/>
            <Tab key={1} tabKey={1} selected={selectedTab} setSelected={setSelectedTab} name={'back'} fListRef={fListRef}/>
            <Tab key={2} tabKey={2} selected={selectedTab} setSelected={setSelectedTab} name={'shoulder'} fListRef={fListRef}/>
            <Tab key={3} tabKey={3} selected={selectedTab} setSelected={setSelectedTab} name={'lower body'} fListRef={fListRef}/>
            <Tab key={4} tabKey={4} selected={selectedTab} setSelected={setSelectedTab} name={'arms'} fListRef={fListRef}/>
        </View>
    )
}

const style = (theme) => StyleSheet.create({
    container:{ 
        backgroundColor: theme == 'dark'? darkColor.background:colors.background,
        height:height/12, 
        flexDirection:'row',
        marginTop:height/36
    }, 
})

const mapStateToProps = (state: any) => ({
    theme: state.main.theme
})

const mapDispatchToProps = (dispatch: any) => ({

})

Tabs.propTypes = {
    title: PropTypes.string,
    selectedTab: PropTypes.number,
    setSelectedTab: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs) 