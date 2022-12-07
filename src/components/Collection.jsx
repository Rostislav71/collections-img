import React from "react";

export const Collection = ({name , images}) => {
    return (
        <div className="collection">
            <img src={images[0]} className="img-big" alt="" />
            <div className="collection-bottom">
                <img src={images[1]} className="img-mini" alt="" />
                <img src={images[2]} className="img-mini" alt="" />
                <img src={images[3]} className="img-mini" alt="" />
            </div>
            <p>{name}</p>
        </div>
    )
}