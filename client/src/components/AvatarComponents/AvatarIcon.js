import React, { useState } from "react";

function AvatarIcon({ icon, setAvatar, avatar }) {
    const [divStyle, setDivStyle] = useState({
        borderColor: "black"
    })

    return (
        <>
            <div className="avatarCard" style={divStyle}>

                <img src={icon} className="avatarIcon" alt={icon} onClick={e => setAvatar(icon)} />
                {
                avatar === icon ?
                    <p className="avatarSelected">Selected</p>
                    : null
            }
            </div>

        </>
    )
}

export default AvatarIcon;
