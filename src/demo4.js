import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
export default function Demo4(props) {
  const data = {
    image: 'https://picsum.photos/seed/picsum/200/300',
    cardTitle: 'Hardik Vasar',
    cardDescription:
      'Hardik Vasar (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.',
    button: {
      url: 'https://en.wikipedia.org/wiki/Bob_Dylan',
      label: 'Go to wikipedia',
    },
  };
  return (
    <div>
      <div className="card m-5">
        <img className="card-img-top" src={data.image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{data.cardTitle}</h5>
          <p className="card-text">{data.cardDescription}</p>
          <a href={data.button.url} className="btn btn-primary">
            {data.button.label}
          </a>
        </div>
      </div>
    </div>
  );
}
