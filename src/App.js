import React, { Component } from 'react'
import PropsComponent from './components/PropsComponent'
import ListStudents from './components/ListStudents'
import Event from "./components/event/Event"
import PropsFunc from './components/PropsFunc'
import Search from './components/Search'
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      nameStudent: "Thương",
      count: 0,
      dataStudent: [
        { name: "Hoa", age: 20 },
        { name: "nhung", age: 25 },
        { name: "Hồng", age: 18 },
        { name: "huệ", age: 19 },
        { name: "mai", age: 16 },
      ]
    }
  }
  handleClickIncrease = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }
  handleClickDecrease = () => {
    this.setState({
      count: this.state.count - 1,
    })
  }
  search=(resultSearch)=>{
    console.log("resultSearch", resultSearch);
  }
  render() {
    console.log("component vừa mới render!");
    return (
      <>
        {/* 
       1.Props : properties ( thuộc tính)
       ==> nó dùng để truyền dữ liệu từ cha sang con 
       2.State : dùng để quản lí trạng thái dữ liệu của component;
       cách khởi tạo state
        b1: khởi tạo constructor
          super()
        -muốn thay đổi state thì dùng setSate()
        -khi setSate() component render()
        3.event sự kiện trong react
        */}
        <PropsComponent title="Thương" age="25"></PropsComponent>
        <div> {this.state.nameStudent}</div>
        <div> {this.state.count}</div>
        <button onClick={this.handleClickIncrease}> click tăng </button>
        <button onClick={this.handleClickDecrease}> click giảm </button>
        <ListStudents data={this.state.dataStudent}></ListStudents>
          <Event></Event>
          <PropsFunc address="tự cường"></PropsFunc>
          <Search getKeySearch={this.search}></Search>
      </>

    )
  }
}
