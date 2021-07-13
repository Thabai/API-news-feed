import './App.css';
import {useState, useEffect} from 'react';
import Card from './card';

const App = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState({ error: false, message: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=gb&apiKey=${process.env.REACT_APP_API_KEY}`
      );

      if (response.status !== 200) {
        throw new error("oops");
      }
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setError({ error: true, message: error.message });
    }
  };

  if (error.error) {
    return <h1>An error has occured: {error.message}</h1>;
  } else if (loading) {
    return <h1>loading...</h1>;
  } else {
    let news = [...data.articles];

    return (

      <div className="container">
        <h2 className="main-title">UK Top Headlines</h2>
        <button className="news-button" onClick={handleFetch}>
          Update News
        </button>
        {news
          .filter((news) => news.urlToImage)
          .map((news) => (
            <Card title={news.title} desc={news.description} img={news.urlToImage} url={news.url} />
          ))}
      </div>
    );
  }
};

export default App;