import { useEffect, useState } from "react"

function UsesrPage({ user }) {
    const [allUsers, setAllUsers] = useState([])

    useEffect(() => {
        fetch('/users')
            .then(res => res.json())
            .then(data => setAllUsers(data))
    }, [])

    if (!user) {
        const renderAllUsers = allUsers.map(user => {
            const renderUserJobs = user.jobs.map(job => {
                return (
                    <li>
                        <p><strong>{job.job_name}</strong></p>
                        <p>{job.description}</p>
                    </li>
                )
            })
            return (
                <div className="jobCard">
                    <h2>{user.username}</h2>
                    <img src={user.avatar} alt={user.username} />
                    {user.organization.name === 'None' ?
                        null
                        :
                        <p><strong>Affiliated with: </strong>{user.organization.name}</p>
                    }
                    <p><strong>Bio: </strong>{user.bio}</p>
                    <p><strong>Current Jobs:</strong></p>
                    <ul>
                        {renderUserJobs.length > 0 ?
                            renderUserJobs
                            :
                            <li>Currently Not Signed Up for Any Jobs</li>
                        }
                    </ul>
                </div>
            )
        })
        return (
            <div className="usersProfile">
                <h1>Our Community</h1>
                <div className="jobContainer">
                    {renderAllUsers}
                </div>
            </div>
        )
    } else {
        const filterAllUsers = allUsers.filter(stranger => {
            return stranger.username !== user.username
        })


        const renderAllUsers = filterAllUsers.map(user => {
            const renderUserJobs = user.jobs.map(job => {
                return (
                    <li>
                        <p><strong>{job.job_name}</strong></p>
                        <p>{job.description}</p>
                    </li>
                )
            })
            return (
                <div className="jobCard">
                    <h2>{user.username}</h2>
                    <img src={user.avatar} alt={user.username} />
                    {user.organization.name === 'None' ?
                        null
                        :
                        <p><strong>Affiliated with: </strong>{user.organization.name}</p>
                    }
                    <p><strong>Bi0: </strong>{user.bio}</p>
                    <p><strong>Current Jobs:</strong></p>
                    <ul>
                        {renderUserJobs.length > 0 ?
                            renderUserJobs
                            :
                            <li>Currently Not Signed Up for Any Jobs</li>
                        }
                    </ul>
                </div>
            )
        })
        return (
            <div className="usersProfile">
                <h1>Our Community</h1>
                <div className="jobContainer">
                    {renderAllUsers}
                </div>
            </div>
        )
    }



}

export default UsesrPage