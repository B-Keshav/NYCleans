function OrgCard({org}){
    const {city, description, name, non_profit} = org

    return(
        <ul className="org-container">
        <li className="orgCard">
            <h2>{name}</h2>
            <p>{`City: ${city} Non-Profit: ${non_profit? "Yes" : "No"}`}</p>
            <strong>Our Mission:</strong>
            <p>{description}</p>
        </li>
        </ul>
    )
}

export default OrgCard