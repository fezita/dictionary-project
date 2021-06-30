import React, { useState } from 'react';
import './Dictionary.css';
import Results from "./Results";
import Photos from "./Photos";
import axios from "axios";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response) {
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        console.log(response.data);
        setPhotos(response.data.photos);
    }

    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);

        let pexelsApiKey = "563492ad6f917000010000012b587041eab54d46bbd0e936b3a24cba";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers = {"Authorization" : `Bearer ${pexelsApiKey}`}
        axios.get(pexelsApiUrl, { headers: headers}).then(handlePexelsResponse);
    }

    function handleSubmit(event){
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);

    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) { 
    return (
        <div className="Dictionary">
            <section> 
                <h1>
                    What word do you want to look up?
                </h1>
                <form onSubmit={handleSubmit}>
                    <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword}></input>
                </form>
                <div className="Hint">
                    suggested words: sunset, wine, dog, beach...
                </div>
            </section>
            <Results results={results} />
            <Photos photos={photos} />
        </div>
    );
    } else {
        load();
        return "Loading..."
    }
}