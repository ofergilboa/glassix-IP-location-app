import React from 'react'
import './Map.css'

// const googleMapKey = `AIzaSyCdQymwSuF0P6Ee-ffX0ZtWjpJdpaT5eLk`
// const googleMapLink = `https://www.google.com/maps/embed/v1/view?key=${googleMapKey}&`

const Map = (props) => {

    let setSrc = `https://maps.google.com/maps?q=${props.params}&output=embed`
    // setSrc = `${googleMapLink}center=${props.params}&zoom=17`

    return (
        < iframe className='map'
            frameBorder="10" style={{ border: 8 }}
            src={setSrc} ></iframe > 
    )
}

export default Map