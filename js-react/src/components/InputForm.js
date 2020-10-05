import React from "react";

class InputForm extends React.Component{
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
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input type="text" placeholder="URL of Feed" value={this.state.value} onChange={this.handleChange}/>
                </label>
            </form>
        );
    }
}

export default InputForm