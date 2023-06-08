import React from 'react';
import data from '../data';

const Photos = () => {
  return (
    <div className="photos">
      {data.map((item, index) => (
        <div key={index}>
          <img src={item.image} alt={item.name} />
          <div className="details">
            <h2>{item.name}</h2>
            <div className="price">${item.price}</div>
            <div className="tags">
              {item.tags.map((tag, tagIndex) => (
                <span key={tagIndex}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Photos;







