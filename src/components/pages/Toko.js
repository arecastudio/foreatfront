import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Toko=()=>{
  const {storeid}=useParams();
  const [data,setData]=useState({});

  useEffect(()=>{

      try {
        axios.get(`http://localhost:8000/store/${storeid}`)
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
    <div className="page-toko">
      <h1>Ini adalah toko</h1>
      <div className="store-banner">


            <img src="assets/img/gallery/fish-banner.jpg" alt="" className="store-banner-img" />

      </div>
      <div className="container">
          <div className="btn-group store-navigator" role="group" aria-label="Basic example">
              <a href="#store-gallery-part" className="btn btn-sm btn-outline-info"><i className="fas fa-image"></i>  Gallery</a>
              <a href="#store-promo-part" className="btn btn-sm btn-outline-info"><i className="fas fa-calendar-alt"></i>  Event & Promo</a>
              <a href="#store-location-part" className="btn btn-sm btn-outline-info"><i className="fas fa-map-marker-alt"></i>  Location</a>
          </div>

          <div className="store-desc">
              <h3></h3>


          </div>
      </div>


    </div>
  )
}
export default Toko;
