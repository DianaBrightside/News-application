import { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/style.css";
import loader from "../styles/spinner.gif";

const Search = () => {
  const [category, setCategory] = useState("");
  const [fetchedData, setFetchedData] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function handleChange(event) {
    setCategory(event.target.value);
  }

  async function fetchData() {
    setError(false);
    try {
      const response = await fetch(
        `https://content.guardianapis.com/search?q=${category}&show-tags=all&page-size=5&show-fields=all&order-by=newest&api-key=0cc1c5bc-7fe4-47bc-80cc-f17c13be193c`
      );
      const data = await response.json();
      const items = data.response.results;
      setFetchedData(items);
    } catch (error) {
      setError(true);
    }
  }

  function handleReset(event) {
    event.preventDefault();
    setCategory("");
    setFetchedData("");
    setError(false);
  }

  function handleClick() {
    setCategory("");
    setFetchedData("");
    setError(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    fetchData();
    setLoading(false);
  }

  return (
    <div className="search__preview">
      <div className="search">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="search__field"
            placeholder="Type something to start search"
            onChange={handleChange}
            value={category}
          />
          <input className="search__button" type="submit" value="" />
          <button onClick={handleReset} className="clear-search__button" />
        </form>
      </div>
      {error && <div className="preview__news">Sorry, there's an error...</div>}
      {isLoading ? (
        <div className="loading__screen">
          <p className="loading-news__text">
            Loading...
            <img
              className="loading-news__image"
              width="50"
              src={loader}
              alt="loading"
            />
          </p>
        </div>
      ) : (
        <>
          {fetchedData && category.length > 0 && (
            <div className="preview__news">
              {fetchedData.map((item, index) => (
                <div key={index} className="news-item__preview">
                  <Link to={`/news/${item.id}`} onClick={() => handleClick()}>
                    {item.fields.headline}
                  </Link>
                </div>
              ))}
              {fetchedData.length === 0 && (
                <p className="news-item__preview">
                  Sorry, there were no news found
                </p>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Search;
