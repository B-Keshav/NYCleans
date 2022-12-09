import React from "react";
import { useHistory } from "react-router-dom";

function MapJobCard({ job, image = "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/63555/london-plane-tree-green-leaf-clipart-md.png" }) {
    let history = useHistory()
    
    function clickToJobs(e){
        history.push('/jobs')
    }

    return (
        <div className="mapJobCard" onClick={clickToJobs}>
            <p className="mapJobTitle">{job.job_name}</p>
            {/* <img className="jobImage" src={job.image} alt="location to be cleaned"></img> */}
            <p className="mapJobDesc">{job.description}</p>
            {/* <p className="jobLoc">{job.location.address}</p> */}
        </div>
    )
}

export default MapJobCard;