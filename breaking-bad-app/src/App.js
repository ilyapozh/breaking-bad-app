import React from 'react';
import Season from './components/Season';

const baseUrl = 'https://www.breakingbadapi.com/api/';
export async function fetchEpisodes() {
    return fetch(`${baseUrl}episodes`)
            .then((res) => {
              if (res.ok) return res.json();
              return `Promise reject, res status: ${res.status}`;
            })
}

function App() {
  
  const [seasons, setSeasons] = React.useState([]);

  const sortEpisodesBySeasons = (episodes) => {
    const lastSeasonNum = episodes[episodes.length - 1].season; // define the number of seasons
    let i = 1;
    while (i <= lastSeasonNum) {
      const curSeason = episodes.filter(ep => {
        return ep.season === i.toString();
      });
      setSeasons((seasons) => [...seasons, curSeason]);
      i += 1;
    }
  }

  React.useEffect(() => { // once the title in the layout is set fetch episodes data from the BB API
    fetchEpisodes()       
      .then((res) => {  // after the data fetched we extract only BB episodes from the received json file  
        const breakingBadEpisodes = res.filter(ep => {
          return ep.series === "Breaking Bad";
        });
        localStorage.setItem('breakingBadEpisodes', JSON.stringify(breakingBadEpisodes)); // to avoid unnecessary api requests set the sorted episodes 
        sortEpisodesBySeasons(breakingBadEpisodes);                                       // in localStorage for future use
      })           
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="flex flex-col">
      <h1 className="w-fit text-6xl self-center border-b-2 m-8">Breaking bad episodes</h1>
      {seasons.map((season, index) => { // reusable construction for any amount of seasons;
        return (                        // use 'Math.random().toString(36).substr(2, 9)' for key to avoid react 'unique-key' error
            <div className="border-b-8" key={index}>
              <h1 className="ml-20 text-3xl text-red-600">Season {index+1}</h1>
              <Season season={season}/>
            </div>  
        )})
      }
    </div>
  );
}

export default App
