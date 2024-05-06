import React, { useState, useEffect } from 'react';
import JobList from './JobCard';
import FilterPanel from './FilterPanel';

function Fetching() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    minExp: 0,
    companyName: '',
    location: '',
    remote: '',
    techStack: '',
    jobRole: '',
    minBasePay: 0,
  });
  const [offset, setOffset] = useState(0);
  const limit = 10;

  useEffect(() => {
    fetchJobsg();
  }, [filters, offset]);

  const fetchJobs = () => {
    setLoading(true);
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const body = JSON.stringify({
      limit,
      offset,
      ...filters,
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body,
    };

    fetch('https://api.weekday.technology/adhoc/getSampleJdJSON', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if (data && data.jobs) {
          setJobs(data.jobs);
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  const handleLoadMore = () => {
    setOffset((prevOffset) => prevOffset + limit);
  };

  const handleSearch = (searchTerm) => {
    setFilters((prevFilters) => ({ ...prevFilters, companyName: searchTerm }));
  };

  return (
    <div className="app">
      <FilterPanel filters={filters} setFilters={setFilters} onSearch={handleSearch} />
      <JobList jdList={jobs} />
      {loading && <p>Loading...</p>}
      {!loading && jobs.length === 0 && <p>No jobs found.</p>}
      {!loading && jobs.length > 0 && (
        <button onClick={handleLoadMore} disabled={loading}>
          Load More
        </button>
      )}
    </div>
  );
}

export default Fetching;