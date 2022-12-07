import React from "react";

function PostJob() {

    function handleSubmit(e) {
        e.preventDefault()
        fetch('/jobs', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                jobName: e.target.name.value,
                description: e.target.description.value,
                address: e.target.address.value,
                city: e.target.city.value,
                state: e.target.state.value,
                zip: e.target.zip.value
            })
        })
            .then(r=>r.json())
            .then(data=>console.log(data))
            console.log('submitted')
    }


    return (
        <div className="content">
            <h1>Post a Job!</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Job Title"
                    name="name"
                />
                <input
                    type="text"
                    placeholder="Job Description"
                    name="description"
                />
                <input
                    type="text"
                    placeholder="Street Address"
                    name="address"
                />
                <input
                    type="text"
                    placeholder="City"
                    name="city"
                />
                <input
                    type="text"
                    placeholder="State"
                    name="state"
                />
                <input
                    type="text"
                    placeholder="Zip"
                    name="zip"
                />
                <button type="submit">Submit Job</button>
            </form>

        </div>
    )
}

export default PostJob;