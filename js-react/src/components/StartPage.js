import React from "react"
import InputForm from "./InputForm"
import "../styles/StartPage.css";

class StartPage extends React.Component {

    render(){
        return(
            <div className="StartPage">
                <h1>Get Started!</h1>
                <InputForm addURL={this.props.addURL}/>
                <p>Current feeds are: {this.props.currentURLs}</p>
            </div>
        );
    }
}

export default StartPage;
