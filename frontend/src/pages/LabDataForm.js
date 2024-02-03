import React, { useState } from 'react';
import './LabDataForm.css'; // Ensure this CSS file is updated with the new styles

const initialCases = [
  { id: 102434, disease: 'E. Coli', site: 'Skin', treatment: 'Gentamicine', dose: '10', outcome: 'Success' },
  { id: 223423, disease: 'E. Coli', site: 'Interstine', treatment: 'Colistin', dose: '20', outcome: 'Success' },
  { id: 323432, disease: 'E. Coli', site: 'Skin', treatment: 'Penecillin', dose: '5', outcome: 'Failure' },
  { id: 423423, disease: 'E. Coli', site: 'Urinary Tract', treatment: 'oxycilin', dose: '30', outcome: 'Success' },
  { id: 523432, disease: 'E. Coli', site: 'Interstine', treatment: 'Toblomicine', dose: '20', outcome: 'Failure' }
];

const bacCases = [
  { id: 0, bacName: "K. pneumoniae MKP103" , eVal: "0.0001", perIden: "100%"},
  { id: 1, bacName: "K. pneumoniae KNIH1", eVal: "0.01", perIden: "86%" },
];

const LabDataForm = () => {
  const [labData, setLabData] = useState([{ drugName: '', mic: '' }]);
  const [showForm, setShowForm] = useState(true);
  const [cases, setCases] = useState(initialCases);
  const [bCases, setbacCases] = useState(bacCases);

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
    setShowForm(false);
    console.log('Fasta:', event.target.fasta.files[0]);
    console.log('Site of Infection:', event.target.siteOfInfection.value);
    console.log('Lab Data:', labData);
  };

  return (
    <div className="lab-data-form-container">
      {showForm == true ? 
      <form onSubmit={handleSubmit} className="lab-data-form">
        <h2>Lab Data Submission</h2>
        <div className="input-group">
          <label htmlFor="fasta">Fasta File:</label>
          <input type="file" id="fasta" name="fasta" accept=".txt" required />
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
      : 
      <div className="dashboard-container1">
        <h1>Previous Patients Case</h1>
        {cases.map(caseItem => (
          <div key={caseItem.id} className="dashboard-item1">
            <h3>Patient ID:{caseItem.id}</h3>
            <h4>Disease: {caseItem.disease}</h4>
            <h4>Site of Infection: {caseItem.site}</h4>
            <h4>Treatment: {caseItem.treatment}</h4>
            <h4>Dose: {caseItem.dose} µg/mL</h4>
            <h4 style={{color: caseItem.outcome == "Success" ? "Green" : "Red"}}>Outcome: {caseItem.outcome}</h4>
          </div>
        ))}
        <h1>Bacterial Strains</h1>
        {bCases.map(bacCases => (
          <div key={bacCases.id} className="dashboard-item1">
            <h3>Bacterial Id:{bacCases.bacName}</h3>
            <h4>E Val: {bacCases.eVal}</h4>
            <h4>Percentage Identical: {bacCases.perIden}</h4>
          </div>
        ))}
      </div>}
    </div>
  );
};

export default LabDataForm;
