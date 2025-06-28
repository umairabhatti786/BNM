import {  StyleSheet,  } from 'react-native';
import { scale } from 'react-native-size-matters';
import { colors } from './colors';

export const AppStyles = StyleSheet.create({

    main:{
        flex:1,
        backgroundColor:colors.white,
    },
    row:{
        flexDirection:"row",
        alignItems:"center",
    },
    justifyRow:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    margins: {
		marginTop: 20,
		marginHorizontal: 20,
	},
    box: {
        borderRadius: scale(15),
        borderWidth: 1,
        borderColor: colors.black40,
      },
      screenTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 20,
        color:"#212121"
	},



})