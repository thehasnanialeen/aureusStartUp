import React, { useState } from 'react';
import './LabDataForm.css'; // Ensure this CSS file is updated with the new styles

const LabDataForm = () => {
  const [labData, setLabData] = useState([{ drugName: '', mic: '' }]);

  const handleLabDataChange = (index, event) => {
    const values = [...labData];
    if (event.target.name === "drugName") {
      values[index].drugName = event.target.value;
    } else {
      values[index].mic = event.target.value;
    }
    setLabData(values);
  };

  const handleAddFields = () => {
    setLabData([...labData, { drugName: '', mic: '' }]);
  };

  const handleRemoveFields = index => {
    const values = [...labData];
    values.splice(index, 1);
    setLabData(values);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Fasta:', event.target.fasta.files[0]);
    console.log('Site of Infection:', event.target.siteOfInfection.value);
    console.log('Lab Data:', labData);
  };

  return (
    <div className="lab-data-form-container">
      <form onSubmit={handleSubmit} className="lab-data-form">
        <h2>Lab Data Submission</h2>
        <div className="input-group">
          <label htmlFor="fasta">Fasta File:</label>
          <input type="file" id="fasta" name="fasta" accept=".fasta" required />
        </div>

        <div className="input-group">
          <label htmlFor="siteOfInfection">Site of infection:</label>
          <input type="text" id="siteOfInfection" name="siteOfInfection" placeholder="Enter site of infection" required />
        </div>
        <h2>Lab Drug Tests:</h2>
        {labData.map((inputField, index) => (
          <div key={index} className="lab-data-group">
            <label htmlFor={`drugName-${index}`}>Drug Name:</label>
            <input
              type="text"
              name="drugName"
              id={`drugName-${index}`}
              placeholder="Drug Name"
              value={inputField.drugName}
              onChange={(event) => handleLabDataChange(index, event)}
              required
            />
            <label htmlFor={`mic-${index}`}>MIC(µg/mL):</label>
            <input
              type="number"
              name="mic"
              id={`mic-${index}`}
              placeholder="MIC"
              value={inputField.mic}
              onChange={(event) => handleLabDataChange(index, event)}
              required
            />
            <button type="button" onClick={() => handleRemoveFields(index)} className="remove-field">-</button>
          </div>
        ))}
      <div className="form-actions">
        <button type="button" onClick={handleAddFields} className="add-more">Add More</button>
        <button type="submit">Search</button>
        <button type="submit">Create a Case</button>
      </div>
      </form>
    </div>
  );
};

export default LabDataForm;
