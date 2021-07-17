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

import { icons, COLORS, SIZES, FONTS } from '../constants'

const bookmark = ( { navigation  } ) => {


    function renderHeader() {

        const onPressHandler = () => {
            navigation.navigate('Home');
            //navigation.goBack();
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
                        <Text style={{ ...FONTS.h3 }}>Bookmark</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: 'center',
                        
                    }}
                >
                    <Image
                        source={icons.flaticon}
                        resizeMode="contain"
                        style={{
                            width: 20,
                            height: 20,
                           // tintColor: COLORS.rose
                        }}
                    />
                    
                </TouchableOpacity>

            </View>
        )
    }

function renderShelf () {
    return(
        <View 
            style={{
                paddingHorizontal:SIZES.padding * 2,
            }}
        >  
            <Text style={{
                paddingHorizontal: SIZES.padding * 2,
                paddingTop: 25,
                paddingBottom: 10,
                ...FONTS.h3,
            }}>
                Your favorite menu : 
            </Text>
        <View style={{
            paddingHorizontal:SIZES.padding ,
            paddingVertical: 5,
            flex:1,
            flexDirection: 'row',
            justifyContent:'center',
        }}>
           <TouchableOpacity
                style={{
                    backgroundColor: COLORS.tortilla,
                    height: 120,
                    width: '50%',
                    borderRadius: SIZES.radius1,
                    justifyContent:'center', 
                    alignItems: 'center',
                    marginRight: 5,
                }}
            >
                <Image source={icons.plus}
                    style={{
                        height: 45,
                        width: 45,
                        margin:10,
                    }}
                />
                <Text style={{ ...FONTS.h5 }}> New Album </Text>
            </TouchableOpacity>
            <TouchableOpacity
                    style={{
                        backgroundColor: COLORS.tortilla,
                        height: 120,
                        width: '50%',
                        borderRadius: SIZES.radius1,
                        justifyContent:'center', 
                        alignItems: 'center',
                    }}
            >
                <Image source={icons.cakes}
                    style={{
                        height: 45,
                        width: 45,
                        margin:10,
                    }}
                />
                <Text style={{ ...FONTS.h5 }}> Cakes </Text>
            </TouchableOpacity>
           </View>

           <View style={{
            paddingHorizontal:SIZES.padding,
            flex:1,
            flexDirection: 'row',
        }}>
           <TouchableOpacity
                style={{
                    backgroundColor: COLORS.tortilla,
                    height: 120,
                    width: '50%',
                    borderRadius: SIZES.radius1,
                    justifyContent:'center', 
                    alignItems: 'center',
                    marginRight: 5,
                }}
            >
                <Image source={icons.cookie}
                    style={{
                        height: 45,
                        width: 45,
                        margin:10,
                    }}
                />
                <Text style={{ ...FONTS.h5 }}> Cookies </Text>

            </TouchableOpacity>
           </View>

        </View>
    )
}

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderShelf()}
        </SafeAreaView>
    )


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.linen,
    }
})

export default bookmark
