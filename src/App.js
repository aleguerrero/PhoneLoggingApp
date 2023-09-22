import './App.css';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ViewButton from './ViewButton';
import data from './data.json'
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    document.title = 'Phone Call Records';
  }, []);

  return (
    <div className='container'>
      <h1>Phone Call Records</h1>
      <Table responsive>
        <thead>
          <tr>
            <th scope='col'>Call Date</th>
            <th scope='col'>Phone Number</th>
            <th scope='col'>Person Who Called</th>
            <th scope='col'>Person Who Attended</th>
            <th scope='col'>Duration</th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
          {
            data
            && data.map((pc) => (
              <tr id={pc.id}>
                <td>{pc.callDate}</td>
                <td>{pc.phoneNumber}</td>
                <td>{pc.personWhoCalled}</td>
                <td>{pc.personWhoAttended}</td>
                <td>{pc.duration}</td>
                <td>
                  <ViewButton phoneCallData={pc} />
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  );
}

export default App;
