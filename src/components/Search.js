import React, {useState,useEffect} from 'react';
import axios from 'axios';
import './news.css';

const Search=()=>{
    const [term,setTerm] =useState('');
    const[lists,setLists]=useState([]);
     let search=null;
    console.log(lists);
    useEffect(()=>{
        search= async ()=>{
    const {data}= await axios.get('https://newsapi.org/v2/top-headlines',{
    params: {
         q:term,
         country:'in',
         pageSize:20,
        apiKey:'a6c2c1da30d447aeb4be8736d39eae02',
    }
    });
     setLists(data.articles);
    };
    
    },[term]);
    
return (
    <div className="ui form">
        <div className="field">
            <input
            value={term}
            onChange={(e)=> setTerm(e.target.value)}
             className="input"/>
             <br/>
            <button className="ui button" style={{color:'white'},{backgroundColor:'grey'}} type="submit"
            onClick={(e)=>search()}
            >Search</button>
        </div>
         <div className="all">
        {
        lists.map((list) => {
        if(list.totalResults===0){
            return (
            <div>NO RESULTS FOUND!</div>
            );
         }
            else{
                return (
                    <div className="main">
                    <img className="thumbnail"
                     alt=""
                    src={list.urlToImage}/>
                       <h2 className="s_title">
                       <a href={list.url}>{list.title}</a>
                       </h2>
                       <div className="desc">
                           {list.description}
                       </div>
                     </div>
                       );
            }
    })
    }
    </div>

    </div>
    );
};
export default Search;