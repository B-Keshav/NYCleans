import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function JobCard({ job, user, initialIsSignedUp}) {
    let history = useHistory()

    const [vol, setVolunteers] = useState([])
    const [isSignedUp, setIsSignedUp] = useState(initialIsSignedUp)

    
 madeline
    // function toggleButton () {
    //     setButton(!button)
    // }



    useEffect(() => {
        fetch("/volunteers")
            .then((r) => r.json())
            .then((data) => setVolunteers(data));
    }, []);
 main
    // Handles logic for Edit.

    // need error state that says--you need to be logged in!
    function noUserClick() {
        history.push('/volunteers')
    }

    if (!user) {
        return (
            <div className="jobCard">
                <h2 className="jobTitle">{job.job_name}</h2>
                <img className="jobImage" src={job.image} alt="location to be cleaned"></img>
                <p className="jobDesc">{job.description}</p>
                <p className="jobLoc">📍{job.location.address}</p>
                <button onClick={noUserClick} className='jobButton'>Login to Volunteer</button>
            </div>
        )
    }

    const organizer = vol.filter((v) => v.is_organizer === true && user.id === v.user_id)
    const isOrg = organizer.map((e) => e.job_id)

    function newVolunteer() {
        setIsSignedUp(!isSignedUp)
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
                    console.log(user.jobs)
                    return res.json();
                } else {
                    console.log("yikes")
                }
            })
            .then(data => console.log(data))
            
    }

    function findVolunteer() {
        setIsSignedUp(!isSignedUp)
        fetch(`/findvolunteer/${job.id}`, {
            method: "DELETE"
        }).then(r => {
            if (r.ok) {
                // toggleButton()
                console.log(r)
                console.log(user.volunteers)
            }
        })

    }
    
    // const hasJob = user.volunteers.map(j => j.job_id)

    function onEditClick(){
        history.push(`/edit/${job.id}`)
    }

    return (
        <div className="jobCard">
            <h2 className="jobTitle">{job.job_name}</h2>
            <img className="jobImage" src={job.image} alt="location to be cleaned"></img>
            <p className="jobTitle">{job.name}</p>
            <p className="jobDesc">{job.description}</p>
            <p className="jobLoc">📍{job.location.address}</p>

            {isSignedUp ?

                <button onClick={() => findVolunteer()} className='jobButton'>Sorry, I Can't Make It</button>
                }
                </>
                :
                <button onClick={() => newVolunteer()} className='jobButton'>Volunteer To Clean!</button>
            }
        </div>
    )
}

export default JobCard;