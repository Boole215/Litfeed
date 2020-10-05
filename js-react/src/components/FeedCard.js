import React from "react";

class FeedCard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showImage:false
        }
    }

    render(){
        return(
            <div>
                {this.state.showImage && <img src={this.props.imgurl} alt="Pic of feed"/>}
                <h1>{this.props.title} </h1>
                <h3>{this.props.description}</h3>
            </div>
        );
    }
}


export default FeedCard;