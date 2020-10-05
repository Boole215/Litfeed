import React from "react";

const FeedCard = props => {
    return(
        <div>
            <img src={props.imgurl} alt="Pic of feed"/>
            <h1>{props.title} </h1>
            <h3>{props.description}</h3>
        </div>
    );
}


export default FeedCard;