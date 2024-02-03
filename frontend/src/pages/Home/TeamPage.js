import React from 'react';
import profile1 from '../../assets/profile_pic.jpg';
import './TeamPage.css';

const TeamPage = () => {
    const employees = [
        { id: 1, name: 'Wyatt Drew - Founder & CEO', image: profile1 },
        { id: 2, name: 'Wyatt Drew - Sales Director', image: profile1 },
        { id: 3, name: 'Wyatt Drew - Event Director', image: profile1 },
        { id: 4, name: 'Wyatt Drew - Product Designer', image: profile1 },
        { id: 5, name: 'Wyatt Drew - Research & Development', image: profile1 },
        { id: 6, name: 'Wyatt Drew - Event Specialist', image: profile1 },
        { id: 7, name: 'Wyatt Drew', image: profile1 },
        { id: 8, name: 'Wyatt Drew', image: profile1 },
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
