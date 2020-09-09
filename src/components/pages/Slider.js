import React,{useEffect, useState} from 'react';
import {Carousel} from 'react-bootstrap';
import axios from 'axios';

const Slider=()=>{
  const [slider,setSlider]=useState([]);

    useEffect(() => {

      try {
      axios.get(`http://dummy.foreat.co.id:8000/imageslider`)
      //axios.get(`http://localhost:3006/dummy/slider.json`)
      //axios.get(`http://dummy.foreat.co.id:8000/imageslider`)
      .then(res => {
        const response = res.data;
        setSlider(response);
        //console.log(response);
      })
    } catch (error) {
      console.error(error);
    }


    }, []);


    return(
      <Carousel>
        {
          /*HARUS GUNAKAN REACT-BOOSTRAP KARENA CAROUSEL MEMBUTUHKAN JAVASCRIPT YANG AKAN CRASH DENGAN REACTJS JIKA HANYA GUNAKAN BOOSTRAP VERSI BIASA*/
          slider.map((data,x)=>{
            if(data.isActive==true){
              return(
                <Carousel.Item key={x}>
                <div className="imagebox">
                  <img
                  className="d-block w-100"
                  src={data.picture}
                  alt={data.title}
                />
                </div>
                </Carousel.Item>
              )
            }

          })
        }
      </Carousel>
    );
}

export default Slider;
