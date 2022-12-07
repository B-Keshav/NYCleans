function UserProfile({ currentUser }) {
    if (!currentUser) return <h1>Loading...</h1>

    console.log(currentUser)

    const { username, age, bio, organization } = currentUser
    console.log(currentUser.jobs)
    const renderJobs = currentUser.jobs.map((job) => {
        return (
            <div key={`${currentUser.username} ${job.job_name}`}>
                <h2>{job.job_name}</h2>
                <img src={job.image} alt={job.job_name}/>
                <p>{job.description}</p>
            </div>
        )
    })

    return (
        <div>
            <h1>Welcome {username}</h1>
            <div className="profile">
                profile photo in the works
                <br />
                {username}
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
                <h1>Curent Jobs</h1>
                {renderJobs}
            </div>
        </div>
    )
}

export default UserProfile;