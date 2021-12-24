import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'semantic-ui-react';


export default function Userlist() {

  const [APIData, setAPIData] = useState([]);
useEffect(() => {
       
}, [])

useEffect(() => {
  axios.get(`https://61a9de4033e9df0017ea3fd6.mockapi.io/FakeData`)
      .then((response) => {
          setAPIData(response.data);
      })
}, [])

  return (
    <div className="user"> <h1>  User List  </h1></div>,
    <div className='userlist'>
      
      <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                      {APIData.map((data) => {
                    return (
                     <Table.Row>
                     <Table.Cell>{data.firstName}</Table.Cell>
                     <Table.Cell>{data.lastName}</Table.Cell>
                     <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                     </Table.Row>
                          )})}
                </Table.Body>
         </Table>

    </div>
  );
}


