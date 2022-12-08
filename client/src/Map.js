import React, { useState, useEffect } from "react";
import LocationPin from "./LocationPin";
import './map.css'
import GoogleMapReact from 'google-map-react'
import loctag from "./images/LocationIcon.png"

function Map({ user }) {
    const [jobLocations, setJobLocations] = useState([])

    // THIS IS CODE THAT WE'LL USE TO DYNAMICALLY SET THE CENTER OF THE MAP
    // BUT IT'S NOT WORKING RIGHT NOW. WILL IMPLEMENT LATER
    // --HARRISON :)

    // const [startLocation, setStartLocation] = useState({})

    // useEffect(() => {
    //     if (user !== null) {
    //         setStartLocation({
    //             lat: user.lat,
    //             lng: user.lng
    //         })
    //     }
    //     else {
    //         setStartLocation({
    //             lat: 40.70541807766208,
    //             lng: -74.01397913050388
    //         })
    //     }
    // }, [])

    useEffect(() => {
        fetch("/joblocations")
            .then((r) => r.json())
            .then(data => setJobLocations(data))
    }, []);

    const jobLocationArray = jobLocations.map(location => {
        return (
            <LocationPin
                lat={location.lat}
                lng={location.lng}
                text={location.address}
                id={location.id}
                key={location.id}
            />
        )
    })



    return (
        <div className="content">
        <div className="map">
            <h2 className="map-h2">Volunteer Opportunities near you!</h2>
            <div className="google-map">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyB6wyOfDyMZwASobvaG-XhnmGLyzx2zYxo' }}
                    center={{
                        lat: 40.70541807766208,
                        lng: -74.01397913050388
                    }}
                    defaultZoom={17}
                    defaultOptions={{ fullscreenControl: false, zoomControl: false }}
                >
                    {jobLocationArray}
                </GoogleMapReact>
            </div>
        </div>
        </div>
    )
}

export default Map;