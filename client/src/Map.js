import React, { useState, useEffect } from "react";
import LocationPin from "./LocationPin";
import './map.css'
import GoogleMapReact from 'google-map-react'

function Map() {
    const [jobLocations, setJobLocations] = useState([])
    const location = {
        address: '11 Broadway, New York City, NY 10004',
        lat: 40.70521926879883,
        lng: -74.01383209228516,
    }

    useEffect(() => {
        fetch("/joblocations")
            .then((r) => r.json())
            .then(data => setJobLocations(data))
    }, []);

    const jobLocationArray = jobLocations.map((location => {
        <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
        />
    }))

    return (
        <div className="map">
            <h2 className="map-h2">Look for Volunteer Opportunities near you!</h2>

            <div className="google-map">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyB6wyOfDyMZwASobvaG-XhnmGLyzx2zYxo' }}
                    defaultCenter={location}
                    defaultZoom={17}
                >
                    <LocationPin
                        lat={location.lat}
                        lng={location.lng}
                        text={location.address}
                    />
                    {/* {jobLocationArray} */}
                </GoogleMapReact>
            </div>
        </div>
    )
}

export default Map;