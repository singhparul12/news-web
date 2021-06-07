import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, Spinner } from "react-bootstrap";

const Navigation = (props) => {
  const [Results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const search = async () => {
    setLoading(true);
    const { data } = await axios.get(
      `https://newsapi.org/v2/top-headlines?category=${props.search}`,
      {
        params: {
          country: "in",
          apiKey: process.env.REACT_APP_API_KEY,
          pageSize: 18,
        },
      }
    );
    setResults(data.articles);
    setLoading(false);
  };
  useEffect(() => {
    search();
  }, []);

  return (
    <>
      <div className=" fw-light fs-2 bg-dark text-white">
        <div className="container px-5">
          {props.search ? (
            <i className="bi bi-hash">{props.search}</i>
          ) : (
            <>
              <i className="bi bi-hash">Trending</i>
            </>
          )}
          <i className={props.icon}></i>
        </div>
      </div>

      {!loading ? (
        <>
          <div className="container">
            <div className="row m-3">
              {Results &&
                Results.map((Result, index) => {
                  return (
                    <div className="col-lg-4 col-md-6 mb-3">
                      <Card key={index} style={{ minHeight: "67vh" }}>
                        <Card.Img
                          variant="top"
                          style={{
                            width: "100%",
                            height: "180px",
                          }}
                          src={
                            Result.urlToImage
                              ? Result.urlToImage
                              : "https://via.placeholder.com/150x90"
                          }
                        />
                        <Card.Body>
                          <Card.Title className="fw-bold">
                            {Result.title}
                          </Card.Title>
                          <Card.Text>
                            {Result.content &&
                              Result.content.substring(0, 130) + "..."}
                          </Card.Text>
                          <div
                            key={index + 100}
                            className="d-grid "
                            style={{
                              width: "100%",
                              position: "absolute",
                              left: 0,
                              bottom: 0,
                            }}
                          >
                            <Button
                              variant="dark"
                              className="my-2 mx-3"
                              href={Result.url}
                            >
                              Full Article
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
      ) : (
        <div className=" m-5  display-1 fw-light text-center  p-5">
          <Spinner animation="border" role="status"></Spinner>
        </div>
      )}
    </>
  );
};
export default Navigation;
