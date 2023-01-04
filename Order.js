import { View, Text } from 'react-native'
import React from 'react'
import MapView, {Marker} from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'

const Order = () => {
    const [restoran, setRestoran] = useState()
    const [lokasiAwal, setLokasiAwal] = useState()
    const [lokasiTujuan, setLokasiTujuan] = useState()
    const [makanan, setMakanan] = useState()
    const [defaultRegion, setDefaultRegion] = useState()

    
    const indonesiaRegion = () => {
        const kedalaman = 113.000;
        const luas = 101;
    }

    useEffect (() => {
        var {restoran, lokasi} = route.params 
    
        var lokRumah = rumah.user
        var lokResto = resto.lokasi
    
        var focusedRegion = {
            ketinggian: (lokRumah.latitude + lokResto.latitude) / 2,
            panjang: (lokRumah.latitude + lokResto.latitude) / 2,
        }
    
        setRestoran(restoran)
        setLokasiAwal(lokRumah) 
        setLokasiTujuan(lokResto)
        setDefaultRegion(indonesiaRegion)
        focusedRegion()
    })

    const pinRumah = () => {
        <Marker 
        coordinate={lokasiAwal} 
        flat={true} 
        anchor={{ x: 0.5, y: 0.5}}>
        <View
        style={{
            backGroundColor: black,
            height: 100,
            width: 100,
        }}></View>
    </Marker>
    }

  return(
    <View>
        <MapView style={{ flex: 1 }}
        initialRegion={indonesiaRegion}
        provider={PROVIDER_GOOGLE}>

            <MapViewDirections
                origin={lokasiAwal}
                destination={lokasiTujuan}
                apikey={API_KEY}
                strokeWidth={5}
                strokeColor={orange}
                >
            </MapViewDirections>
            <Marker coordinate={lokasiTujuan}>
                <View
                style={{
                    backGroundColor: white,
                    height: 100,
                    width: 100,
                }}></View>
            </Marker>

            {pinRumah}
        </MapView>
    </View>
)
}

export default Order