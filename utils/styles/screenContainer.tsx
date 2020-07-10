import { DefaultTransition } from "@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets"
import {StyleSheet,Dimensions} from 'react-native'
import theme, {darkColor,colors} from './themeColor'

const vw = Dimensions.get('screen').width

const style = props => StyleSheet.create({
    container:{
        width:vw,
        height:Dimensions.get('screen').height,
        backgroundColor: props.theme == 'dark'? darkColor.background :colors.background, 
        paddingHorizontal: 0.05 * vw
    }
})

export default style