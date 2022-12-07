import React from "react";

function MapJobCard({ job, image = "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/63555/london-plane-tree-green-leaf-clipart-md.png" }) {


    return (
        <div className="mapJobCard">
            <p className="mapJobTitle">{job.job_name}</p>
            <img className="jobImage" src={job.image} alt="Image of location to be cleaned"></img>
            <p className="mapJobDesc">{job.description}</p>
            {/* <p className="jobLoc">{job.location.address}</p> */}
        </div>
    )
}

export default MapJobCard;