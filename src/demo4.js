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
      <div class="card m-5">
        <img class="card-img-top" src={data.image} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">{data.cardTitle}</h5>
          <p class="card-text">{data.cardDescription}</p>
          <a href={data.button.url} class="btn btn-primary">
            {data.button.label}
          </a>
        </div>
      </div>
    </div>
  );
}
