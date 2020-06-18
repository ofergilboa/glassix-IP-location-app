import React from 'react'
import './Map.css'

const Map = (props) => {

    // const googleMapKey = `AIzaSyCdQymwSuF0P6Ee-ffX0ZtWjpJdpaT5eLk`
    const googleMapKey = `test`
    const googleMapLink = `https://www.google.com/maps/embed/v1/view?key=${googleMapKey}&`

    console.log(props.params)
    let setSrc = `https://maps.google.com/maps?${props.params}&output=embed`
    return (
        < iframe className='map'
            frameborder="10" style={{ border: 8 }}
            src={googleMapLink + props.params}> </iframe >
        // src={setSrc} ></iframe >
        // src = "https://maps.google.com/maps?q=35.856737, 10.606619&z=15&output=embed" ></iframe >

    )
}
export default Map