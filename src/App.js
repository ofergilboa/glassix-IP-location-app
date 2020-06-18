import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Map from './components/Map/Map';
import IPData from './components/IPData/IPData';

function App() {

    const [IP, setIP] = useState('')
    const [location, setLocation] = useState({
        city: 'City',
        country: 'Country',
        coordinates: { latitude: '', longitude: '' }
    })
    const [mapSrcParams, setMapSrcParams] = useState('')

    const IPDataKey = `dcb19aafdd3accd0ca61b014f91a6cc5888d57f4f703a9758da3751e`
    const IPDataKey1 = `430053cc2ae606e66ce647c407caa163c1f362f09a9cb2570e3e6fdf`
    const getLocationAPI = `https://api.ipdata.co?api-key=`

    useEffect(() => { setData() }, [])

    const setData = async () => {
        console.log("run")
        let res = await axios.get(`${getLocationAPI}${IPDataKey}`)
        console.log(res)
        let data = res.data
        await setIP(data.ip)
        await setLocation({
            city: data.city,
            country: data.country_name,
            coordinates: {
                latitude: data.latitude,
                longitude: data.longitude
            }
        })
        // await setMapSrcParams(`${data.latitude}, ${data.longitude}`)
        await setMapSrcParams(`center=${data.latitude},${data.longitude}&zoom=17`)
    }
console.log(mapSrcParams)   
    return mapSrcParams ? (
        < div >
            <IPData location={location} IP={IP} />
            <Map params={mapSrcParams} />
        </div >
    )
        : (
            <div className='loading'>Loading...</div>
        )

}

export default App;
