import { useState } from 'react';
import './App.css';

function App() {
  const [rows, setRows] = useState([{ fullName: '', email: '', salary: '' }]);

  const addRow = () => {
    setRows([...rows, { fullName: '', email: '', salary: '' }]);
  };

  const updateRow = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = value;
    setRows(newRows);
  };

  const deleteRow = (index) => {
    const newRows = rows.filter((val, i) => i !== index);
    setRows(newRows);
  };

  return (
    <div className="container">
      <h1>Employee Details</h1>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email Address</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>
                <input
                  className="input-field"
                  placeholder="Full Name"
                  value={row.fullName}
                  onChange={(e) => updateRow(index, 'fullName', e.target.value)}
                />
              </td>
              <td>
                <input
                  className="input-field"
                  placeholder="Email Address"
                  value={row.email}
                  onChange={(e) => updateRow(index, 'email', e.target.value)}
                />
              </td>
              <td>
                <input
                  className="input-field"
                  placeholder="Salary"
                  value={row.salary}
                  onChange={(e) => updateRow(index, 'salary', e.target.value)}
                />
              </td>
              <td>
                <button
                  className="delete-button"
                  onClick={() => deleteRow(index)}
                  disabled={index === 0} // Disable delete button for the first row
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="add-button" onClick={addRow}>+ Add Row</button>
    </div>
  );
}

export default App;
