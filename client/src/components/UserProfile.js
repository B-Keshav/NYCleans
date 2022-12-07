function UserProfile({ currentUser }) {
    console.log(currentUser)
    if (!currentUser) return <h1>Loading...</h1>

    

    const { username, age, bio, organization } = currentUser
    console.log(currentUser.jobs)
    const renderJobs = currentUser.jobs.map((job) => {
        return (
         <>
            <li key={`${currentUser.username} ${job.job_name}`}className="profileJobs">
                <h2>{job.job_name}</h2>
                <img src={job.image} alt={job.job_name}/>
                <p>{job.description}</p>
            </li>
            <br></br>
            </>
        )
    })

    return (
        <div className="profile">
            <h1>Welcome {username}</h1>
            <div>
                <img src={currentUser.avatar} alt="avatar" className={"profilePicture"}/>
                <br />
                <h4 className="username">{username}</h4>
                <p><strong>Age:</strong> {age}</p>
                <p><strong>Bio:</strong> {bio}</p>
                <p><strong>Organization Affiliation:</strong> {organization.name}</p>
                <p><strong>Based in:</strong> {organization.city}</p>
            </div>
            <div>
                <h1>Current Jobs</h1>
                <ul>{renderJobs}</ul>
            </div>
        </div>
    )
}

export default UserProfile;