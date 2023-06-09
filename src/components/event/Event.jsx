import React, { Component } from 'react'

export default class Event extends Component {
  handleClick=(param)=>{
    console.log("click event ",param);
  }
  render() {
    return (
     <>
        <button onClick={()=>{
          this.handleClick("truyền đối số")
        }}>click event </button>
     </>
    )
  }
}
