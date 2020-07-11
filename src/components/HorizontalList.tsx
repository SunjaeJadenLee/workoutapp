import React, { useState,useEffect } from 'react'
import { connect } from 'react-redux'
import { View, FlatList,Dimensions,StyleSheet,Text,Image } from 'react-native'
import screenStyle from '../../utils/styles/screenContainer'
import textStyle from '../../utils/styles/textStyle'
import {colors,darkColor} from '../../utils/styles/themeColor'
import {faBars,faCog} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import LinearGradient from 'react-native-linear-gradient' 
import PropTypes from 'prop-types' 
import SkeletonContent from 'react-native-skeleton-content-nonexpo'
import RenderItem from './HorizontalListItem'
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const EXDATA = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const Main = props => {
    const { theme,navigation,route } = props;
    const [loading,setLoading] = useState<boolean>(false);
    
    useEffect(()=>{   
        setLoading(true);

        setTimeout(() => {
            setLoading(false)
        }, 3000);
    },[])

    return (
        <View style={style(theme).container}>
            <FlatList
                style={{ backgroundColor: '#eee' }}
            data={EXDATA}
            renderItem={props => <RenderItem {...props} route={route} navigation={navigation} loading={loading}/>}
            horizontal={true}
            />

        </View>
    )
}

const style = (theme) => StyleSheet.create({
    container:{ 
        backgroundColor: theme == 'dark'? darkColor.background:colors.background,
        height:height/6,  
    }, 
    item: {
        width:width/3,
        height:height/6, 
        // backgroundColor:'#ccc',
        marginLeft:10
    }
})

const mapStateToProps = (state: any) => ({
    theme: state.main.theme
})

const mapDispatchToProps = (dispatch: any) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Main) 