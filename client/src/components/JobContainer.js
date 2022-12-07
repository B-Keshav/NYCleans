import JobCard from "./JobCard";
// import { useState, useEffect } from "react";
import Search from "./Search";

function JobContainer ({jobs, setSearch, user}){


    
   


  const jobsArray = jobs.map(job=> {
   return <JobCard job={job} key={job.id} user={user}/>
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