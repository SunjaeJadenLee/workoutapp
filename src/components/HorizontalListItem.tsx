import React, { useState } from 'react'
import { connect } from 'react-redux'
import { View, FlatList, Dimensions, StyleSheet, Text, Image } from 'react-native'
import screenStyle from '../../utils/styles/screenContainer'
import textStyle from '../../utils/styles/textStyle'
import { colors, darkColor } from '../../utils/styles/themeColor'
import LinearGradient from 'react-native-linear-gradient'
import PropTypes from 'prop-types'
import SkeletonContent from 'react-native-skeleton-content-nonexpo'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const EXDATA = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const theme = 'light';

const renderItem = (props) => {
    const {theme,loading} = props;
    

    return (
        <View style={style(theme).item}>
           {loading?<SkeletonContent
                containerStyle={{ width: width / 3, height: height / 3 }}
                isLoading={true}
                layout={[
                    { key: 'header', width: width / 3, height: height / 24, marginBottom: 10 },
                    { key: 'image', width: width / 3, height: height / 9 },
                ]}
            />:
            <><View style={{height:height/18}}>
            <Text style={{fontSize:16,padding:5,fontWeight:'bold'}}>Barbbell Bench Press</Text>
        </View>
        <Image style={{width:width/3,height:height/9}} source={require('../../resources/images/barbbell_bench_press.jpg')}/></>
        }
        </View>)
}
const style = (theme) => StyleSheet.create({
    container: {
        backgroundColor: theme == 'dark' ? darkColor.background : colors.background,
        height: height / 6,
    },
    item: {
        width: width / 3,
        height: height / 6,
        // backgroundColor:'#ccc',
        marginLeft: 10
    }
})

const mapStateToProps = (state: any) => ({
    theme: state.main.theme
})

const mapDispatchToProps = (dispatch: any) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(renderItem) 