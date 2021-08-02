import React, { useState, useEffect } from 'react';

// TASKS
// 
// 1. Parse the data from the given CSV files in a meaningful structure.
// 2. Print out a merged list of books and magazines with all their details sorted by title.
// 3. Implement search:
//    1. By isbn.
//    2. By authors' email.
// 4. Add unit tests.
// 




// Parse data … ?
// 
// 

// Print sorted list
// 
// 

const BOOKS_LIST = [
  {
    title: 'Ich helfe dir kochen. Das erfolgreiche Universalkochbuch mit großem Backteil',
    isbn: '5554-5545-4518',
    authors: 'null-walter@echocat.org',
    description: 'Auf der Suche nach einem Basiskochbuch steht man heutzutage vor einer Fülle von Alternativen. Es fällt schwer, daraus die für sich passende Mixtur aus Grundlagenwerk und Rezeptesammlung zu finden. Man sollte sich darüber im Klaren sein, welchen Schwerpunkt man setzen möchte oder von welchen Koch- und Backkenntnissen man bereits ausgehen kann.'
  },
  {
    title: 'Das große GU-Kochbuch Kochen für Kinder',
    isbn: '2145-8548-3325',
    authors: 'null-ferdinand@echocat.org,null-lieblich@echocat.org',
    description: 'Es beginnt mit... den ersten Löffelchen für Mami, Papi und den Rest der Welt. Ja, und dann? Was Hersteller von Babynahrung können, das ist oft im Handumdrehen auch selbst gemacht, vielleicht sogar gesünder, oftmals frischer. Ältere Babys und Schulkinder will das Kochbuch ansprechen und das tut es auf eine verspielte Art angenehm altersgemäß.'
  },
];

const MAGAZINES_LIST = [
  {
    title: 'Beautiful cooking',
    isbn: '5454-5587-3210',
    authors: 'null-walter@echocat.org',
    publishedAt: '21.05.2011'
  },
  {
    title: 'My familie and me',
    isbn: '4545-8541-2012',
    authors: 'null-mueller@echocat.org',
    publishedAt: '10.07.2011'
  },
  {
    title: 'Cooking for gourmets',
    isbn: '2365-5632-7854',
    authors: 'null-lieblich@echocat.org, null-walter@echocat.org',
    publishedAt: '01.05.2012'
  },
  {
    title: 'The Wine Connoisseurs',
    isbn: '2547-8548-2541',
    authors: 'null-walter@echocat.org',
    publishedAt: '12.12.2011'
  },
  {
    title: 'Vinum',
    isbn: '1313-4545-8875',
    authors: 'null-gustafsson@echocat.org',
    publishedAt: '23.02.2012'
  },
];

const BOOKS_AND_MAGAZINES_LIST = BOOKS_LIST.concat(MAGAZINES_LIST);
// console.log(BOOKS_AND_MAGAZINES_LIST);

const sortedLiteratureList = BOOKS_AND_MAGAZINES_LIST.sort((a, b) => a.title.localeCompare(b.title));
console.log(sortedLiteratureList);



const App = () => {
  console.log('Hello!');
  
  // set input value
  const [ inputValue, setInputValue ] = useState('');

  // set printed list
  const [ printedList, setPrintedList ] = useState(sortedLiteratureList);

  // Handle search
  const handleInputOnChange = (event) => {
    const typedValue = event.target.value;
    setInputValue(typedValue);
  };

  // update list while searching
  useEffect(() => {
    const filteredList = sortedLiteratureList.filter(item => item.authors.includes(inputValue) || item.isbn.includes(inputValue));

    setPrintedList(filteredList);
  }, [inputValue]); 

  return(
    <>
      <section>
        <label>
          <input value={inputValue} onChange={handleInputOnChange} placeholder="Search by ISBN or author's email" />
        </label>
      </section>

      <section>
        {printedList && <ol>
          {printedList.map((item, key) => 
            <li key={key}>
              <h3>{item.title}</h3>
              <p>{item.isbn}</p>
              <p>{item.authors}</p>
              <p>{item.publishedAt ? item.publishedAt : item.description}</p>
            </li>
          )}
        </ol>}
      </section>
    </>
  );
};

export default App;
