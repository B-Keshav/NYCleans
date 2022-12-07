import { useEffect, useState } from "react"
import OrgCard from "./OrgCard"

function Organization(){
    const [orgs, setOrgs] = useState(null)
    
    useEffect(() => {
        fetch('/organizations')
        .then(res => res.json())
        .then(data => setOrgs(data))
    },[])

    if(!orgs) return <h1>Loading...</h1>
    
    const filterOrgs = orgs.filter(org => org.name !== "None")
    console.log(filterOrgs)
    
    const renderOrgs = filterOrgs.map((org) => {
        return <OrgCard key={org.id} org={org}/>
    }) 


    return(
        <div className="orgs_page_box">
            <h1>Organizations we Partner With: </h1>
            <ul>
                {renderOrgs}
            </ul>
        </div>
    )
}

export default Organization