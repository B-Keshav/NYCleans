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
    fetch(`/findvolunteer/${job.id}`, {
        method: "DELETE"
    }).then(r => {
        if (r.ok) {
            console.log(r)
        }
    }) 
}
    // fetch(`/myjobs`)
    // .then(r => r.json())
    // .then(data => setUserVolunteer(data))
// console.log(job.volunteers.map(j => j.user_id))
// const userArray = (job.users.map(j => j.id))
// const volArray = (job.volunteers.map(v => v.job_id))
// const volsAgain = (job.volunteers.map(v => v.id))
// console.log(volArray)
// console.log(job.id)
// if (userArray.includes(user.id) && volArray.includes(job.id)) {
//     console.log(volsAgain)
// fetch(`/volunteers/${job.volunteers[0].id}`, {
//           method: "DELETE"
//         }).then(r => {
//           if (r.ok) {
//             console.log(r)
//           }
//         })
// }
// else {
// console.log(false)
// }
// }

// console.log(job.users)
// console.log(job.volunteers)
    


// delete volunteer instance where job.id and user.id match

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
        {/* {user ? 
        <button onClick={() => findVolunteer()}>I can't Attend</button>
        : */}
        <button onClick={() => findVolunteer()}>Volunteer To Clean!</button>
    {/* } */}
        </div>
    )
}

export default JobCard;