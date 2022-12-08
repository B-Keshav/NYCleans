import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function JobCard({ job, user }) {
    let history = useHistory()
    // const [jobIncludes, setJobIncludes] = useState([])
    const [vol, setVolunteers] = useState([])

    
    // Handles logic for Edit.
    // useEffect(() => {
    //     fetch("/volunteers")
    //       .then((r) => r.json())
    //       .then((data) => setVolunteers(data));
    //   }, []);
    
    //     console.log(user)
    //     const organizer = vol.filter((v) => v.is_organizer == true && user.id == vol.user_id)
    //     console.log(organizer)


    // need error state that says--you need to be logged in!
    function noUserClick() {
        history.push('/volunteers')
    }

    if (!user) {
        return (
            <div className="jobCard">
                <p className="jobTitle">{job.name}</p>
                <img className="jobImage" src={job.image} alt="location to be cleaned"></img>
                <p className="jobDesc">{job.description}</p>
                <p className="jobLoc">{job.location.address}</p>
                <button onClick={noUserClick}>Login to Volunteer</button>
            </div>
        )
    }

    function newVolunteer() {
        fetch('/volunteers', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                user_id: user.id,
                job_id: job.id,
                is_organizer: false
            })
        })
            .then(res => {
                if (res.status === 201) {
                    //setUserVol(true)
                    console.log(user.jobs)
                    return res.json();
                } else {
                    console.log("yikes")
                }
            })
            .then(data => console.log(data))
    }

    function findVolunteer() {
        fetch(`/findvolunteer/${job.id}`, {
            method: "DELETE"
        }).then(r => {
            if (r.ok) {
                console.log(r)
                console.log(user.volunteers)
            }
        })

    }
    const hasJob = user.volunteers.map(j => j.job_id)

    return (
        <div className="jobCard">
            <p className="jobTitle">{job.job_name}</p>
            <img className="jobImage" src={job.image} alt="location to be cleaned"></img>
            <p className="jobTitle">{job.name}</p>
            <p className="jobDesc">{job.description}</p>
            <p className="jobLoc">{job.location.address}</p>
            {hasJob.includes(job.id) ?
                <button onClick={() => findVolunteer()}>I can't Attend</button>
                :
                <button onClick={() => newVolunteer()}>Volunteer To Clean!</button>
            }
        </div>
    )
}

export default JobCard;