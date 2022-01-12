import React from 'react';
import { Link } from 'react-router-dom';

function Episode() {

    const [episode, setEpisode] = React.useState({});
    const [characters, setCharacters] = React.useState([]);

    React.useEffect(() => {
        const regEx = /\d+$/;    // according to how we built the link at Season.js(`/episode${ep.episode_id}`) 
                                // we look for either a single, neither a dual number in the end of the string

        const currentEpisodeNum = window.location.pathname.match(regEx); // we extract the current episode_id 
                                                                        //to find it's data in LS
        if (currentEpisodeNum) { // check if currentEpisode is defined to avoid errors with unvalid urls;
            const currentEpisode = JSON.parse(localStorage.getItem('breakingBadEpisodes'))[currentEpisodeNum[0] - 1];
                                // with the found episode_id we find the exact episode data
            setEpisode(currentEpisode);
            setCharacters(currentEpisode.characters);
        }
    }, []);

    return (
        <div >
            <h1 className="ml-20 mt-20 text-4xl">{episode.title}</h1>
            <h2 className="ml-20 mt-5 text-xl">Air date: {episode.air_date}</h2>
            <span className="ml-20 mt-5 text-xl text-red-600">Characters: </span> 
                {characters.map((character, index) => {
                    const curCharacter = '/character/name=' + character.replace(' ', '+');
                    return (
                        <Link className="text-indigo-700 text-xl" key={episode.episode_id + index} to={curCharacter}>{character}, </Link>
                    )           // created dynamic path for links to characters 
                })}           
        </div>
    );
}

export default Episode;