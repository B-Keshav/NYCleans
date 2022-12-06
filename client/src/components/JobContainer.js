import JobCard from "./JobCard";
import { useState, useEffect } from "react";

function JobContainer (){
const [jobs, setJobs] = useState([])
    useEffect(() => {
    fetch("/jobs")
      .then((r) => r.json())
      .then((data) => setJobs(data));
  }, []);


  const jobsArray = jobs.map(job=> {
    return <JobCard name={job.job_name} location={job.location} desc={job.description} key={job.id} image={job.image}/>
   
  })
  
    return (
        // <JobCard />
        <div className="jobContainer"> 
        {jobsArray} </div>

    )
}

export default JobContainer;