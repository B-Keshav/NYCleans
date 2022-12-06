function JobCard ({name, desc, location, image="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/63555/london-plane-tree-green-leaf-clipart-md.png"}) {

console.log(image)
    return (
        <span className="jobCard">
        <h1 className="jobTitle">{name}</h1>
        <img className="jobImage"src={image}></img>
        <h2 className="jobDesc">{desc}</h2>
        <h2 className="jobLoc">{location.address}</h2>
        </span>
    )
}

export default JobCard;