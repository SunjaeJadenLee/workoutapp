import React, { useState,useEffect } from 'react'
import { connect } from 'react-redux'
import { View, FlatList,Dimensions,StyleSheet,Text,Image, TouchableOpacity } from 'react-native'
import screenStyle from '../../../utils/styles/screenContainer'
import textStyle from '../../../utils/styles/textStyle'
import {colors,darkColor} from '../../../utils/styles/themeColor'
import {faBars,faCog} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import LinearGradient from 'react-native-linear-gradient' 
import PropTypes from 'prop-types' 
import SkeletonContent from 'react-native-skeleton-content-nonexpo'
import BottomTab from './BottomTab'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Main = props => {
    const { theme,navigation,route,selectedPart,state,descriptors } = props;
    const {routeNames,routes} = state;

    useEffect(()=>{ 
    },[])
    return (
            <View style={style(theme).container}>
                {state.routes.map((route : any, index : number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <BottomTab
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
            isFocused={isFocused}
            label={label}
            navigation={navigation}
            route={route}
            index={index}
          >
          </BottomTab>
        );
      })}
            </View> 
    )
}

const style = (theme) => StyleSheet.create({
    container:{ 
        backgroundColor: theme == 'dark'? darkColor.background:'#fff',
        height:height/24,
        width:width,
        flexDirection:'row'  
    }, 
})

const mapStateToProps = (state: any) => ({
    theme: state.main.theme
})

const mapDispatchToProps = (dispatch: any) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Main) 