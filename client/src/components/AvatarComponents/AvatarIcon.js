import React from "react";

function AvatarIcon ({icon}) {
    return(
        <div className="avatarCard">
        <img src={icon} className="avatarIcon" />
        </div>
    )
}

export default AvatarIcon;
