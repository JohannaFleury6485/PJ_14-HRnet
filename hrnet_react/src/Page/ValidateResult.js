import React from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';


function ValidateResult() {
  const users = useSelector(state => state.user.users);
  const [search, setSearch] = useState('');

   // Liste des colonnes 
  const columns = ([
    { name: 'First Name',
      selector: row => row.firstName,
      sortable: true,},
    { name: 'Last Name',
      selector: row => row.lastName,
      sortable: true,},
    { name: 'Date of Birth',
      selector: row => row.dateOfBirth,
      sortable: true,},
    { name: 'Date Start',
      selector: row => row.dateStart,
      sortable: true,},
    { name: 'Department',
      selector: row => row.department,
      sortable: true,},
    { name: 'Street',
      selector: row => row.street,
      sortable: true,},
    { name: 'City',
      selector: row => row.city,
      sortable: true,},
    { name: 'Zip Code',
      selector: row => row.zipCode,
      sortable: true,},
  ]);

  const filteredUsers = users.filter(user =>
    user.firstName.toLowerCase().includes(search.toLowerCase()) ||
    user.lastName.toLowerCase().includes(search.toLowerCase()) ||
    user.dateOfBirth.toLowerCase().includes(search.toLowerCase()) ||
    user.dateStart.toLowerCase().includes(search.toLowerCase()) ||
    user.department.toLowerCase().includes(search.toLowerCase()) ||
    user.street.toLowerCase().includes(search.toLowerCase()) ||
    user.city.toLowerCase().includes(search.toLowerCase()) ||
    user.zipCode.toLowerCase().includes(search.toLowerCase())
  );
  
  return (
    <div>
      <h2 className="title-employee">Current Employees</h2>
      <Link to="/" className='space-home'>Home</Link>
      <div className='input-space-employee'>
        <div>
          Search:
          <input 
            type="text" 
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      </div>
      
      <DataTable 
      title="Current Employees"
      columns={columns}
      data={filteredUsers}
      pagination
        paginationPerPage={10}
      />

    </div>
  )
};

export default ValidateResult;
