import React, { useState, useEffect } from 'react';
import Icon from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import MapJobCard from "./components/MapJobCard"
// import loctag from "./images/LocationIcon.png"

function LocationPin({ text, id }) {
  const [displayJob, setDisplayJob] = useState(true)
  const [locationJob, setLocationJob] = useState([])

  useEffect(() => {
    fetch(`/locations/${id}`)
      .then((r) => r.json())
      .then(data => setLocationJob(data.jobs))
  }, []);

  const jobArray = locationJob.map(job => {
    return (
      <MapJobCard job={job} key={job.job_name} />
    )
  })

  function handleHover() {
    setDisplayJob(false)
  }

  function handleLeave() {
    setDisplayJob(true)
  }

  return (
    <div className="pin" onMouseEnter={(e) => handleHover()} onMouseLeave={(e) => handleLeave()}>
      <Icon icon={locationIcon} className="pin-icon" />
      <p className="pin-text">{text}</p>
      {displayJob ? null : jobArray}
    </div>
  )
}

export default LocationPin;