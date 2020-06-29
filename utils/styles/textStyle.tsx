import { DefaultTransition } from "@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets"
import {StyleSheet,Dimensions} from 'react-native'
import theme, {colors, darkColor} from './themeColor'



const style = props => StyleSheet.create({
    header:{  
        // color: props.theme == 'dark'? darkColor.font :colors.font,
        color: colors.theme,
        fontSize:24,
        fontWeight:'bold'
    },
    subHeader:{
        color: colors.theme,
        fontSize:20,
        fontWeight:'bold'
    }
})

export default style