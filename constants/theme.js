import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const COLORS = {
    //background
    linen:"#FFEFD5",

    //button
    tortilla:"#DEB887",
    rose:"#Ca413F",

    //color
    white:"#ffffff",
    black:"#000000",
    prink:'#f99',
    blue:'#189',
    yellow:"#F1CD7A",
    l_yellow: "#F5d858",
    gray: "#4e4e4e",

    daisy:"#FAF0E6",
    transparent: "transparent",
}

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 30,
    radius1: 15,
    radius2: 50,
    padding: 10,
    padding2: 12,

    // font sizes
    largeTitle: 36,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};

export const FONTS = {
    largeTitle: {  fontSize: SIZES.largeTitle, lineHeight: 55 },
    h1: { fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontSize: SIZES.body1, lineHeight: 36 },
    body2: {  fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontSize: SIZES.body5, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;