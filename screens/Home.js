import React from 'react'
import { SafeAreaView, 
         View, 
         Text, 
         Image, 
         StyleSheet, 
         TouchableOpacity, 
         FlatList} from 'react-native'

import { COLORS, FONTS, icons, images, SIZES } from "../constants"

const Home = ({navigation}) => {

    const categoryData = [
        {
            id: 1,
            name: "All",
            icon: icons.bakery,
        },
        {
            id: 2,
            name: "Cake",
            icon: icons.cake,
        },
        {
            id: 3,
            name: "Brownies",
            icon: icons.brownie,
        },
        {
            id: 4,
            name: "Cookies",
            icon: icons.cookies,
        },
        {
            id: 5,
            name: "Cupcakes",
            icon: icons.cupcake,
        },
        {
            id: 6,
            name: "Donut",
            icon: icons.donut,
        },
        {
            id: 7,
            name: "Roll Cake",
            icon: icons.roll,
        },
    ]

        // price rating
        const affordable = 1
        const fairPrice = 2
        const expensive = 3

        const restaurantData = [
            {
                id: 1,
                name: "Banana Cake",
                categories: [1,2],
                priceRating: affordable,
                photo: images.banana_cake,
                duration: "ເຄັກກ້ວຍຫອມ",
                details:"",

                menu: [
                    {
                        menuId: 1,
                        name: "Banana cake",
                        photo: images.ba_cake,
                        detail: "",
                        icon: icons.star,
                        ingredient:['ແປ້ງສາລີອະເນກປະສົງ - 200 ກຣາມ'+'\n'+
                                    'ເກືອ - 1/4 ບ່ວງຊາ'+'\n'+
                                    'ໄຂ່ໄກ່ - 2 ໜ່ວຍ'+'\n'+
                                    'ນ້ໍາຕານ - 150 ກຣາມ'+'\n'+
                                    'ນົມສົດ - 125 ມິນລີລິດ'+'\n'+
                                    'ກ້ວຍຫອມ - 200 ກຣາມ'+'\n'+
                                    "ເນີຍຈືດ - 80 ກຣາມ"
                                ],
                        description:[ "ວິທີເຮັດ :"+'\n'+
                                      "1 ຕີໄຂ່ໄກ່ກັບນໍ້າຕານໃຫ້ເຂົ້າກັນຈົນຟູປະມານ 3ນາທີ ຈາກນັ້ນໃສ່ເນີຍ ນົມສົດ ກ້ວຍຫອມບົດລົງໄປ"+'\n'+
                                      "2 ຮ່ອນແປ້ງ ແລະ ໃສ່ເກືອລົງໄປ ປະສົມເຂົ້າກັນຈົນເປັນເນື້ອນຽນ",+'\n'+
                                      "3 ເທໃສ່ຖາດ ຫຼື ພິມທີ່ຕ້ອງການ"+'\n'+
                                      "4 ນໍາໄປອົບທີ່ອຸນຫະພູມ180ອົງສາ 20ນາທີ"+'\n'+
                                      "5 ເມື່ອສຸກແລ້ວນໍາອອກມາຈາກເຕົາພັກໃຫ້ເຢັນ ແລ້ວຕັດເປັນສ່ວນທີ່ຕ້ອງການ"
                    ]
                    },
                ]

            },
            {
                id: 2,
                name: "Taiwan Cake",
                categories: [1,2],
                priceRating: fairPrice,
                photo: images.taiwan_cake,
                duration: "ເຄັກໄຂ່ໄຕ້ຫວັນ",
                details:"",

                menu: [
                    {
                        menuId: 1,
                        name: "Taiwan Castella Cake",
                        photo: images.tai_cake,
                        detail: "",
                        icon: icons.star,
                        ingredient:['ແປ້ງເຄັກ - 70 ກຣາມ'+'\n'+
                                    'ນໍ້າມັນສາລີອຸ່ນ - 70 ກຣາມ'+'\n'+
                                    'ນົມສົດ - 70 ກຣາມ'+'\n'+
                                    'ນໍ້າຕານ - 80 ກຣາມ'+'\n'+
                                    ' ໄຂ່ໄກ່ - 6 ໜ່ວຍ'+'\n'+
                                    'ເກືອ - 1/4 ບ່ວງຊາ'+'\n'+
                                    'ກິ່ນວະນິລາ - 1/2 ບ່ວງຊາ'
                                ],
                        description:[ "ວິທີເຮັດ :"+'\n'+
                                      "1 ຮ່ອນແປ້ງ ແລະ ເກືອເຂົ້າດ້ວຍກັນ ເທນໍ້າມັນສາລີອຸ່ນລົງໄປ ແລ້ວຕີໃຫ້ເຂົ້າກັນ"+'\n'+
                                      "2 ໃສ່ນົມສົດ ກິ່ນວະນິລາ ແລະ ໄ່ຂ່ແດງລົງໄປຕີໃຫ້ເຂົ້າກັນ ແລ້ວພັກໄວ້",+'\n'+
                                      "3 ຕີໄຂ່ຂາວຈົນຟູເປັນຟອງ ແລ້ວຄ່ອຍໆໃສ່ນໍ້າຕານລົງໄປເທື່ອລະໜ້ອຍຈົນຕັ້ງເປັນຍອດ"+'\n'+
                                      "4 ນໍາເອົາໄຂ່ຂາວທີ່ຕີໄວ້ມາປະສົມເຂົ້າກັບແປ້ງທີພັກໄວ້ ຈົນເປັນເນື້ອດຽວກັນ"+'\n'+
                                      "5 ເທໃສ່ພິມທີ່ກຽມໄວ້"+'\n'+
                                      "6 ນໍາເອົາໄປອົບທີ່ອຸນຫະພູມທີ່ 150 -160 ອົງສາ ເປັນເວລາ 70ນາທີ ແລ້ວແຕ່ເຕົາອົບ"+'\n'+
                                      "7 ເມື່ອສຸກແລ້ວນໍາອອກມາຈາກເຕົາພັກໃຫ້ເຢັນ ແລ້ວຕັດເປັນສ່ວນທີ່ຕ້ອງການ"
                    ]
                    },
                ]

            },
            {
                id: 3,
                name: "Cocoa Brownie",
                categories: [1,3],
                priceRating: expensive,
                photo: images.choco_brownie,
                duration: "Cocoa Brownie with Chocolate Chips",
                details:"ໂກໂກ້ບາວນີ້ໂຮຍໜ້າດ້ວຍຊັອກໂກ້ແລັດຊິບ ເຮັດງ່າຍດ້ວຍວັດຖຸດິບພຽງ 6 ຢ່າງ",

                menu: [
                    {
                        menuId: 1,
                        name: "Cocoa Brownie with Chocolate Chips",
                        photo: images.chip_brownie,
                        detail: "ໂກໂກ້ບາວນີ້ໂຮຍໜ້າດ້ວຍຊັອກໂກ້ແລັດຊິບ ເຮັດງ່າຍດ້ວຍວັດຖຸດິບພຽງ 6 ຢ່າງ",
                        icon: icons.star,
                        ingredient:['ເນີຍເຄັມ - 120 ກຣາມ'+'\n'+
                                    'ນໍ້າຕານ - 240 ກຣາມ'+'\n'+
                                    'ໄຂ່ໄກ່ - 2 ໜ່ວຍ'+'\n'+
                                    'ແປ້ງສາລີ - 90 ກຣາມ'+'\n'+
                                    'ຜົງໂກໂກ້ - 60 ກຣາມ'+'\n'+
                                    'ຊັອກໂກແລັດຊິບ'
                                ],
                        description:[ "ວິທີເຮັດ :"+'\n'+
                                      "1 ນໍາເນີຍໄປລະລາຍ ແລະ ເອົານໍ້າຕານມາປະສົມເຂົ້າກັນ"+'\n'+
                                      "2 ໃສ່ໄຂ່ໄກ່ ຄົນໃຫ້ເຂົ້າກັນໃຫ້ມີລັກສະນະຂົ້ນຂື້ນ",+'\n'+
                                      "3 ຮ່ອນແປ້ງສາລີ ແລະ ຜົງໂກໂກ້ໃສ່ ແລ້ວປະສົມເຂົ້າກັນ"+'\n'+
                                      "4 ເທໃສ່ຖາດ ຫຼື ພິມທີ່ຕ້ອງການ"+'\n'+
                                      "5 ຕົກແຕ່ງໜ້າດ້ວຍຊັອກໂກແລັດຊິບ"+'\n'+
                                      "6 ນໍາເຂົ້າໄປອົບໃນອຸນຫະພູມທີ່ 170 ອົງສາ ປະມານ25ນາທີ"+'\n'+
                                      "7ເມື່ອສຸກແລ້ວນໍາອອກມາຈາກເຕົາພັກໃຫ້ເຢັນ ແລ້ວຕັດເປັນສ່ວນຈາມຂະໜາດທີ່ຕ້ອງການ"
                    ]
                    },
                ]

            },
            {
                id: 4,
                name: "Donut",
                categories: [1,6],
                priceRating: expensive,
                photo: images.donut2,
                duration: "ໂດນັດ",
                details:"",

                menu: [
                    {
                        menuId: 1,
                        name: "Donut",
                        photo: images.donut1,
                        detail: "ໂກໂກ້ບາວນີ້ໂຮຍໜ້າດ້ວຍຊັອກໂກ້ແລັດຊິບ ເຮັດງ່າຍດ້ວຍວັດຖຸດິບພຽງ 6 ຢ່າງ",
                        icon: icons.star,
                        ingredient:['ແປ້ງເຄັກ - 150 ກຣາມ'+'\n'+
                                    'ໄຂ່ໄກ່ - 1 ໜ່ວຍ'+'\n'+
                                    'ເນີຍເຄັມລະລາຍ - 20 ກຣາມ'+'\n'+
                                    'ນົມສົດ - 4 ບ່ວງໂຕະ'+'\n'+
                                    'ນໍ້າໝາກນາວ - 1 ບ່ວງໂຕະ'+'\n'+
                                    'ນໍ້າຕານ - 50 ກຣາມ'
                                ],
                        description:[ "ວິທີເຮັດ :"+'\n'+
                                      "1 ຮ່ອນແປ້ງ"+'\n'+
                                      "2 ປະສົມໄຂ່ໄກ່ ເນີຍ ນົມ ນໍ້າໝາກນາວ ແລະ ນໍ້າຕານໃຫ້ເຂົ້າກັນ ແລ້ວນໍາໄປໃສ່ແປ້ງທີ່ຮ່ອນໄວ້",+'\n'+
                                      "3 ນວດສ່ວນປະສົມໃຫ້ເຂົ້າກັນປະມານ 10- 15 ນາທີ"+'\n'+
                                      "4 ພັກແປ້ງໄວ້ 1 ຊົ່ວໂມງ"+'\n'+
                                      "5 ນໍາແປ້ງທີ່ພັກໄວ້ມານວດອີກໜ້ອຍໜື່ງ ແລ້ວປັ້ນເປັຮຮູບແບບທີ່ຕ້ອງການ"+'\n'+
                                      "6 ນໍາມາທອດໃນນໍ້າມັນ"+'\n'+
                                      "7 ນໍາມາຄຸກກັບນໍ້າຕານ ແຕ່ຖ້າບໍ່ມັກກໍບໍ່ຈໍາເປັນຄຸກ"
                    ]
                    },
                ]

            },
            {
                id: 5,
                name: "Cookies",
                categories: [1,4],
                priceRating: expensive,
                photo: images.cookies,
                duration: "",
                details:"",

                menu: [
                    {
                        menuId: 1,
                        name: "Cocoa Brownie with Chocolate Chips",
                        photo: images.brownies,
                        detail: "",
                        icon: icons.star,
                        ingredient:['ເນີຍເຄັມ - 120 ກຣາມ'+'\n'+
                                    'ນໍ້າຕານ - 240 ກຣາມ'+'\n'+
                                    'ໄຂ່ໄກ່ - 2 ໜ່ວຍ'+'\n'+
                                    'ແປ້ງສາລີ - 90 ກຣາມ'+'\n'+
                                    'ຜົງໂກໂກ້ - 60 ກຣາມ'+'\n'+
                                    'ຊັອກໂກແລັດຊິບ'
                                ],
                        description:[ "ວິທີເຮັດ :"+'\n'+
                                      "1 ນໍາເນີຍໄປລະລາຍ ແລະ ເອົານໍ້າຕານມາປະສົມເຂົ້າກັນ"+'\n'+
                                      "2 ໃສ່ໄຂ່ໄກ່ ຄົນໃຫ້ເຂົ້າກັນໃຫ້ມີລັກສະນະຂົ້ນຂື້ນ",+'\n'+
                                      "3 ຮ່ອນແປ້ງສາລີ ແລະ ຜົງໂກໂກ້ໃສ່ ແລ້ວປະສົມເຂົ້າກັນ"+'\n'+
                                      "4 ເທໃສ່ຖາດ ຫຼື ພິມທີ່ຕ້ອງການ"+'\n'+
                                      "5 ຕົກແຕ່ງໜ້າດ້ວຍຊັອກໂກແລັດຊິບ"+'\n'+
                                      "6 ນໍາເຂົ້າໄປອົບໃນອຸນຫະພູມທີ່ 170 ອົງສາ ປະມານ25ນາທີ"+'\n'+
                                      "7ເມື່ອສຸກແລ້ວນໍາອອກມາຈາກເຕົາພັກໃຫ້ເຢັນ ແລ້ວຕັດເປັນສ່ວນຈາມຂະໜາດທີ່ຕ້ອງການ"
                    ]
                    },
                ]

            },
            {
                id: 6,
                name: "Cupcakes",
                categories: [1,5],
                priceRating: expensive,
                photo: images.cupcake,
                duration: "",
                details:"",

                menu: [
                    {
                        menuId: 1,
                        name: "Cocoa Brownie with Chocolate Chips",
                        photo: images.brownies,
                        detail: "",
                        icon: icons.star,
                        ingredient:['ເນີຍເຄັມ - 120 ກຣາມ'+'\n'+
                                    'ນໍ້າຕານ - 240 ກຣາມ'+'\n'+
                                    'ໄຂ່ໄກ່ - 2 ໜ່ວຍ'+'\n'+
                                    'ແປ້ງສາລີ - 90 ກຣາມ'+'\n'+
                                    'ຜົງໂກໂກ້ - 60 ກຣາມ'+'\n'+
                                    'ຊັອກໂກແລັດຊິບ'
                                ],
                        description:[ "ວິທີເຮັດ :"+'\n'+
                                      "1 ນໍາເນີຍໄປລະລາຍ ແລະ ເອົານໍ້າຕານມາປະສົມເຂົ້າກັນ"+'\n'+
                                      "2 ໃສ່ໄຂ່ໄກ່ ຄົນໃຫ້ເຂົ້າກັນໃຫ້ມີລັກສະນະຂົ້ນຂື້ນ",+'\n'+
                                      "3 ຮ່ອນແປ້ງສາລີ ແລະ ຜົງໂກໂກ້ໃສ່ ແລ້ວປະສົມເຂົ້າກັນ"+'\n'+
                                      "4 ເທໃສ່ຖາດ ຫຼື ພິມທີ່ຕ້ອງການ"+'\n'+
                                      "5 ຕົກແຕ່ງໜ້າດ້ວຍຊັອກໂກແລັດຊິບ"+'\n'+
                                      "6 ນໍາເຂົ້າໄປອົບໃນອຸນຫະພູມທີ່ 170 ອົງສາ ປະມານ25ນາທີ"+'\n'+
                                      "7ເມື່ອສຸກແລ້ວນໍາອອກມາຈາກເຕົາພັກໃຫ້ເຢັນ ແລ້ວຕັດເປັນສ່ວນຈາມຂະໜາດທີ່ຕ້ອງການ"
                    ]
                    },
                ]

            },
            {
                id: 7,
                name: "Roll Cake",
                categories: [1,7],
                priceRating: expensive,
                photo: images.roll,
                duration: "",
                details:"",

                menu: [
                    {
                        menuId: 1,
                        name: "Cocoa Brownie with Chocolate Chips",
                        photo: images.roll,
                        detail: "",
                        icon: icons.star,
                        ingredient:['ເນີຍເຄັມ - 120 ກຣາມ'+'\n'+
                                    'ນໍ້າຕານ - 240 ກຣາມ'+'\n'+
                                    'ໄຂ່ໄກ່ - 2 ໜ່ວຍ'+'\n'+
                                    'ແປ້ງສາລີ - 90 ກຣາມ'+'\n'+
                                    'ຜົງໂກໂກ້ - 60 ກຣາມ'+'\n'+
                                    'ຊັອກໂກແລັດຊິບ'
                                ],
                        description:[ "ວິທີເຮັດ :"+'\n'+
                                      "1 ນໍາເນີຍໄປລະລາຍ ແລະ ເອົານໍ້າຕານມາປະສົມເຂົ້າກັນ"+'\n'+
                                      "2 ໃສ່ໄຂ່ໄກ່ ຄົນໃຫ້ເຂົ້າກັນໃຫ້ມີລັກສະນະຂົ້ນຂື້ນ",+'\n'+
                                      "3 ຮ່ອນແປ້ງສາລີ ແລະ ຜົງໂກໂກ້ໃສ່ ແລ້ວປະສົມເຂົ້າກັນ"+'\n'+
                                      "4 ເທໃສ່ຖາດ ຫຼື ພິມທີ່ຕ້ອງການ"+'\n'+
                                      "5 ຕົກແຕ່ງໜ້າດ້ວຍຊັອກໂກແລັດຊິບ"+'\n'+
                                      "6 ນໍາເຂົ້າໄປອົບໃນອຸນຫະພູມທີ່ 170 ອົງສາ ປະມານ25ນາທີ"+'\n'+
                                      "7ເມື່ອສຸກແລ້ວນໍາອອກມາຈາກເຕົາພັກໃຫ້ເຢັນ ແລ້ວຕັດເປັນສ່ວນຈາມຂະໜາດທີ່ຕ້ອງການ"
                    ]
                    },
                ]

            },


        ]

    const [categories, setCategories] = React.useState(categoryData)
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [restaurants, setRestaurants] = React.useState(restaurantData)

    function onSelectCategory(category) {
        //filter restaurant
        let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))

        setRestaurants(restaurantList)

        setSelectedCategory(category)
    }

    function getCategoryNameById(id) {
        let category = categories.filter(a => a.id == id)

        if (category.length > 0)
            return category[0].name

        return ""
    }

    function renderHeader() {
        return(
            <View style={{ paddingTop:0, }}>
            <View style={{ flexDirection: 'row', height: 50,marginTop:25}}>
                <View
                    style={{
                        width: '70%',
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    { /*<Image 
                        source={icons.nearby}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    /> */}

                    <Text style={{ ...FONTS.h3 }}>Main</Text>
                    <Text style={{ ...FONTS.h1 }}>Categories</Text> 

                </View>

                <View style={{ flex:1, alignItems:'center', justifyContent:'center', marginTop:10}}>
                    <View
                        style={{
                            width: '50%',
                            height: "100%",
                            backgroundColor: COLORS.linen,
                            alignItems:'center',
                            justifyContent:'center',
                            borderRadius: SIZES.radius
                        }}
                    >
                     { /*  <Text style={{...FONTS.h4}}> Apication </Text> */ }
                    </View>
                </View>

                {/* seardh */}
                <TouchableOpacity
                    style={{
                        width: 50,
                        justifyContent: 'center'
                    }}
                    onPress={() => navigation.navigate('search')}//link to other page
                >
                    <Image
                    source={icons.search}
                    resizeMode="contain"
                    style={{
                        width: 30,
                        height: 30
                    }}
                    />
                </TouchableOpacity>

                {/* bastket */}
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                    onPress={() => navigation.navigate('bookmark')}
                >
                    <Image
                    source={icons.basket}
                    resizeMode="contain"
                    style={{
                        width: 30,
                        height: 30
                    }}
                    />
                </TouchableOpacity>
            </View>
            </View>
        )
    }

    function renderMainCategories() {
        const renderItem = ({item}) => {
            return (
                
                <TouchableOpacity
                    style={{
                        padding: SIZES.padding,
                        paddingBottom: SIZES.padding * 2,
                        backgroundColor: (selectedCategory ?.id == item.id) ? COLORS.rose : COLORS.tortilla,
                        borderRadius: SIZES.radius,
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: SIZES.padding,
                        ...styles.shadow
                    }}
                    onPress={() => onSelectCategory(item)}
                >
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: (selectedCategory ?.id == item.id) ? COLORS.tortilla : COLORS.daisy
                        }}
                    >
                        <Image 
                            source={item.icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                            }}
                        />
                    </View>
                        
                    <Text
                        style={{
                            marginTop: SIZES.padding,
                            color: (selectedCategory ?.id == item.id) ? COLORS.tortilla : COLORS.black,
                            ...FONTS.body5
                        }}
                    >
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ padding: SIZES.padding * 2,marginTop:0 }}>
                {/* main category */}

                <FlatList 
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => '${item.id}'}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
                />
            </View>
        )
    }

  function renderRestaurantList() {
    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={{ marginBottom: SIZES.padding * 2 }}
            onPress={() => navigation.navigate("recipe", {
                item,
            })}
        >
            {/* Image */}
            <View
                style={{
                    marginBottom: SIZES.padding
                }}
            >
                <Image
                    source={item.photo}
                    resizeMode="cover"
                    style={{
                        width: "100%",
                        height: 200,
                        borderRadius: SIZES.radius1
                    }}
                />

                <View
                    style={{
                        flexDirection: 'row',
                        position: 'absolute',
                        bottom: 0,
                        height: 50,
                        width: "50%",
                        backgroundColor: COLORS.tortilla,
                        borderTopRightRadius: SIZES.radius2,
                        borderBottomLeftRadius: SIZES.radius1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        ...styles.shadow
                    }}
                >
                    <Image
                        source={icons.star}
                        resizeMode="contain"
                        style={{
                            width: 15,
                            height: 15,
                            marginRight:10,
                           tintColor: COLORS.l_yellow,
                        }}
                    />
                    <Text style={{ ...FONTS.h4 }}>{item.name}</Text>
                </View>

            </View>

            {/* Restaurant Info */}
            <Text style={{ marginLeft: 10, ...FONTS.body3 }}>{item.duration}</Text>
            <Text style={{ marginLeft: 10, ...FONTS.body5}}>{item.details}</Text>

            <View
                style={{
                    marginTop: SIZES.padding,
                    flexDirection: 'row'
                }}
            >
                {/* Rating */}


                {/* Categories */}
                <View
                    style={{
                        flexDirection: 'row',
                        marginLeft: 10
                    }}
                >
                    {
                        item.categories.map((categoryId) => {
                            return (
                                <View
                                    style={{ flexDirection: 'row' }}
                                    key={categoryId}
                                >
                                    <Text style={{ ...FONTS.body3 }}>{getCategoryNameById(categoryId)}</Text>
                                    <Text style={{ ...FONTS.h3, color: COLORS.black }}> . </Text>
                                </View>
                            )
                        })
                    }
                     {/* Price */}
                     {
                            [1, 2, 3].map((priceRating) => (
                                    <Image
                                         source={icons.like}
                                         key={priceRating}
                                         style={{
                                             height: 20,
                                             width: 20,
                                             marginRight: 10,
                                             tintColor: (priceRating <= item.priceRating) ? COLORS.rose : COLORS.prink,

                                         }}
                                    />
                            ))
                        }

                </View>
            </View>
        </TouchableOpacity>
        )

        return (
            <FlatList
                data={restaurants}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30
                }}
            />
        )
    }   

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderMainCategories()}
            {renderRestaurantList()}
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.linen
    }, 
    shadow:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})

export default Home;
