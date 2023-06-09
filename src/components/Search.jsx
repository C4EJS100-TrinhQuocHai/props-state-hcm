import React, { Component } from 'react'

export default class Search extends Component {
    constructor(){
        super()
        this.state={
            keySearch:"",
        }
    }
    handleChange=(event)=>{
        console.log(event.target.value);
        this.setState({keySearch:event.target.value})
    }
    handleClick=()=>{
        this.props.getKeySearch(this.state.keySearch)
    }
  render() {
    return (
     <> 
            <input 
            onChange={this.handleChange}
            type="text"
             />
            <button onClick={this.handleClick}>click </button>
     </>
    )
  }
}
