import React, { Component } from 'react'
import Student from './Student';

export default class ListStudents extends Component {
    render() {
        let getData = this.props.data;
        console.log("getData", getData);
        let result = getData.map((itemValue,index) => {
            return <Student key={index} studentItem={itemValue}></Student>
        })
        return (
            <>
                <div>  list student </div>
                <div>{result}</div>
            </>
        )
    }
}
