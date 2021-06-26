import React, { useState } from 'react';
import './Dictionary.css';
import Results from "./Results";
import axios from "axios";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handlePexelsResponse(response) {      
        console.log(response);
    }

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handlePexelsResponse);

        let pexelsApiKey = "563492ad6f917000010000012b587041eab54d46bbd0e936b3a24cba";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1"`;
        axios
        .get(pexelsApiKey, { 
            headers: {Authorization: `Bearer ${pexelsApiKey} ` },
        })
        .then(handlePexelsResponse);
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
        </div>
    );
    } else {
        load();
        return "Loading..."
    }
}