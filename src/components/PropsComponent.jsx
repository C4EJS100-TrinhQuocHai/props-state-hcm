import React, { Component } from 'react'

export default class PropsComponent extends Component {
  render() {
    // let result1 = this.props.title;
    // let result2 = this.props.age;
    /* 
    let student={
      name:"hoa",
      age:"25"
    }
    let {name}=student
     */
      let {title,age}=this.props;
    // console.log("111111", title);
    // console.log("111111", age);
    // cú pháp destructoring (phá vỡ)

    return (
      <div>Props</div>
    )
  }
}
