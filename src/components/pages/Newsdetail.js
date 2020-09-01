import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {Helmet} from "react-helmet";
import {FacebookShareButton, FacebookIcon} from "react-share";

const NewsDetail=()=>{
    const {newsid}=useParams();
    const [data,setData]=useState({});

    const getSelfUrl=()=>{
        return "result: ";
    }

    useEffect(()=>{
        try {
            //const response= axios.get('http://localhost:8000/store/');
            //console.log('RESPONSE: '+JSON.stringify(response));
          //axios.get(`http://localhost:8000/news/${newsid}/`)
          axios.get(`http://localhost:3006/dummy/newsdetail.json`)
          .then(res => {
            const response = res.data;
            //this.setState({stores:response})
            setData(response);
            console.log(response);
          })
        } catch (error) {
          console.error(error);
        }
    },[]);

    return(
        <main className="main" role="main" className="container">
            <Helmet>
                <meta charSet="utf-8" />
                <title>{data.title}</title>
                <link rel="canonical" href={`http://localhost:8000/news/${newsid}/`} />
                <meta name="description" content={{ __html: data.content }}/>
            </Helmet>

            <div className="containerXXX">
                <div className="text-center bg-dark"><img src={data.cover} className="img-fluid" /></div>
                <div className="my-3"><h3>{data.title}</h3></div>
                <p className="store-desc-pXXX py-2"><div dangerouslySetInnerHTML={{ __html: data.content }} /></p>
                <div></div>
            </div>

            <div>
                <FacebookShareButton 
                    url={`http://localhost:8000/news/${newsid}`}
                    quote={data.title}
                    hashtag="#foreat"
                    className="">
                    <FacebookIcon size={36} />
                </FacebookShareButton>
            </div>

        </main>
    );
}
export default NewsDetail;
