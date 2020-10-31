import React, { useState } from 'react'
import { connect } from 'react-redux'
import { View, FlatList, Dimensions, StyleSheet, Text, Image } from 'react-native'
import screenStyle from '../../../utils/styles/screenContainer'
import textStyle from '../../../utils/styles/textStyle'
import { colors, darkColor } from '../../../utils/styles/themeColor'
import LinearGradient from 'react-native-linear-gradient'
import PropTypes from 'prop-types'
import SkeletonContent from 'react-native-skeleton-content-nonexpo'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const EXDATA = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const theme = 'light';

const renderItem = (props) => {
    const {theme,loading,navigation,route,item,imageUrl} = props;

    const imagePath = '../../../public/images'+ imageUrl
    return (
        <TouchableWithoutFeedback onPress={()=>navigation.jumpTo('Detail',{title:item})}>
            <View style={style(theme).item}>
                {loading ? <SkeletonContent
                    containerStyle={{ width: width / 3, height: height / 3 }}
                    isLoading={true}
                    layout={[
                        { key: 'header', width: width / 3, height: height / 24, marginBottom: 10 },
                        { key: 'image', width: width / 3, height: height / 9 },
                    ]}
                /> :
                    <>
                        <Image source={require('../../../public/images/barbbell_bench_press.jpg')} style={{ width: width / 3, height: height / 9,marginBottom:20 }} />
                        <View style={{ height: height / 18, width: width / 3 }}>
                            <Text numberOfLines={2} style={{ fontSize: 16, fontWeight: 'bold', width: width / 3, textAlign: 'center' }}>{item}</Text>
                        </View>
                    </>
                }
            </View>
        </TouchableWithoutFeedback>)
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