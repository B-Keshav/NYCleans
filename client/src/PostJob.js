import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function PostJob() {
    const [newJobForm, setNewJobForm] = useState({
        name: "",
        description: "",
        image: "",
        address: "",
        city: "",
        state: "",
        zip: ""
    })

    let history = useHistory()

    function handleChange(e) {
        const { name, value } = e.target

        setNewJobForm({ ...newJobForm, [name]: value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch('/jobs', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                jobName: newJobForm.name,
                description: newJobForm.description,
                image: newJobForm.image,
                address: newJobForm.address,
                city: newJobForm.city,
                state: newJobForm.state,
                zip: newJobForm.zip
            })
        })
            .then(r => r.json())
            .then(data => console.log(data))
        history.push('/jobs')
        history.go()
        // window.location.reload()
    }


    return (
        <div className="content">
            <h1>Post a Job!</h1>

            <form className="post-job-form" onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    type="text"
                    placeholder="Job Title"
                    name="name"
                />
                <input
                    onChange={handleChange}
                    type="text"
                    placeholder="Job Description"
                    name="description"
                />
                <input
                    onChange={handleChange}
                    type="text"
                    placeholder="Image URL"
                    name="image"
                />
                <input
                    onChange={handleChange}
                    type="text"
                    placeholder="Street Address"
                    name="address"
                />
                <input
                    onChange={handleChange}
                    type="text"
                    placeholder="City"
                    name="city"
                />
                <input
                    onChange={handleChange}
                    type="text"
                    placeholder="State"
                    name="state"
                />
                <input
                    onChange={handleChange}
                    type="text"
                    placeholder="Zip"
                    name="zip"
                />
                <button type="submit" className="submitJob">Submit Job</button>
            </form>
        </div>
    )
}

export default PostJob;