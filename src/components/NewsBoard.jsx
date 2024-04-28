import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NewsBoard = ({category}) => {
    const [articles , setArticles] = useState([]);

    useEffect(() => {
        const apiKey = ''
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setArticles(data.articles))
            .catch(error => console.error('Error fetching data:', error));
    }, [category]);

    return (
        <>
            <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>
            {articles && articles.map((news, index) => (
                <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
            ))}
        </>
    );
};

export default NewsBoard;
