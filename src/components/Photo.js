import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Photo(props) {
  const { search } = useParams();

  useEffect(() => {
    props.getData(search);
  },[search])

  const photos = props.data.photos;
  const photo = photos.photo;
  
  if (photo.length > 0) {
      return ( 
        <div className="photo-container">
          <h2> {props.input} Results</h2>
            <ul>
              {
                photo.map((item) => (
                  <li key={item.id}>
                    <img src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg}`} alt = '' />
                  </li>
                ))
              }
            </ul>
        </div>
        )
        } else {
          return (
            <div className='not-found'>
              <h2>No Results Found</h2> 
              <p>Your search did not return any results. Please try again.</p>
            </div>
            )
        }
}

export default Photo;