import JobCard from "./JobCard";
// import { useState, useEffect } from "react";
import Search from "./Search";

function JobContainer({ jobs, setSearch, user}) {


 


  const jobsArray = jobs.map(job => {
    const hasJob = user.volunteers.map(j => j.job_id)
    const initialIsSignedUp = hasJob.includes(job.id) 
    // set then pass down, issignedupis set to that
    return <JobCard job={job} key={job.id} user={user} initialIsSignedUp={initialIsSignedUp}/>
  })




  return (
    <>
      <h1>View Jobs</h1>
      <Search setSearch={setSearch} />
      <div className="jobContainer">
        {jobsArray}
      </div>
    </>
  )
}

export default JobContainer;