import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ApiConnectivity() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <table border="1" cellPadding="10" cellSpacing="0" width="100%">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {users.map((element) => ( // Corrected map syntax
            <tr key={element.id}> {/* Corrected key prop */}
              <td>{element.id}</td>
              <td>{element.name}</td>
              <td>{element.email}</td>
              <td>{element.phone}</td>
              <td>{element.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ApiConnectivity;