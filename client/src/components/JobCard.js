function JobCard ({name, desc, location, image="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/63555/london-plane-tree-green-leaf-clipart-md.png"}) {

console.log(image)
    return (
        <div className="jobCard">
        <p className="jobTitle">{name}</p>
        <img className="jobImage"src={image}></img>
        <p className="jobDesc">{desc}</p>
        <p className="jobLoc">{location.address}</p>
        </div>
    )
}

export default JobCard;