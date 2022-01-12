import React from 'react';

function CharacterPage() {

    const [characterData, setCharacterData] = React.useState({});

    const baseUrl = 'https://www.breakingbadapi.com/api/';

    function fetchCharacterData(name) {
        return fetch(`${baseUrl}characters?${name}`)
                    .then((res) => {
                        if (res.ok) return res.json();
                        return `Promise reject, res status: ${res.status}`;
                    })
    }

    React.useEffect(() => {
            // extract name from the url
        const currentCharacterName = window.location.pathname.replace('/character/', '');
            // fetch character data with the extracted name
        fetchCharacterData(currentCharacterName)
            .then((res) => {
                const currentData = res[0];
                setCharacterData(currentData);               
            })
            .catch((err) => console.log(err))    
    }, []);
    
    if (characterData) {
        return (
            <div className="flex flex-col">
                <img className="w-96 mt-20 self-center rounded" src={characterData.img} alt="character" />
                <div className="self-center mt-20">
                    <h1 className="text-center text-2xl mb-5">{characterData.name}</h1>
                    <h2>Date of Birth: {characterData.birthday}</h2>
                    <h2>Nickname: {characterData.nickname}</h2>
                    <h2>Status: {characterData.status}</h2>
                    <h2>
                        Occupation:
                        {characterData.occupation ? characterData.occupation.map((oc) => ` ${oc}, `) : ''}
                    </h2>
                </div>
            </div>
        );
    }

    return <h1 >Loading...</h1>
}

export default CharacterPage;