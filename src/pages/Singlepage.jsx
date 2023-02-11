import React from 'react';
import { useParams } from 'react-router-dom';
import articles from '../components/article';
import Navbar from '../components/Navbar';



const Singlepage = () => {
  const params = useParams();
  const article = articles.find(
    (article) => article.id.toString() === params.id.toString()
  );
  return (
    <>
      <Navbar />
      <div className="SingleArticleWrapper">
        <div className="SingleArticleContainer">
          <h2>{article.title}</h2>
          <img
            src={article.imageUrl}
            alt="Generic placeholder"
            className="SingleArticleImg"
          />

          <h3>{article.description}</h3>

          <h4>
            Expert Comment: <br /> <br />
            {article.expertComment}
          </h4>
        </div>
      </div>
    </>
  );
};

export default Singlepage;