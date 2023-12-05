// NewsFetcher.js
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cards from './Cards'

const NewsFetcher = ({ category, articles, setShowAlert, setErrorMessage }) => {

    const [data, setData] = useState([])

    useEffect(() => {
        if (articles) {
            setData(articles);
        } else {
            getData();
        }
    }, [category, articles]);

    async function getData() {
        try {
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}`)
            console.log(response)
            setData(response.data.articles.slice(0, 15))
        }
        catch (err) {
            console.log(err)
            setErrorMessage(err.message);
            setShowAlert(true);
        }
    }

    return (
        <Cards articles={data} />
    )
}
export default NewsFetcher