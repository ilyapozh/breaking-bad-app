import React from 'react';
import { Link } from 'react-router-dom';

function Season(props) {
    
  return (
    <div className="season">
      {props.season.map((ep) => {
          const episodeLink = `/episode${ep.episode_id}`; // use this construction to build unique dynamic link for each requested episode
          return (
                <div className="border-2 w-80 ml-60 my-5 text-center" key={ep.episode_id}>
                    <Link className="text-2xl text-indigo-700" to={episodeLink}>{ep.title}</Link>
                    <p className="text-center">{ep.air_date}</p>
                </div>
          );
        }
      )}
    </div>
  );
}

export default Season;
