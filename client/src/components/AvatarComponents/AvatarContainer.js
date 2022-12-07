import React from "react";
import AvatarIcon from "./AvatarIcon";
import "./avatar.css"

function AvatarContainer({setAvatar, avatar}) {

    const apple = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWU6o-k-mRkI-czpDRBw6O96ImgN5dun-W-WeRtxwxO2QBfJ0kLqKasuVUY6hPukil8yQ&usqp=CAU"
    const bin = "https://static.vecteezy.com/system/resources/previews/002/079/630/non_2x/recycle-green-bin-free-vector.jpg"
    const boat = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWIMNd1rndllUwQZxOvC7Bd3l69_0AwwYzSvQFMX3F5ZYyRcy4rHIPQ7kA67-6XDu9RcM&usqp=CAU"
    const flower = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiTBtZrNY98RV59SZ_0k2lasJvO8r6Fc1m-jNktQM&s"
    const matcha = "https://i.etsystatic.com/5355657/r/il/03f719/1630887131/il_fullxfull.1630887131_ondd.jpg"
    const owl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa5yutxtcuCiL6R3u3zh6gLQyR3Zz8RY4bLg&usqp=CAU"
    const paint = "https://www.kindpng.com/picc/m/736-7368910_green-face-paint-former-icon-green-face-paint.png"
    const raccoon = "https://cdn-icons-png.flaticon.com/512/141/141849.png"
    const recycle = "https://st3.depositphotos.com/9182380/37620/v/600/depositphotos_376202150-stock-illustration-recycle-set-sign-isolated-flat.jpg"
    const tree = "https://t3.ftcdn.net/jpg/02/19/50/46/360_F_219504655_l2jR00FqQ2fqebFh9l6YJseuDOaAMWTx.jpg"

    const iconArray = [apple, bin, boat, flower, matcha, owl, paint, raccoon, recycle, tree]

    const iconsAsElements = iconArray.map(icon => {
        return (
            <AvatarIcon icon={icon} key={icon} setAvatar={setAvatar} avatar={avatar}/>
        )
    })

    return (
        <div>
            <h5>Select an Avatar</h5>
            {iconsAsElements}
        </div>
    )
}

export default AvatarContainer;