import React from 'react'
import './IPData.css'


const IPData = (props) => {

    return (
        <div className='allData'>
            <p className='data'>City: {props.location.city}, Country: {props.location.country}</p>
            <p className='data'>IP: {props.IP}</p>
            <p className='data'>Coordinates based on IP:</p>
            <p className='data'>latitude: {props.location.coordinates.latitude}, longitude: {props.location.coordinates.longitude}</p>
        </div>
    )
}

export default IPData