import JobCard from "./JobCard";
// import { useState, useEffect } from "react";
import Search from "./Search";

function JobContainer ({jobs, setSearch}){


  const jobsArray = jobs.map(job=> {
    return <JobCard name={job.job_name} location={job.location} desc={job.description} key={job.id} image={job.image}/>
   
  })

  
    return (
        <>
        <h1>View Jobs</h1>
        <Search setSearch={setSearch}/>
        <div className="jobContainer"> 
        {jobsArray} 
        </div>
        </>
    )
}

export default JobContainer;