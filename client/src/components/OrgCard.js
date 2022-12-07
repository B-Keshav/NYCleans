function OrgCard({org}){
    const {city, description, name, non_profit} = org

    return(
        <li>
            <h2>{name}</h2>
            <p>{`City:${city} Non-Profit:${non_profit? "Yes" : "No"}`}</p>
            <p>Our Mission:</p>
            <p>{description}</p>
        </li>
    )
}

export default OrgCard