import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

import { Card, Button } from "react-bootstrap";

const Search = () => {
  const { sid } = useParams();
  const [Results, setResults] = useState([]);
  const search = async () => {
    const { data } = await axios.get("https://newsapi.org/v2/top-headlines", {
      params: {
        q: sid,
        country: "in",
        pageSize: 20,
        apiKey: process.env.REACT_APP_API_KEY,
      },
    });
    setResults(data.articles);
  };
  console.log(Results);
  useEffect(() => {
    search();
  }, [sid]);
  return (
    <>
      <div className="bg-dark text-white  fs-4 px-5">
        {`Search results for "${sid.toUpperCase()}"`}
      </div>
      <div className="container">
        {Results ? "" : <h2 className="display-5 m-3">No Results Found</h2>}
        <div className="row m-3">
          {Results &&
            Results.map((Result, index) => {
              return (
                <div className="col-lg-4 col-md-6 mb-3">
                  <Card key={index} style={{ minHeight: "66vh" }}>
                    <Card.Img
                      variant="top"
                      style={{
                        width: "100%",
                        height: "200px",
                      }}
                      src={
                        Result.urlToImage
                          ? Result.urlToImage
                          : "https://via.placeholder.com/150x90"
                      }
                    />
                    <Card.Body>
                      <Card.Title>{Result.title}</Card.Title>
                      <Card.Text>
                        {Result.content &&
                          Result.content.substring(0, 100) + "..."}
                      </Card.Text>
                      <div
                        key={index + 100}
                        className="d-grid gap-2"
                        style={{
                          position: "absolute",
                          bottom: 0,
                          right: 0,
                          width: "100%",
                        }}
                      >
                        <Button variant="dark" href={Result.url}>
                          Full Post
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
export default Search;
