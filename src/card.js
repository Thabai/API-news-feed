const Card = ({ title, desc, img, url  }) => {
    return (
  
            <div className="news-container">
              <div className="news-info">
                <h3>{title}</h3>
                <div className="news-desc">
                  <p>{desc}</p>
                </div>
              </div>
              <div>
                  <img className="thumbnail" src={img} />
              </div>
              <nav>
               <a href={url} target="_blank">
                 View Full Story
                </a>
           </nav>
            </div>

    );
};

export default Card;