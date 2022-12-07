import React, { useState, useEffect } from 'react';
import Icon from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import MapJobCard from "./components/MapJobCard"
// import loctag from "./images/LocationIcon.png"

function LocationPin({ text, id }) {
  const [displayJob, setDisplayJob] = useState(false)
  const [locationJob, setLocationJob] = useState([])

  useEffect(() => {
    fetch(`/locations/${id}`)
      .then((r) => r.json())
      .then(data => {
        setLocationJob(data.jobs)
        console.log(locationJob)
      })
  }, []);

  const jobArray = locationJob.map((job) => {
    return (
      <MapJobCard job={job}/>
    )
  })

  function handleHover() {
    console.log(text)
  }

  return (
    <div className="pin" onMouseEnter={(e) => handleHover()}>
      <Icon icon={locationIcon} className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
  )
}

export default LocationPin;