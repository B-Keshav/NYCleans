import React, { useState, useEffect } from "react"

function UserProfile({ currentUser }) {
    const [userJobs, setUserJobs] = useState([])


    useEffect(() => {
        fetch("/userjobs")
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
            <div key={job.id} className="userJobCard">
                    <h2 className="jobTitle">{job.job_name}</h2>
                    <img className="jobImage" src={job.image} alt={job.job_name} />
                    <p className="jobDesc" >{job.description}</p>
                    <button className='jobButton' onClick={(e) => handleClick(e)}>Remove from calendar</button>
            </div>
        )
    })

    // const renderJobs = currentUser.jobs.map((job) => {

    //     

    //     return (

    //     )
    // })

    return (
        <div className="content" id="profCont">
            <div>
                <div className="profile">
                <h1>Welcome, {username}!</h1>
                    <img src={currentUser.avatar} alt="avatar" className={"profilePicture"} />
                    <br />
                    <h2 className="username">{username}</h2>
                    <p><strong>Age:</strong> {age}</p>
                    <p><strong>Bio:</strong> {bio}</p>
                    <p><strong>Organization Affiliation:</strong> {organization.name}</p>
                    <p><strong>Based in:</strong> {organization.city}</p>
                </div>
                <div>
                <h1>Current Jobs</h1>
                    <div className="userJobContainer">
                    { userJobs.length > 0 ?
                    userJobsElements :
                    <h3>No jobs! Volunteer for jobs to see your schedule.</h3>
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;