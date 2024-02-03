import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LabDataForm.css'; // Ensure CSS is properly set up
import './Dashboard.css';

// Example case data
const initialCases = [
    { id: 102434, disease: 'Streptococcus viridis-123', site: 'Knee', treatment: '', dose: '', outcome: '' },
    { id: 223423, disease: 'Escherichia coli O157:H7', site: 'Gastrointestinal', treatment: '', dose: '', outcome: '' },
    { id: 323432, disease: 'Mycobacterium tuberculosis', site: 'Lung', treatment: '', dose: '', outcome: '' },
    { id: 423423, disease: 'Staphylococcus aureus', site: 'Skin', treatment: '', dose: '', outcome: '' },
    { id: 523432, disease: 'Clostridium difficile', site: 'Colon', treatment: '', dose: '', outcome: '' }
  ];
  

  const Dashboard = () => {
    const [cases, setCases] = useState(initialCases);
    const navigate = useNavigate(); // Use the useNavigate hook
  
    const handleComplete = (caseData) => {
      // Navigate to CaseForm and pass caseData as state
      navigate('/CaseForm', { state: caseData });
    };
  
    return (
      <div className="dashboard-container">
        {cases.map(caseItem => (
          <div key={caseItem.id} className="dashboard-item">
            <h3>Patient ID:{caseItem.id}</h3>
            <h4>Disease: {caseItem.disease}</h4>
            <h4>Site: {caseItem.site}</h4>
            {/* Implement inputs or display for treatment, dose, outcome as needed */}
            <button onClick={() => handleComplete(caseItem)}>Complete</button>
          </div>
        ))}
      </div>
    );
  };
  
  export default Dashboard;