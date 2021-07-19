import React from 'react'
import { 
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    TextInput
} from 'react-native'

import {icons, COLORS, SIZES, FONTS, images} from '../constants'

const search = ({navigation}) => {

    function  renderHeader() {
        return(
            <View style={{ flexDirection:'row', height: 50, backgroundColor:COLORS.daisy}}>
                <TouchableOpacity
                    style={{
                        backgroundColor: COLORS.tortilla,
                        width:35,
                        height:35,
                        justifyContent:'center',
                        alignItems:'center',
                        borderRadius:10,
                        margin:10
                    }}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Image
                        source={icons.back}
                        style={{
                            width:20,
                            height:20,
                        }}
                    />
                </TouchableOpacity>
                <View style={{
                    flex:1,
                    alignItems:'center',
                    justifyContent:'center',
                    marginVertical:10,
                }}>
                    <View 
                        style={{
                            height:40,
                            alignItems:'center',
                            justifyContent:'center',
                            paddingRight:SIZES.padding * 5,
                        }}
                    >
                        <Text style={{ ...FONTS.h3 }}>Search</Text>
                    </View>
                </View>
            </View>
        )
    }
    function  renderSearch() {
        return(
            <View
                style={{
                    flexDirection:'row',
                    justifyContent:'center',
                    alignItems:'center',
                    paddingVertical:20
                }}
            >
                <View 
                    style={{
                        width:'70%',
                        backgroundColor:COLORS.white,
                        paddingHorizontal:20,
                        paddingVertical:5,
                        borderTopLeftRadius:SIZES.radius1,
                        borderBottomLeftRadius:SIZES.radius1
                    }}
                >
                    <TextInput
                        style={{
                            height:30,
                            width:'100%',
                            textAlign:'center'
                        }}
                        placeholder=" what are you looking... "
                    />
                </View>
                <TouchableOpacity
                    style={{
                        backgroundColor:COLORS.white,
                        justifyContent:'center',
                        paddingHorizontal: 15,
                        borderTopEndRadius:SIZES.radius1,
                        borderBottomEndRadius:SIZES.radius1,
                        marginLeft:2,
                        height:40,
                    }}
                >
                    <Image
                        source={icons.search}
                        style={{
                            width:23,
                            height:23,
                            tintColor: COLORS.gray
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function  renderMenu() {
        return(
            <View style={{ flex:1, justifyContent:'center'}}>
                <View style={{height:2, backgroundColor:COLORS.white, margin:10}}></View>
                <Text
                    style={{
                        paddingHorizontal:SIZES.padding * 2,
                        paddingVertical:5,
                        fontSize:16,
                        color:COLORS.gray
                    }}
                >
                    Most Popular :
                </Text>
                <ScrollView
                    horizontal
                    style={{
                        flexDirection:'row',
                        paddingHorizontal:SIZES.padding * 2,
                    }}
                >
                    <TouchableOpacity style={{
                        marginRight:SIZES.padding,
                        backgroundColor:COLORS.tortilla,
                        height:150,
                        width:150,
                        borderRadius:10,
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                        <View
                            style={{
                                height:'70%',
                                width:'90%',
                                borderRadius:10,
                                backgroundColor:COLORS.white,
                                justifyContent:'center',
                                alignItems:'center',
                                marginTop:15
                            }}
                        >
                            <Image
                                source={icons.chocolate}
                                style={{
                                    height:50,
                                    width:50,
                                }}
                            />
                        </View>
                        <Text 
                                style={{
                                    height:40,
                                    borderRadius: SIZES.radius1,
                                    textAlign:'center',
                                    justifyContent:'center',
                                    marginVertical: 5,
                                }}
                            >
                                Chocolate
                            </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        marginRight:SIZES.padding,
                        backgroundColor:COLORS.tortilla,
                        height:150,
                        width:150,
                        borderRadius:10,
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                        <View
                            style={{
                                height:'70%',
                                width:'90%',
                                borderRadius:10,
                                backgroundColor:COLORS.white,
                                justifyContent:'center',
                                alignItems:'center',
                                marginTop:15
                            }}
                        >
                            <Image
                                source={icons.banana}
                                style={{
                                    height:50,
                                    width:50,
                                }}
                            />
                        </View>
                        <Text 
                                style={{
                                    height:40,
                                    borderRadius: SIZES.radius1,
                                    textAlign:'center',
                                    justifyContent:'center',
                                    marginVertical: 5,
                                }}
                            >
                                Banana
                            </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        marginRight:SIZES.padding,
                        backgroundColor:COLORS.tortilla,
                        height:150,
                        width:150,
                        borderRadius:10,
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                        <View
                            style={{
                                height:'70%',
                                width:'90%',
                                borderRadius:10,
                                backgroundColor:COLORS.white,
                                justifyContent:'center',
                                alignItems:'center',
                                marginTop:15
                            }}
                        >
                            <Image
                                source={icons.strawberry}
                                style={{
                                    height:50,
                                    width:50,
                                }}
                            />
                        </View>
                        <Text 
                                style={{
                                    height:40,
                                    borderRadius: SIZES.radius1,
                                    textAlign:'center',
                                    justifyContent:'center',
                                    marginVertical: 5,
                                }}
                            >
                                Strawberry
                            </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
        {renderHeader()}
        {renderSearch()}
        {renderMenu()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: COLORS.linen,
    }

})

export default search


