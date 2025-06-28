import {RFValue} from "react-native-responsive-fontsize";
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const colors = {
    primary: '#0A987F',
    secondary: '#808080',
    black: '#0A0A0A',
    white: '#FFF',
    transparent: 'rgba(0,0,0,0)',
    disabled: 'rgba(0,0,0,0.15)',
}

export const fontSizes = {
    fontXSmall: RFValue(8),
    fontSmall: RFValue(10),
    fontSmallPlus: RFValue(11.5),
    fontMedium: RFValue(12.5),
    fontMidMedium: RFValue(14),
    fontMediumPlus: RFValue(15.5),
    fontLarge: RFValue(16),
    fontXLarge: RFValue(18),
    fontXXLarge: RFValue(20),
    fontXXXLarge: RFValue(24),
    fontXXXXLarge: RFValue(27),
    fontBigger: RFValue(30)
}

export const fontFamilies = {
    FONT_EXTRA_BOLD: 'Poppins-ExtraBold',
    FONT_BOLD: 'Poppins-Bold',
    FONT_SEMI_BOLD: 'Poppins-SemiBold',
    FONT_MEDIUM: 'Poppins-Medium',
    FONT_REGULAR: 'Poppins-Regular',
    FONT_LIGHT: 'Poppins-Light',
    FONT_EXTRA_LIGHT: 'Poppins-ExtraLight',
    FONT_THIN: 'Poppins-Thin',

}

export const basicStyles = {
    mainWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    miniFlexWrapper: {
        flex: 1
    },
    mediumFlexWrapper: {
        flex: 2
    },
    commonWrapper: {
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export const dimensions = {
    fullWidth: width,
    fullHeight: height,

    widthLevel1: width * 95 / 100,
    widthLevel2: width * 90 / 100,
    widthLevel3: width * 85 / 100,
    widthLevel4: width * 80 / 100,
    widthLevel5: width * 75 / 100,
    widthLevel6: width * 70 / 100,
    widthLevel7: width * 65 / 100,
    widthLevel8: width * 60 / 100,
    widthLevel9: width * 55 / 100,
    widthLevel10: width * 50 / 100,
    widthLevel11: width * 45 / 100,
    widthLevel12: width * 40 / 100,
    widthLevel13: width * 38 / 100,
    widthLevel14: width * 30 / 100,
    widthLevel15: width * 26 / 100,
    widthLevel16: width * 23 / 100,
    widthLevel17: width * 20 / 100,

    heightLevel1: height * 2 / 100,
    heightLevel2: height * 3 / 100,
    heightLevel3: height * 5 / 100,
    heightLevel4: height * 7 / 100,
    heightLevel5: height * 8 / 100,
    heightLevel6: height * 10 / 100,
    heightLevel7: height * 12 / 100,
    heightLevel8: height * 15 / 100,
    heightLevel9: height * 17 / 100,
    heightLevel10: height * 20 / 100,
    heightLevel11: height * 22 / 100,
    heightLevel12: height * 26 / 100,
    heightLevel13: height * 30 / 100,

    paddingLevel1: width * 2 / 100,
    paddingLevel2: width * 3.5 / 100,
    paddingLevel3: width * 5 / 100,
    paddingLevel4: width * 7 / 100,
    paddingLevel5: width * 8 / 100,
    paddingLevel6: width * 10 / 100,
    paddingLevel7: width * 12 / 100,
    paddingLevel8: width * 15 / 100,
    paddingLevel9: width * 17 / 100,
    paddingLevel10: width * 20 / 100,


    paddingLevelc1: width * 3.5 / 100,
}

export const imageSizes = {
    smallIcons: {
        width: height * 2.5 / 100,
        height: height * 2.5 / 100,
    },
    smallPlusIcon: {
        width: height * 3.5 / 100,
        height: height * 3.5 / 100,
    },
    mediumImage: {
        width: height * 10 / 100,
        height: height * 10 / 100,
    },
    largeImage: {
        width: height * 60 / 100,
        height: height * 40 / 100,
    },
    contentImage: {
        width: height * 40 / 100,
        height: height * 30 / 100,
    },
    contentImageIOS: {
        width: height * 35 / 100,
        height: height * 25 / 100,
    },
    packImage: {
        width: height * 30 / 100,
        height: height * 20 / 100,
    }
}

export const getShadowsV1 = {
    elevation: 10,
    zIndex: 10,
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.25,
}

export const getShadowsV2 = {
    elevation: 1,
    zIndex: 10,
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.25,
}
