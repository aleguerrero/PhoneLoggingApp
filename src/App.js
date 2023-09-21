import './App.css';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ViewButton from './ViewButton';

function App() {

  const data = [
    {
      id: 1,
      callDate: '24/01/2023',
      phoneNumber: '(206) 342-8631',
      personWhoCalled: 'Raegan Merritt',
      personWhoAttended: 'Colten Estes',
      phoneCallRecording: '/sounds/boomy-trap-drums-dark-loop_160bpm.mp3'
    },
    {
      id: 2,
      callDate: '20/03/2023',
      phoneNumber: '(717) 550-1675',
      personWhoCalled: 'Brittany Huerta',
      personWhoAttended: 'Douglas Russell',
      phoneCallRecording: '/sounds/dreampop-plucks-synths_93bpm_C.wav'
    },
    {
      id: 3,
      callDate: '23/04/2023',
      phoneNumber: '(248) 762-0356',
      personWhoCalled: 'Raelynn Short',
      personWhoAttended: 'Hezekiah McDowell',
      phoneCallRecording: '/sounds/drill-trap-drums-bassy-loop_132bpm_C_major.wav'
    },
    {
      id: 4,
      callDate: '08/05/2023',
      phoneNumber: '(253) 644-2182',
      personWhoCalled: 'Rayna Holmes',
      personWhoAttended: 'King Griffith',
      phoneCallRecording: '/sounds/lil-baby-x-future-trap-drums_159bpm.wav'
    },
    {
      id: 5,
      callDate: '13/05/2023',
      phoneNumber: '(212) 658-3916',
      personWhoCalled: 'Alicia Hansen',
      personWhoAttended: 'Charlie Avila',
      phoneCallRecording: '/sounds/vocal-shot-ocean-smooth-loop.wav'
    }
  ]

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
                <td>
                  <ViewButton phoneCallData={pc}/>
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
