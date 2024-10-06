import React, { useEffect, useState } from "react";
import Newsitems from "./Newsitems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?&country=us&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=12`;

    setLoading(true);
    props.setProgress(10);
    let data = await fetch(url);
    props.setProgress(50);
    let parsedData = await data.json();

    props.setProgress(70);
    console.log(parsedData);
    // console.log("Namaskar Mitro!!");

    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);

    
    props.setProgress(100);
  };
  
  useEffect(() => {
    document.title = `My News - ${capitalizeFirstLetter(props.category)} `;
    document.body.style.overflowX = 'hidden'
    updateNews();
    // eslint-disable-next-line
  }, []);

  // const handlenextclick = async () => {
  //   setPage(page + 1);
  //   updateNews();
  // };
  // const handlepreviousclick = async () => {
  //   setPage(page - 1);
  //   updateNews();
  // };

  const fetchData = async () => {
    setPage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?&country=us&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=12`;

    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <div style={{overflowX:'hidden'}} className="container my-3 ">
      <h1 style={{ marginTop: "90px" }} className="mx-5 text-center">
        Today's top Headlines from{" "}
        <b>{`${capitalizeFirstLetter(props.category)}`}</b>
      </h1>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="row">
          {articles.map((element) => {
            return (
              <div key={element.url} className="my-4 col-md-4">
                <Newsitems
                  source={element.source.name}
                  newsUrl={element.url}
                  publishedAt={element.publishedAt}
                  author={element.author}
                  title={element.title ? element.title : ""}
                  imageUrl={element.urlToImage}
                  description={
                    element.description ? element.description.slice(0, 90) : ""
                  }
                />
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

News.defaultProps = {
  category: "general",
  pageSize: 8,
};

News.propTypes = {
  category: PropTypes.string,
  pageSize: PropTypes.number,
};

export default News;
