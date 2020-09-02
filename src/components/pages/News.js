import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Helmet} from "react-helmet";

const News=()=>{
  const [news,setNews]=useState([]);

  useEffect(()=>{
    try {
      //axios.get(`http://localhost:8000/news/`)
      axios.get(`http://localhost:3006/dummy/news.json`)
        .then(res => {
          const response = res.data;
          setNews(response);
          //console.log(response);
        })
      } catch (error) {
        console.error(error);
      }
    },[]);

  return(
    <main className="main" role="main" className="container mt-5">
      <h1>News</h1>

      {/*<section id="team" className="team section-bg">
     <div className="container">
    */}
       

          <div className="row justify-content-center">
          {
            news.map((data,x)=>{
              if(true==true){
                return(
                  <a href={`/news/${data.slug}`} key={x} className="col-lg-4 col-md-6 d-flex align-items-stretch">
                    <div className="member">
                      <div className="member-img">
                        <img src={data.cover} className="img-fluid" alt=""/>
{/*
                        <div className="social">
                          <a href=""><i className="icofont-twitter"></i></a>
                          <a href=""><i className="icofont-facebook"></i></a>
                          <a href=""><i className="icofont-instagram"></i></a>
                          <a href=""><i className="icofont-linkedin"></i></a>
                        </div>
*/}
                      </div>
                      <div className="member-info mb-5">
                        <h4 className="pt-3">{data.title}</h4>
                        <p className="text-justify text-secondary">
                        Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident
                        </p>
                      </div>
                    </div>
                  </a>
                )
              }

            })
          }
          </div>

       
      {/*
       </div>
      </section>*/}



    </main>
  )
}
export default News;
