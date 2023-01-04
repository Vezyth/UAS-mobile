import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import React from 'react'
import MapView, {Marker} from 'react-native-maps'
import { COLOURS } from '../database/items'
import MapViewDirections from 'react-native-maps-directions'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Map = ({navigation}) => {

  const GOOGLE_MAP_KEY = "AIzaSyAA-1M0FOMIS-Izcl2Jj4KLOU3B-TQ3xlw"

  return (
    <>
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("home")}>
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
      </View>
      <View style={style.custom}>

    <View style={style.wrapper}>
      
       
      <MapView style={style.map} initialRegion={{
        latitude:-6.317521593487504,
        longitude:106.65253586898727,
        latitudeDelta:0.009,
        longitudeDelta:0.009
      }}>
        
        <Marker coordinate={{latitude:-6.317446541845292,longitude: 106.65042181437347}}/>
        <Marker style={{backgroundColor: COLOURS.accent}} coordinate={{latitude:-6.316820339254154, longitude: 106.65257380117325}}/>
        <MapViewDirections strokeColor="red" strokeWidth={3} apikey={GOOGLE_MAP_KEY} origin={{latitude:-6.317446541845292,longitude: 106.65042181437347}} destination={{latitude:-6.316820339254154, longitude: 106.65257380117325}}/>

      </MapView>
    </View>
      </View>
    </>
  )
}

const style = StyleSheet.create({
  wrapper:{
    ...StyleSheet.absoluteFill
  },
  map:{
    ...StyleSheet.absoluteFillObject
  },
  custom:{
    height: "95%",
    width: "100%"
  }
})

export default Map