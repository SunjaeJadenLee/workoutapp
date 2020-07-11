import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { View, Text, SafeAreaView, StyleSheet, Dimensions, Animated, TouchableWithoutFeedback, TouchableOpacity, FlatList } from 'react-native'
import screenStyle from '../../utils/styles/screenContainer'
import textStyle from '../../utils/styles/textStyle'
import { colors, darkColor } from '../../utils/styles/themeColor'
import { faEquals } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import LinearGradient from 'react-native-linear-gradient'
import PropTypes from 'prop-types'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const ExListItem = (props) => {
    const { theme, navigation, item, index, drag, isActive } = props;
    return (
        <View style={{...style(theme).container,opacity:isActive?0.4:1}}>
            <Text style={style(theme).text}>Bench Barbbell Press</Text>
            <TouchableWithoutFeedback style={{height:height/1}} onLongPress={drag}>
                <View>
                    <FontAwesomeIcon icon={faEquals} />
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

const style = (theme) => StyleSheet.create({
    container: {
        backgroundColor: theme == 'dark' ? darkColor.background : colors.background,
        // marginHorizontal:5, 
        flexDirection: 'row',
        height: height / 18,
        width: width - (0.1 * width),
        justifyContent: 'space-between',
        alignItems: 'center', 
    },
    text: {
        lineHeight: height / 18,
        fontWeight: 'bold'
    }
})

const mapStateToProps = (state: any) => ({
    theme: state.main.theme
})

const mapDispatchToProps = (dispatch: any) => ({

})

ExListItem.propTypes = {
    name: PropTypes.string,
    selected: PropTypes.number,
    tabKey: PropTypes.number,
    setSelected: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(ExListItem) 