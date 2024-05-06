import React from 'react';

const JobList = ({ jdList }) => {
  if (!jdList || jdList.length === 0) {
    return <p>No job listings available.</p>;
  }

  return (
    <div>
      <h2>Job Listings</h2>
      <ul>
        {jdList.map((job, index) => (
          <li key={index}>
            <h3>{job.jobRole}</h3>
            <p>Company: {job.companyName}</p>
            <p>Location: {job.location}</p>
            <p>
              Description: {job.jobDetailsFromCompany.substring(0, 100)}...
            </p>
            <p>Experience: {job.minExp}</p>
            <p>Base Pay: {job.minBasePay}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;