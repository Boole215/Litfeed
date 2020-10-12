import React from "react";
import StartPage from "./components/StartPage";
import MainPage from "./components/MainPage";
import "./styles.css"



class App extends React.Component{
    constructor(props){
       super(props);
       this.state={feedurls:[],displayStart: true}

       this.BoxitRoxit = this.BoxitRoxit.bind(this);

    }

    //This is the callback function that I'm using to update the feedurls list.
    BoxitRoxit(newURL){
        console.log("This is the new URL: " + newURL);

        this.setState(() => {
            const feedurls = this.state.feedurls.concat(newURL);
            return{feedurls, displayStart: false};
            })
        }



    render(){
        return(
            <div>
                {this.state.displayStart
                &&
                <StartPage currentURLs = {this.state.feedurls} addURL={this.BoxitRoxit}/>}
                {
                    !this.state.displayStart
                    &&
                    <MainPage feedlist={this.state.feedurls}/>
                }


            </div>
            )
    }


}
export default App;