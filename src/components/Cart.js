import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, {useState, useEffect} from 'react'
import { COLOURS } from '../database/items';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView } from 'react-native-gesture-handler';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from 'react-native-vector-icons/Entypo';




const Cart = ({navigation}) => {
    const [cartData, setCartData] = useState([]);

    
    useEffect(() => {
        getDataFromDB()
      }, [])

    const getDataFromDB = async () => {
        let food = await AsyncStorage.getItem('@cart');
        const async = JSON.parse(food);
        
        setCartData(async)
        console.log(cartData)
      
   
      
    }
    const remove = async (id) => {
        const allData = data.filter((obj) => obj.id !== id);
        setData(allData);
        await AsyncStorage.setItem("@cart", JSON.stringify(allData));
      };



    const renderProducts = (data, index) => {
        return (
          <TouchableOpacity
            key={data.key}
            
            style={{
              width: '100%',
              height: 100,
              marginVertical: 6,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '30%',
                height: 100,
                padding: 14,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: COLOURS.backgroundLight,
                borderRadius: 10,
                marginRight: 22,
              }}>
              <Image
                source={data.image}
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'contain',
                }}
              />
            </View>
            <View
              style={{
                flex: 1,
                height: '100%',
                justifyContent: 'space-around',
              }}>
              <View style={{}}>
                <Text
                  style={{
                    fontSize: 14,
                    maxWidth: '100%',
                    color: COLOURS.black,
                    fontWeight: '600',
                    letterSpacing: 1,
                  }}>
                  {data.name}
                </Text>
                <View
                  style={{
                    marginTop: 4,
                    flexDirection: 'row',
                    alignItems: 'center',
                    opacity: 0.6,
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '400',
                      maxWidth: '85%',
                      marginRight: 4,
                    }}>
                    {data.price}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      borderRadius: 100,
                      marginRight: 20,
                      padding: 4,
                      borderWidth: 1,
                      borderColor: COLOURS.backgroundMedium,
                      opacity: 0.5,
                    }}>
                    <MaterialCommunityIcons
                      name="minus"
                      style={{
                        fontSize: 16,
                        color: COLOURS.backgroundDark,
                      }}
                    />
                  </View>
                  <Text>1</Text>
                  <View
                    style={{
                      borderRadius: 100,
                      marginLeft: 20,
                      padding: 4,
                      borderWidth: 1,
                      borderColor: COLOURS.backgroundMedium,
                      opacity: 0.5,
                    }}>
                    <MaterialCommunityIcons
                      name="plus"
                      style={{
                        fontSize: 16,
                        color: COLOURS.backgroundDark,
                      }}
                    />
                  </View>
                </View>
                <TouchableOpacity onPress={() => remove(data.id)}>
                  <MaterialCommunityIcons
                    name="delete-outline"
                    style={{
                      fontSize: 16,
                      color: COLOURS.backgroundDark,
                      backgroundColor: COLOURS.backgroundLight,
                      padding: 8,
                      borderRadius: 100,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        );
      };
      
    
  return (
    <View
    style={{
      width: '100%',
      height: '100%',
      backgroundColor: COLOURS.white,
      position: 'relative',
    }}>
    <ScrollView>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          paddingTop: 16,
          paddingHorizontal: 16,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons
            name="chevron-left"
            style={{
              fontSize: 18,
              color: COLOURS.backgroundDark,
              padding: 12,
              backgroundColor: COLOURS.backgroundLight,
              borderRadius: 12,
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 14,
            color: COLOURS.black,
            fontWeight: '400',
          }}>
          Order Details
        </Text>
        <View></View>
      </View>
      <Text
        style={{
          fontSize: 20,
          color: COLOURS.black,
          fontWeight: '500',
          letterSpacing: 1,
          paddingTop: 20,
          paddingLeft: 16,
          marginBottom: 10,
        }}>
        My Cart
      </Text>
      <View style={{ paddingHorizontal: 16 }}>
        {cartData ? cartData.map(renderProducts) : null}
      </View>
      <View>

        <View
          style={{
            paddingHorizontal: 16,
            marginTop: 40,
            marginBottom: 80,
          }}>
          <Text
            style={{
              fontSize: 16,
              color: COLOURS.black,
              fontWeight: '500',
              letterSpacing: 1,
              marginBottom: 20,
            }}>
            Order Info
          </Text>


          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '400',
                maxWidth: '80%',
                color: COLOURS.black,
                opacity: 0.5,
              }}>
              Total
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '500',
                color: COLOURS.black,
              }}>
              Rp. {}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
    <View
        style={{
          position: 'absolute',
          width: '100%',
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("map")}
          style={{
            width: '90%',
            height: 80,
            backgroundColor: COLOURS.accent,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: COLOURS.black,
              letterSpacing: 1,
              marginRight: 10,
            }}>
            Order Now
          </Text>
          <Entypo
            name="chevron-right"
            style={{fontSize: 16, color: COLOURS.black}}
          />
        </TouchableOpacity>
      </View>
  </View>
  )
}

export default Cart