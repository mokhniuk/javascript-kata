import React from 'react';
// import styles from './search-styles.module.scss'

const Search = ({value, onChange}) => {
  return(
    <label className="search">
      <input
        type="search"
        value={value}
        onChange={onChange}
        placeholder="Search by ISBN or author's email"
        className="search-input"
        autoFocus
      />
    </label>
  )
};

export default Search;