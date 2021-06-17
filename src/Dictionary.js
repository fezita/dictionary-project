import React, { useState } from 'react';
import './Dictionary.css';
import axios from "axios";

//https://api.dictionaryapi.dev/api/v2/entries/en_GB/hello

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");

    function handleResponse(response) {
        console.log(response);
    }

    function search(event){
        event.preventDefault();

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }
    function handleKeywordChange(event){
        setKeyword(event.target.value);

    }
    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange}></input>
            </form>
        </div>
    );
}