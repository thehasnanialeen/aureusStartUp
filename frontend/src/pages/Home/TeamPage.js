import React from 'react';
import aleen from '../../assets/aleen.jpg';
import joshua from '../../assets/joshua.jpg';
import isabella from '../../assets/isabella.jpg';
import chris from '../../assets/chris.jpg';
import wyatt from '../../assets/wyatt.jpg';
import emmanuel from '../../assets/emmanuel.jpg';
import './TeamPage.css';

const TeamPage = () => {
    const employees = [
        { id: 1, name: 'Joshua - Team Lead', image: joshua },
        { id: 2, name: 'Chris - Market Research', image: chris },
        { id: 3, name: 'Isabella - Market Research', image: isabella },
        { id: 4, name: 'Emmanuel - Product Designer', image: emmanuel },
        { id: 5, name: 'Wyatt - Tech Lead', image: wyatt },
        { id: 6, name: 'Aleen - Tech Lead', image: aleen },
    ];

    return (
    <div className="TeamPage">
    <h1>Meet Our Team</h1>
    <div className="EmployeeContainer">
        {employees.map(employee => (
            <div className="EmployeeCard" key={employee.id}>
                <img src={employee.image} alt={employee.name} />
                <div className="EmployeeCardOverlay">
                    <h3>{employee.name}</h3>
                </div>
            </div>
        ))}
    </div>
</div>

    );
};

export default TeamPage;
