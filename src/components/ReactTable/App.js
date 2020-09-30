import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";

class ReactTableEx extends Component {
  render() {
    const data = [
      {
        name: 'Ahana',
        age: 22
      }, {
        name: 'Peter',
        age: 40
      }, {
        name: 'Ayaan',
        age: 26
      }, {
        name: 'Virat',
        age: 30
      }, {
        name: 'Rohit',
        age: 32
      }, {
        name: 'Dhoni',
        age: 37
      }]
    const columns = [{
      Header: 'Name',
      accessor: 'name'
    }, {
      Header: 'Age',
      accessor: 'age'
    }]
    return (
      <div>
        <h1>React Table</h1>
        <ReactTable
          data={data}
          columns={columns}
          defaultPageSize={2}
          pageSizeOptions={[2, 4, 6]}
        />
      </div>
    )
  }
}
export default ReactTableEx;