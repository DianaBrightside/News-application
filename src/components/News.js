import { Link } from "react-router-dom";
import moment from "moment";

import { useFetchNews } from "../hooks/fetchNews";
import ScrollButton from "./ScrollButton";
import loader from "../styles/spinner.gif";

const News = ({ pageSize, category }) => {
  const userRequest = useFetchNews(pageSize, category);
  return (
    <div>
      {userRequest.error && (
        <div className="error__screen">
          <p className="error__text">Something went wrong... Error</p>
        </div>
      )}
      {userRequest.isLoaded ? (
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
        <div className="news__block wrapper">
          {userRequest.items.map((item, index) => {
            return (
              <div key={"news" + index} className="news__item">
                <img
                  width={297}
                  className="news__image"
                  alt={item.fields.headline}
                  src={item.fields.thumbnail}
                />
                <div className="news__info">
                  <Link to={`/news/${item.id}`}>
                    <span className="news__title">{item.fields.headline}</span>
                  </Link>
                  <p className="news__text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tempora, eveniet, vero veniam, ullam fuga quasi quia minima
                    reiciendis at quam tempore qui nobis sit cumque adipisci
                    doloribus quis voluptas corporis sint tenetur!
                  </p>
                  <div className="news__bottom">
                    <span className="news__date">
                      {moment(item.fields.firstPublicationDate).format(
                        "MMMM Do YYYY"
                      )}
                    </span>
                    <Link to={`/news/${item.id}`}>
                      <button className="news__button">Read more</button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
          <ScrollButton />
        </div>
      )}
    </div>
  );
};
export default News;
