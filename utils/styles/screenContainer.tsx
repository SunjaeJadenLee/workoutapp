import { DefaultTransition } from "@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets"
import {StyleSheet,Dimensions} from 'react-native'

const vw = Dimensions.get('screen').width

const style = StyleSheet.create({
    container:{
        width:vw,
        height:Dimensions.get('screen').height,
        backgroundColor:'rgb(225,225,225)',
        paddingHorizontal: 0.05 * vw
    }
})

export default style