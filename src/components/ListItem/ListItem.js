import React from 'react';
// import styles from './list-item-styles.module.scss'

const ListItem = ({item}) => {
  console.log("List item");

  return(
    <li className="literature-item">
      <p className="literature-item__type">
        {item.publishedAt ? "magazine" : "book"}
      </p>
      <h3 className="literature-item__title">
        {item.title}
      </h3>
      <p className="literature-item__isbn">
        ISBN: {item.isbn}
      </p>
      <p className="literature-item__authors">
        {item.authors}
      </p>

      {item.publishedAt ? (
        <p className="literature-item__pubdate">
          <time
            dateTime={item.publishedAt} pubdate="pubdate"
          >
              Issued: {item.publishedAt}
          </time>
        </p>
      ) : (
        <p className="literature-item__description">
          {item.description}
        </p>
      )}
    </li>
  )
};

export default ListItem;