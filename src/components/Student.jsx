import React, { Component } from 'react'

export default class Student extends Component {
  render() {
      let data = this.props.studentItem;
    return (
      <>
       <table>
        <tbody>
                    <tr>
                        <td>
                            {data.name}
                        </td>
                    </tr>
        </tbody>
       </table>
      </>
    )
  }
}
