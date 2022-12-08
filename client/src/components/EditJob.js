import { useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom'

function EditJob() {
    const [editJob, setEditJob] = useState(null)
    const [editForm, setEditForm] = useState({
        job_name: "",
        description: "",
        image: "",
        address: "",
        state: "",
        city: "",
        zip: null
    })

    let { id } = useParams()
    let history = useHistory()

    useEffect(() => {
        fetch(`/jobs/${id}`)
            .then(res => res.json())
            .then(data => setEditJob(data))
    }, [])

    if (!editJob) return <h1>Loading...</h1>

    const { description, image, job_name, location, users } = editJob

    const renderUsers = users.map((user) => {
        return <li key={user.id}>{user.username}</li>
    })

    function handleChange(e) {
        const { name, value } = e.target

        setEditForm({ ...editForm, [name]: value })
    }

    function handleSubmit(e){
        e.preventDefault()
    }

    return (
        <div className="edit_job">
            <h1>Edit Your Event:</h1>
            <form onSubmit={handleSubmit}>
                <label>Job Name:</label><br />
                <input
                    type="text"
                    name="job_name"
                    placeholder={job_name}
                    onChange={handleChange}
                    value={editForm.job_name}
                />
                <br />
                <label>Current Description:</label><br />
                <input
                    type="text"
                    name="description"
                    placeholder={description}
                    onChange={handleChange}
                    value={editForm.description}
                />
                <br />
                <label>Current Image: <br /> <img src={image} alt="edit_image" /></label><br />
                <input
                    type="text"
                    name="image"
                    placeholder={image}
                    onChange={handleChange}
                    value={editForm.image}
                />
                <br />
                <label>Current Address:</label><br />
                <input
                    type="text"
                    name="address"
                    placeholder={location.address}
                    onChange={handleChange}
                    value={editForm.address}
                />
                <br />
                <label>State:</label><br />
                <input
                    type="text"
                    name="state"
                    placeholder={location.state}
                    onChange={handleChange}
                    value={editForm.state}
                />
                <br />
                <label>City:</label><br />
                <input
                    type="text"
                    name="city"
                    placeholder={location.city}
                    onChange={handleChange}
                    value={editForm.city}
                />
                <br />
                <label>Zip:</label><br />
                <input
                    type="text"
                    name="zip"
                    placeholder={location.zip}
                    onChange={handleChange}
                    value={editForm.description}
                />
                <br />
                <button>Submit</button>
            </form>
            <h2>Current Volunteers:</h2>
            <ul>
                {renderUsers}
            </ul>
        </div>
    )

}

export default EditJob