import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { 
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    Animated,
    ScrollView,
    Pressable,
    TextInput
} from 'react-native'

import { icons, COLORS, SIZES, FONTS, images } from '../constants'

const search = ( { navigation  } ) => {



    function renderHeader() {

        const onPressHandler = () => {
            navigation.navigate('Home');
            // navigation.goBack();
        }

        return(

                <View style={{ flexDirection: 'row', height: 50, backgroundColor: COLORS.tortilla  }}>

                    {/* back */}
                <TouchableOpacity
                
                style={{
                    backgroundColor: COLORS.tortilla,
                    width: 35,
                    height: 35,
                    justifyContent: 'center',
                    alignItems:'center',
                    borderRadius: 10,
                    margin: 10,
            }}                >
                <Pressable
                        style={{
                        width: 50,
                        justifyContent: 'center',
                        alignItems:'center',
                    }}
                        onPress={onPressHandler}                   
                     >
                    <Image
                        source={icons.back}
                        resizeMode="contain"
                        style={{
                            width: 20,
                            height: 20,
                           // tintColor: COLORS.rose
                        }}
                    />
                </Pressable>
                </TouchableOpacity>

                {/* Restaurant Name Section */}
                <View style={{ flex:1, alignItems:'center', justifyContent:'center', marginTop: 10, marginBottom:10}}>
                    <View
                        style={{
                            height: 40,
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingHorizontal: SIZES.padding * 5,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.tortilla,

                        }}
                    >
                        <Text style={{ ...FONTS.h3 }}>Search</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: 'center',
                        
                    }}
                >

                </TouchableOpacity>

            </View>
        )
    }

    function renderSearch() {
        return (
        <View>   

            <View
                style={{
                    flexDirection: 'row',
                  //  padding: SIZES.padding * 2,
                    justifyContent: 'center',
                    paddingVertical: 20,
                }}
            >
                
                <View
                style={{
                    width: '80%',
                    backgroundColor: COLORS.white,
                    paddingHorizontal: 20,
                    paddingVertical: 5,
                  //  borderTopEndRadius: SIZES.radius,
                  //  borderBottomEndRadius: SIZES.radius,
                    borderTopLeftRadius: SIZES.radius1,
                    borderBottomLeftRadius: SIZES.radius1,
                }}                    
                >
                <TextInput
                    style={{
                        height:30,
                        width:'100%',
                        // backgroundColor: COLORS.white,
                         textAlign:'center',
                        // paddingHorizontal: SIZES.padding * 5,
                    }}
                    placeholder=" what are you looking... "
                />
                </View>

                <TouchableOpacity
                style={{
                    backgroundColor: COLORS.white,
                    justifyContent:'center',
                    paddingHorizontal: 15,
                    borderTopEndRadius: SIZES.radius1,
                    borderBottomEndRadius: SIZES.radius1,
                  //  borderTopLeftRadius: SIZES.radius,
                  //  borderBottomLeftRadius: SIZES.radius,
                    marginLeft:2,
                }}                
                >
                    {/* icone search */}
                    <Image
                    source={icons.searching}
                    resizeMode="contain"
                    style={{
                        width: 23,
                        height: 23,
                        tintColor: COLORS.gray,
                    }}
                    />
                </TouchableOpacity>

            </View>
            
            </View>
        )
    }


    function renderMenu() {
        return(
            <View style={{ flex:1,cjustifyContent:'center, ' }} >
            <View style={{ height: 2, backgroundColor: COLORS.white , marginVertical: 5,}}> </View>
                <Text
                 style={{
                    paddingHorizontal: SIZES.padding * 2,
                    fontSize: 16 ,
                    color: COLORS.gray
                }}
                > Most Popula : </Text>

               {/*  <TouchableOpacity
                    style={{
                        padding: SIZES.padding,
                        paddingBottom: SIZES.padding,
                        backgroundColor: COLORS.tortilla,
                        alignItems:'center',
                        justifyContent: 'center',
                        marginRight: SIZES.padding,
                        ...styles.shadow
                    }}
                >

                </TouchableOpacity> */}

                <ScrollView horizontal style={{ paddingHorizontal: SIZES.padding * 2, }}>
                    
                    <TouchableOpacity style={{
                        marginRight:SIZES.padding,
                        backgroundColor: COLORS.tortilla,
                        height: 150,
                        width: 150,
                        borderRadius: SIZES.radius1,
                        marginTop: 10,
                        justifyContent: 'center',
                        alignItems: 'center',

                    }}>
                        <View 
                        style={{
                            height:'80%',
                            width: '95%',
                            borderRadius: SIZES.radius1,
                            backgroundColor: COLORS.white,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 5,
                        }}
                        >
                        <Image 
                        source={icons.chocolate}
                        resizeMode="contain"
                        style={{
                            height:50,
                            width:50,
                            borderRadius: SIZES.radius1,
                        }}
                        />
                        </View>
                        <Text
                            style={{
                                backgroundColor:COLORS.tortilla,
                                width:'100%',
                                height:20,
                                borderRadius: SIZES.radius1,
                                textAlign:'center',
                                justifyContent:'center',
                                margin: 5,
                            }}
                        >
                            Chocolate
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        marginRight:SIZES.padding,
                        backgroundColor: COLORS.tortilla,
                        height: 150,
                        width: 150,
                        borderRadius: SIZES.radius1,
                        marginTop: 10,
                        justifyContent: 'center',
                        alignItems: 'center',

                    }}>
                        <View 
                        style={{
                            height:'80%',
                            width: '95%',
                            borderRadius: SIZES.radius1,
                            backgroundColor: COLORS.white,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 5,
                        }}
                        >
                        <Image 
                        source={icons.banana}
                        resizeMode="contain"
                        style={{
                            height:50,
                            width:50,
                            borderRadius: SIZES.radius1,
                        }}
                        />
                        </View>
                        <Text
                            style={{
                                backgroundColor:COLORS.tortilla,
                                width:'100%',
                                height:20,
                                borderRadius: SIZES.radius1,
                                textAlign:'center',
                                justifyContent:'center',
                                margin: 5,
                            }}
                        >
                            Banana
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        marginRight:SIZES.padding,
                        backgroundColor: COLORS.tortilla,
                        height: 150,
                        width: 150,
                        borderRadius: SIZES.radius1,
                        marginTop: 10,
                        justifyContent: 'center',
                        alignItems: 'center',

                    }}>
                        <View 
                        style={{
                            height:'80%',
                            width: '95%',
                            borderRadius: SIZES.radius1,
                            backgroundColor: COLORS.white,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 5,
                        }}
                        >
                        <Image 
                        source={icons.strawberry}
                        resizeMode="contain"
                        style={{
                            height:50,
                            width:50,
                            borderRadius: SIZES.radius1,
                        }}
                        />
                        </View>
                        <Text
                            style={{
                                backgroundColor:COLORS.tortilla,
                                width:'100%',
                                height:20,
                                borderRadius: SIZES.radius1,
                                textAlign:'center',
                                justifyContent:'center',
                                margin: 5,
                            }}
                        >
                            strawberry
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
