import React from 'react';
import './Search.css';

class Search extends React.Component {
    render() {
      return (
    <div className="Search">
      <header className="Search-header">
        <h1>DicomWebViewer Search</h1>
      </header>
      <body className="Search-body">
        <div className="search-input">
            <label for="patient-id">Patient ID:</label> 
            <input type="text" id="patient-id"></input>
            <input type="submit" id="patient-id-btn" value="Search"></input> <br></br>
            
            <label for="patient-name">Patient Name:</label> 
            <input type="text" id="patient-name"></input>
            <input type="submit" id="patient-name-btn" value="Search"></input> <br></br>
            
            <label for="study-description">Study Description:</label> 
            <input type="text" id="study-description"></input>
            <input type="submit" id="study-description-btn" value="Search"></input> <br></br>

            <label for="study-date">Study Date:</label> 
            <input type="date" id="study-date"></input>
            <input type="submit" id="study-date-btn" value="Search"></input>
        </div>
        <div className='Footer'>
            <input type="checkbox" id="Server-status" checked></input> 
            <label for="Server-status">Orthanc Server Status</label>   
        </div>
      </body>
    </div>    
      );
    }
  };

export default Search;