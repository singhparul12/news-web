import React, {useState,useEffect} from 'react';
import axios from 'axios';

const Navigation = (props) =>{
    const [Results,setResults] =useState([]);

    useEffect(()=>{
        const search= async ()=>{
    const {data}= await axios.get('https://newsapi.org/v2/top-headlines?category=props.posts',{
    params: {
         country:'in',
         apiKey:'a6c2c1da30d447aeb4be8736d39eae02',
    }
    });
     setResults(data.articles);
    };
    search();
    
    },[]);  
return (
    <div className="all"> 
           {
           Results.map((Result) => {
        return (
            <div className="all_news">
            <div className="main">
           <img className="thumbnail"
             alt=""
            src={Result.urlToImage}
            
             />
               <h2 className="s_title">
               <a href={Result.url}>{Result.title}</a>
               </h2>
             </div>
             </div>
             
               );
    })
    }
    </div>
    );
};
export default Navigation;