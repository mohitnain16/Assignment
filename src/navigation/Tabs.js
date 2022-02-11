import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DebitCardControlCenterScreen from '../screens/DebitCard/DebitCardControlCenterScreen';
import { setCompleteCardDetails } from '../store/slices/debitCardSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectAppColorSolid } from '../store/slices/appVariablesSlice';


const Tab = createBottomTabNavigator();




const Tabs = () => {
    let appColorSolid = useSelector(selectAppColorSolid);
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
            }}
            style={styles.shadow}
            backBehavior='none'
            initialRouteName='Debit Card'
        >
            {/* Assigning all tabs to redirect to DebitControlCenterScreen since it is the only screen shared with us*/}
            <Tab.Screen 
                name="Home" 
                component={DebitCardControlCenterScreen}
                listeners={{
                    tabPress: e => {
                        // Prevent default action since this item is disabled
                        e.preventDefault();
                    },
                }}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View 
                            style={{
                                alignItems:'center',
                                justifyContent:'center',
                            }}
                        >
                            <Image
                                source={require("../assets/Home.png")}
                                resizeMode='contain'
                                style={{
                                    width:24,
                                    height:24,
                                }}
                            />
                            <Text style={{fontSize:9, color: "#DDDDDD"}}>Home</Text>
                            {/* These elements will always be set to gray since they are not supposed to be focused as per the shared SR Doc */}
                        </View>
                    ),
                }}
            />
            <Tab.Screen 
                name="Debit Card" 
                component={DebitCardControlCenterScreen}  
                options={{
                    tabBarIcon: ({focused}) => (
                        <View 
                            style={{
                                alignItems:'center',
                                justifyContent:'center',
                            }}
                        >
                            <Image
                                source={require("../assets/pay.png")}
                                resizeMode='contain'
                                style={{
                                    width:24,
                                    height:24,
                                    tintColor: focused ? appColorSolid : "#DDD",
                                }}
                            />
                            <Text style={{fontSize:9, color: focused ? appColorSolid : "#DDD",}}>Debit Card</Text>
                        {/* These elements will always be set to gray since they are not supposed to be focused as per the shared SR Doc */}
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="Payments" component={DebitCardControlCenterScreen}  
            listeners={{
                tabPress: e => {
                    // Prevent default action since this item is disabled
                    e.preventDefault();
                },
            }}
            options={{
                tabBarIcon: ({focused}) => (
                    <View 
                        style={{
                            alignItems:'center',
                            justifyContent:'center',
                        }}
                    >
                        <Image
                            source={require("../assets/Payments.png")}
                            resizeMode='contain'
                            style={{
                                width:24,
                                height:24,
                                tintColor: "#DDDDDD",
                            }}
                        />
                        <Text style={{fontSize:9, color: "#DDDDDD"}}>Payments</Text>
                        {/* These elements will always be set to gray since they are not supposed to be focused as per the shared SR Doc */}
                    </View>
                )
            }}/>
            <Tab.Screen name="Credit" component={DebitCardControlCenterScreen}  
            listeners={{
                tabPress: e => {
                    // Prevent default action since this item is disabled
                    e.preventDefault();
                },
            }}
            options={{
                tabBarIcon: ({focused}) => (
                    <View 
                        style={{
                            alignItems:'center',
                            justifyContent:'center',
                        }}
                    >
                        <Image
                            source={require("../assets/Credit.png")}
                            resizeMode='contain'
                            style={{
                                width:24,
                                height:24,
                            }}
                        />
                        <Text style={{fontSize:9, color: "#DDDDDD"}}>Credit</Text>
                        {/* These elements will always be set to gray since they are not supposed to be focused as per the shared SR Doc */}
                    </View>
                )
            }}/>
            <Tab.Screen name="Profile" component={DebitCardControlCenterScreen}  
            listeners={{
                tabPress: e => {
                    // Prevent default action since this item is disabled
                    e.preventDefault();
                },
            }}
            options={{
                tabBarIcon: ({focused}) => (
                    <View 
                        style={{
                            alignItems:'center',
                            justifyContent:'center',
                        }}
                    >
                        <Image
                            source={require("../assets/user.png")}
                            resizeMode='contain'
                            style={{
                                width:24,
                                height:24,
                            }}
                        />
                        <Text style={{fontSize:9, color: "#DDDDDD"}}>Profile</Text>
                        {/* These elements will always be set to gray since they are not supposed to be focused as per the shared SR Doc */}
                    </View>
                )
            }}/>
        </Tab.Navigator>
    )
}

export default Tabs

const styles = StyleSheet.create({
    shadow:{
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    }
})
