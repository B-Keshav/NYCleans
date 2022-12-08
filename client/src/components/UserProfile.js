import React, { useState, useEffect } from "react"

function UserProfile({ currentUser }) {
    const [userJobs, setUserJobs] = useState([])


    useEffect(() => {
        fetch("userjobs")
            .then(resp => resp.json())
            .then(data => setUserJobs(data))
    }, [])

    if (!currentUser) {
        return (
            <h1>Loading...</h1>
        )
    }

    const { username, age, bio, organization } = currentUser





    const userJobsElements = userJobs.map(job => {

        function handleClick(e) {
            fetch(`/findvolunteer/${job.id}`, {
                method: 'DELETE'
            })
                .then(resp => console.log(resp))
            e.target.parentNode.remove()
        }

        return (
            <div key={job.id}>
                <li className="profileJobs">
                    <h2>{job.job_name}</h2>
                    <img src={job.image} alt={job.job_name} />
                    <p>{job.description}</p>
                    <button onClick={(e) => handleClick(e)}>Remove from calendar</button>
                </li>
                <br></br>
            </div>
        )
    })

    // const renderJobs = currentUser.jobs.map((job) => {

    //     

    //     return (

    //     )
    // })

    return (
        <div className="content">
            <div className="profile">
                <h1>Welcome {username}</h1>
                <div>
                    <img src={currentUser.avatar} alt="avatar" className={"profilePicture"} />
                    <br />
                    <h4 className="username">{username}</h4>
                    <p><strong>Age:</strong> {age}</p>
                    <p><strong>Bio:</strong> {bio}</p>
                    <p><strong>Organization Affiliation:</strong> {organization.name}</p>
                    <p><strong>Based in:</strong> {organization.city}</p>
                </div>
                <div>
                    <h1>Current Jobs</h1>
                    { userJobs.length > 0 ?
                    userJobsElements :
                    <h3>No jobs! Volunteer for jobs to see your schedule.</h3>
                    }
                </div>
            </div>
        </div>
    )
}

export default UserProfile;