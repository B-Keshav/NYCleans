import { useState, useEffect } from "react";

function JobCard ({job, user}) {
const [userVolunteer, setUserVolunteer] = useState([])
// need error state that says--you need to be logged in!
function newVolunteer(job){
    fetch('/volunteers', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
            user_id: user.id,
            job_id: job.id,
            is_organizer: false
        })
    })
.then(res => res.json())
.then(data => console.log(data))
}

function findVolunteer(){
    fetch(`/myjobs`)
    .then(r => r.json())
    .then(data => setUserVolunteer(data))

    
}



// function stopVolunteer(id) {
//     fetch(`/volunteers/${id}`, {
//       method: "DELETE"
//     }).then(r => {
//       if (r.ok) {
//         console.log(r)
//       }
//     })
//   }
// function stopVolunteer(job){
// console.log(job)
// }


    return (
        <div className="jobCard">
        <p className="jobTitle">{job.name}</p>
        <img className="jobImage"src={job.image} alt="location to be cleaned"></img>
        <p className="jobDesc">{job.description}</p>
        <p className="jobLoc">{job.location.address}</p>
        {user ? 
        <button onClick={() => findVolunteer()}>I can't Attend</button>
        :
        <button onClick={() => newVolunteer(job)}>Volunteer To Clean!</button>
    }
        </div>
    )
}

export default JobCard;