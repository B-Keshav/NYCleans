function UserProfile({ currentUser }) {
    if (!currentUser) return <h1>Loading...</h1>

    const { name, age, bio, organization } = currentUser

    const renderJobs = currentUser.jobs.map((job) => {
        return (
            <div key={`${currentUser.name} ${job.job_name}`}>
                <h2>{job.job_name}</h2>
                <img src={job.image} alt={job.job_name}/>
                <p>{job.description}</p>
            </div>
        )
    })

    return (
        <div>
            <h1>Welcome {name}</h1>
            <div className="profile">
                profile photo in the works
                <br />
                {name}
                <br />
                {age}
                <br />
                {bio}
                <br />
                {organization.name}
                <br />
                {organization.city}
                <br />
                {organization.description}
                <br />
                {organization.non_profit}
            </div>
            <div>
                <h1>Current Jobs</h1>
                {renderJobs}
            </div>
        </div>
    )
}

export default UserProfile;