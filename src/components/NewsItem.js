import { useParams } from "react-router-dom";
import { useFetchNewsItem } from "../hooks/fetchNewsItem";
import moment from "moment";

import loader from "../styles/spinner.gif";
import "../styles/style.css";

const NewsItem = () => {
  const { id } = useParams();
  const userRequest = useFetchNewsItem(id);

  console.log(userRequest.item);

  console.log(id);
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
        <div>
          {userRequest.item.fields && (
            <>
              <div className="news-item__image__wrapper wrapper">
                <img
                  className="news-item__image"
                  src={userRequest.item.fields.thumbnail}
                  alt="news"
                />
              </div>
              <div className="news-item__info__wrapper">
                <p className="news-item__title">
                  {userRequest.item.fields.headline}
                </p>
                <span className="news-item__author">
                  {userRequest.item.fields.byline}
                </span>
                {/* <span className="news-item__date">{userRequest.item.fields.firstPublicationDate} */}
                <span className="news-item__date">
                  {moment(userRequest.item.fields.firstPublicationDate).format(
                    "MMMM Do YYYY"
                  )}
                </span>
                <div className="news-item__text">
                  {userRequest.item.fields.bodyText}
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};
export default NewsItem;
