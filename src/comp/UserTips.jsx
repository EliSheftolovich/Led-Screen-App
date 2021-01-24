import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class Usertips extends Component {
    render() { 
        return (
            <div>
<h6>תיבת המלצות</h6>
<Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
    </tr>
  </tbody>
</Table>
            </div>
          );
    }
}
 
export default Usertips;