import React from 'react'
import FeedCard from "./FeedCard";
import GridContainer from "../material-kit-react/components/Grid/GridContainer.js";

class MainPage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <GridContainer
                direction="column"
                alignItems="center"
                justify="center"
                style={{margin:0}}
            >
                {this.props.feedlist.map(feedurl => (
                    <FeedCard URL={feedurl}/>
                ))}

            </GridContainer>
        )
    }
}

export default MainPage;