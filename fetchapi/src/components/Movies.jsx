import React, { useState } from "react";
import { useEffect } from "react";

function Movies() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies"
    )
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="container">
        <div className="alert alert-info text-center mt-4">All Movie List:</div>
      </div>
      <div className="container">

        <div className="d-flex flex-wrap gap-4 justify-content-center">
          {data.slice(0,-1).map((item, index) => {
            return (
              <div key={index}>
                <div className="card" style={{ width: "18rem" }}>
                  <img src={item.Poster} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.Title}</h5>
                    <p className="card-text">{item.Year}</p>
                    <p className="card-text">{item.Runtime}</p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Movies;
