import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card } from "react-bootstrap";
import Navigation from "./Navigation";
// import './news.css';

const Top = () => {
  return <Navigation search="" />;
  // const [Results, setResults] = useState([]);
  // const search = async () => {
  //   const { data } = await axios.get("https://newsapi.org/v2/top-headlines", {
  //     params: {
  //       country: "in",
  //       pageSize: 18,
  //       apiKey: "a6c2c1da30d447aeb4be8736d39eae02",
  //     },
  //   });
  //   setResults(data.articles);
  // };
  // useEffect(() => {
  //   search();
  // }, []);
  // return (
  //   <div className="container">
  //     <div className="row m-3">
  //       {Results.map((Result, index) => {
  //         return (
  //           <div className="col-lg-4 col-md-6 mb-3">
  //             <Card key={index} style={{ minHeight: "70vh" }}>
  //               <Card.Img
  //                 variant="top"
  //                 style={{
  //                   width: "100%",
  //                   height: "200px",
  //                 }}
  //                 src={
  //                   Result.urlToImage
  //                     ? Result.urlToImage
  //                     : "https://via.placeholder.com/150x90"
  //                 }
  //               />
  //               <Card.Body>
  //                 <Card.Title>{Result.title}</Card.Title>
  //                 <Card.Text>
  //                   {Result.content && Result.content.substring(0, 100) + "..."}
  //                 </Card.Text>
  //                 <div
  //                   class="d-grid gap-2"
  //                   style={{
  //                     position: "absolute",
  //                     bottom: 0,
  //                     right: 0,
  //                     width: "100%",
  //                   }}
  //                 >
  //                   <Button variant="primary" href={Result.url}>
  //                     Full Post
  //                   </Button>
  //                 </div>
  //               </Card.Body>
  //             </Card>
  //           </div>
  //         );
  //       })}
  //     </div>
  //   </div>
  // );
};
export default Top;

// <div className="all_news">
//   <div className="main">
//     <img className="thumbnail" alt="" src={Result.urlToImage} />
//     <h2 className="s_title">
//       <a href={Result.url}>{Result.title}</a>
//     </h2>
//   </div>
// </div>
