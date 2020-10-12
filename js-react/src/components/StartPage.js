import React from "react"
import InputForm from "./InputForm"
import "../styles/StartPage.css";
import GridContainer from "../material-kit-react/components/Grid/GridContainer.js";
import GridItem from "../material-kit-react/components/Grid/GridItem.js";
import CustomInput from "../material-kit-react/components/CustomInput/CustomInput.js";
class StartPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {value:""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(event){
        this.setState({value:event.target.value});
        console.log(event.target.value);
    }

    /*
    In order to allow the submitted feedURL to be accessible from the parent component
    I need to use a handling method that is passed from the parent
    A la <InputForm handleSubmit={this.parentHandleMethod}/>
    That way I'll be able to take the input from the form and use it for other things
    in this case, using the url to parse the respective feed.
    */

    handleSubmit(event) {
        alert('This feedURL was submitted: ' + this.state.value);
        this.props.addURL(this.state.value);
        event.preventDefault();
    }

    render(){
        return(
            <GridContainer
               spacing={0}
               style={{margin:0,
                        width:"100%",
                        minHeight:"100vh"}}
               alignItems="center"
               justify="center"
            >

                <GridItem xs={3}>
                    <h1> Get Started!</h1>
                    <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                    <CustomInput
                        id="float"
                        labelText="RSS URL"
                        inputProps={{//placeholder:"RSS URL"
                             }}
                        formControlProps={{
                            fullWidth:true
                        }}
                        value={this.state.value}
                    />
                    </form>
                </GridItem>
            </GridContainer>



        );
    }
}
/*
This used to be returned.
<div className="StartPage">
                <h1>Get Started!</h1>
                <InputForm addURL={this.props.addURL}/>
                <p>Current feeds are: {this.props.currentURLs}</p>
            </div>
 */
export default StartPage;
