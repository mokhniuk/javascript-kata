import React, { useState, useEffect } from 'react';

import Search from './components/Search/Search';
import ListItem from './components/ListItem/ListItem';

import BOOKS_LIST from '../data/books.csv';
import MAGAZINES_LIST from '../data/magazines.csv';
import AUTHORS_LIST from '../data/authors.csv';


// TASKS
// 
// 1. Parse the data from the given CSV files in a meaningful structure.
// +. Print out a merged list of books and magazines with all their details sorted by title.
// +. Implement search:
//    +. By isbn.
//    +. By authors' email.
// 4. Add unit tests.
// 




// Parse data … ?

// const books_reader = new FileReader(books_list);
// const magazines_reader = new FileReader(magazines_list);
// const authors_reader = new FileReader(authors_list);

// Print sorted list

const BOOKS_AND_MAGAZINES_LIST = BOOKS_LIST.concat(MAGAZINES_LIST);
// console.log(BOOKS_AND_MAGAZINES_LIST);

const sortedLiteratureList = BOOKS_AND_MAGAZINES_LIST.sort((a, b) => a.title.localeCompare(b.title));
// console.log(sortedLiteratureList);


const App = () => {
  // set input value
  const [ inputValue, setInputValue ] = useState('');

  // set printed list
  const [ printedList, setPrintedList ] = useState(sortedLiteratureList);

  // Handle search
  const handleInputOnChange = (event) => {
    const typedValue = event.target.value;
    setInputValue(typedValue);
  };

  // Update list while searching
  useEffect(() => {
    const filteredList = sortedLiteratureList.filter(item => item.authors.includes(inputValue) || item.isbn.includes(inputValue));

    setPrintedList(filteredList);
  }, [inputValue]); 

  return(
    <main className="main">
      <Search onChange={handleInputOnChange} value={inputValue} />

      <section>
        {printedList && <ol className="literature">
          {printedList.map((item, key) => 
            <ListItem item={item} key={key} />
          )}
        </ol>}
      </section>
    </main>
  );
};

export default App;
