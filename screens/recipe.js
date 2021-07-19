import React from 'react'
import { 
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    Animated,
    ScrollView
} from 'react-native'

import { isIphoneX } from 'react-native-iphone-x-helper'

import { icons, COLORS, SIZES, FONTS } from '../constants'

const recipe = ({ route, navigation }) => {



    const [restaurant, setRestaurant] = React.useState(null);

    React.useEffect(() => {
        let { item } = route.params;

        setRestaurant(item)
    })

    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', height: 50 , }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        justifyContent: 'center',
                        backgroundColor: COLORS.tortilla,
                        width: 35,
                        height: 35,
                        justifyContent: 'center',
                        alignItems:'center',
                        borderRadius: 10,
                        margin:10,
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={icons.back}
                        resizeMode="contain"
                        style={{
                            width: 20,
                            height: 20,
                        }}
                    />
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
                        <Text style={{ ...FONTS.h3 }}>{restaurant?.name}</Text>
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
                        source={icons.star}
                        resizeMode="contain"
                        style={{
                            width: 20,
                            height: 20,
                            tintColor:COLORS.l_yellow,
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderFoodInfo() {
        return (
            <View >
                {
                    restaurant?.menu.map((item, index) => (
                        <View
                            key={'menu-${index}'}
                            style={{ alignItems: 'center' }}
                        >
                            <View style={{ height: SIZES.height * 0.4 ,}}>
                                {/* food image */}
                                <Image 
                                    source={item.photo}
                                    resizeMode="cover"
                                    style={{
                                        width: SIZES.width,
                                        height: '100%'
                                    }}
                                />
                            </View>

                        </View>
                    ))
                }
            </View>
        )
    }

    function renderPreparation() {
        return (
            <ScrollView>                
            {
                    restaurant?.menu.map((item, index) => (
                        <View
                            key={'menu-${index}'}
                            style={{ alignItems: 'center' }}
                        >                            
                            {/* Ingredients */}
                            <View
                                style={{
                                    width: SIZES.width,
                                    alignItems: 'center',
                                    paddingHorizontal: SIZES.padding * 2,
                                }}
                            >                                 
                                <Text style={{ textAlign:'center',...FONTS.body3,marginTop: 25 }}>{item.detail}</Text>

                                <Text style={{ marginVertical: 20, textAlign: 'center',  ...FONTS.h1}}>Ingredients</Text>
                                <Text style={{ textAlign: 'center',  ...FONTS.body3 }}>{item.ingredient}</Text>
                            </View>

                            <View
                                style={{
                                    width: SIZES.width,
                                    alignItems: 'center',
                                    paddingHorizontal: SIZES.padding * 2,
                                    height:'auto',
                                    marginVertical: 20,

                                }}
                            >
                                <Text style={{  textAlign: 'center',  ...FONTS.h1}}>Preparation</Text>
                                <Text style={{ marginHorizontal: '5%', textAlign: 'auto',  ...FONTS.body3 }}>{item.description}</Text>
                            </View>

                        </View>
                    ))
                }
            </ScrollView>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderFoodInfo()}
            {renderPreparation()}
        </SafeAreaView>
    )
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.linen,
    }
})

export default recipe;

