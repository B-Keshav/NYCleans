function JobCard ({name, desc, location, image="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/63555/london-plane-tree-green-leaf-clipart-md.png"}) {


    return (
        <div className="jobCard">
        <p className="jobTitle">{name}</p>
        <img className="jobImage"src={image} alt="location to be cleaned"></img>
        <p className="jobDesc">{desc}</p>
        <p className="jobLoc">{location.address}</p>
        <button>Volunteer To Clean!</button>
        </div>
    )
}

export default JobCard;