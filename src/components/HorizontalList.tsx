import React from 'react'
import { connect } from 'react-redux'
import { View, FlatList,Dimensions,StyleSheet,Text,Image } from 'react-native'
import screenStyle from '../../utils/styles/screenContainer'
import textStyle from '../../utils/styles/textStyle'
import {colors,darkColor} from '../../utils/styles/themeColor'
import {faBars,faCog} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import LinearGradient from 'react-native-linear-gradient' 
import PropTypes from 'prop-types' 

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const EXDATA = [1,2,3,4,5,6,7,8,9]

const Main = props => {
    const { theme } = props;

    const renderItem = ({item,index}) =>{
        return(<View style={style(theme).item}>
            <View style={{height:height/18}}>
                <Text style={{fontSize:16,padding:5,fontWeight:'bold'}}>Barbbell Bench Press</Text>
            </View>
            <Image style={{width:width/3,height:height/9}} source={require('../../resources/images/barbbell_bench_press.jpg')}/>
        </View>)
    }
    return (
        <View style={style(theme).container}>
            <FlatList 
            style={{backgroundColor:'#eee'}}
            data={EXDATA}
            renderItem={renderItem}
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