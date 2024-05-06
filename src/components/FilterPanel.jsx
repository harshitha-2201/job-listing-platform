import React from 'react';

const FilterPanel = ({ filters, setFilters, onSearch }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div className="filter-panel">
      <input
        type="number"
        name="minExp"
        value={filters.minExp}
        onChange={handleChange}
        placeholder="Min Experience"
      />
      <input
        type="text"
        name="companyName"
        value={filters.companyName}
        onChange={handleChange}
        placeholder="Company Name"
      />
      <input
        type="text"
        name="location"
        value={filters.location}
        onChange={handleChange}
        placeholder="Location"
      />
      <select name="remote" value={filters.remote} onChange={handleChange}>
        <option value="">Remote/On-site</option>
        <option value="remote">Remote</option>
        <option value="on-site">On-site</option>
      </select>
      <input
        type="text"
        name="jobRole"
        value={filters.jobRole}
        onChange={handleChange}
        placeholder="Role"
      />
      <input
        type="number"
        name="minBasePay"
        value={filters.minBasePay}
        onChange={handleChange}
        placeholder="Min Base Pay"
      />
      <button onClick={() => onSearch(filters.companyName)}>Search</button>
    </div>
  );
};

export default FilterPanel;