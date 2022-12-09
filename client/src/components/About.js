import { useState } from "react";
import Map from "../Map";

function About ({user}) {
    const [isTrue, setIsTrue] = useState(false)


    function isItTrue () {
        setIsTrue(!isTrue)
        console.log(isTrue)
    }

    return (
        <div className="content">
            <h1> Hello, we're NYClean! </h1>
                <div className="flex">
                 <img className="volunteers" src="https://washingtonsqpark.org/wp-content/uploads/2022/09/IMG_5583-1300x975.jpeg"></img>
                 <img className="volunteers1" src="https://assets.centralparknyc.org/media/images/_1650x767_crop_center-center_none/TeenVolunteerDay-20191019-01302.JPG"></img>
                </div>
                    <section className="pop">
                        {isTrue?
                             <h1 onClick={isItTrue} classsName="header">Click to Collapse</h1>
                            :
                            <h1 onClick={isItTrue} classsName="header">Click here to learn more about us!</h1>
                        }
                    </section>
                        {isTrue? 
                        <section  className="firstsection">
                            <p className="more">Our Mission <br/>Keeping our City Clean!</p>
                            <p className="more">Core Members <br/> 
                                Madeline Dulchin <br/>
                                Angela Pace<br/>
                                Keshav Bhati<br/>
                                Harrison Wilson<br/>
                            </p>
                            <p className="more">Trees Planted:<br/>955,493</p>
                        </section>
                        :
                        <section  className="firstsection">
                            <p className="h1">Our Mission Statement </p>
                            <p  className="h2">Our Core Team</p>
                            <p  className="h3">Amount of Trees Planted!</p>
                        </section>
                    }
            
                    
                <Map user={user}/>
        </div>
    )
}

export default About;