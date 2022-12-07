import JobContainer from "./JobContainer";
import { useState, useEffect } from "react";

function Jobs () {
 const [jobs, setJobs] = useState([])
 const [search, setSearch] = useState("")


    useEffect(() => {
    fetch("/jobs")
      .then((r) => r.json())
      .then((data) => setJobs(data));
  }, []);


  const filteredJobs = jobs.filter(job => {
    if (job.job_name.toLowerCase().includes(search.toLowerCase()) || job.location.address.toLowerCase().includes(search.toLowerCase())) 
   return job
}) 

    return (

        <JobContainer jobs={filteredJobs} setSearch={setSearch}/>
    )
}

export default Jobs;