import React from "react";
import GridItem from "../material-kit-react/components/Grid/GridItem.js";




class FeedCard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showImage:false,
            feedTitle:"FeedTitle",
            feedItems:[],
            First10:[]
        }
        const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

        let Parser = require('rss-parser');
        let parser = new Parser();
        let titleslist = [];
        (async () => {

            let feed = await parser.parseURL(CORS_PROXY + this.props.URL);
            //console.log(feed.title);


            await feed.items.forEach(item => {
               // console.log(item.title + '+' + item.link);


            })
            //The reason we have to set the state in the asynchronous function is that we cannot depend on the line
            //defining as having been executed by the time we concat feedItems with it. This is because of the nature of
            //asynchronous functions.

            titleslist = feed.items;
            console.log(titleslist);
            this.setState((prevstate) => ({
                showImage:prevstate.showImage,
                feedTitle:prevstate.feedTitle,
                feedItems:prevstate.feedItems.concat(titleslist)}));
            })()

        //console.log(titleslist);
        //console.log(this.state.feedItems);

        //this.state.feedItems.forEach(item => console.log(item));
        //this.titleOnClick.bind(this);
        console.log(this.state.feedItems);


    }

    titleOnClick(){
        let newTitle = prompt("Would you like to set a new title?");
        // eslint-disable-next-line eqeqeq
        if ("no" != newTitle){
            this.setState((prevstate) => ({showImage:prevstate.showImage,
                                                feedTitle: newTitle,
                                                feedItems:prevstate.feedItems}))}
    }







    render(){
        let first10 = this.state.feedItems.slice(0,11);
        console.log(this.state.feedItems);
        return(
            <GridItem xs={2}>
                {this.state.showImage && <img src={this.props.imgurl} alt="Pic of feed"/>}
                <h3 onClick={this.titleOnClick.bind(this)}>{this.state.feedTitle} </h3>
                <p>This is where a description will go!</p>
                <h5>Chapters</h5>
                <li style={{fontSize:"10px", listStyleType:"none"}}>
                    {first10.map(item => (
                        <ul><a href={item.link}>{item.title}</a></ul>
                    ))}
                </li>

            </GridItem>
        );
    }
}


export default FeedCard;